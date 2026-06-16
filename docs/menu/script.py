import os
import re

directory = r'c:\Users\phano\Documents\DocumentBet\docs\menu'
exclude_headers = ['คำอธิบาย', 'สิทธิ์การเข้าใช้งาน', 'วิธีเข้าถึงหน้านี้', 'Quick Reference', 'รายละเอียดของแต่ละส่วนในหน้าจอ']

for root, dirs, files in os.walk(directory):
    for file in files:
        if file.endswith('.md') and file != 'commissions.md':
            filepath = os.path.join(root, file)
            with open(filepath, 'r', encoding='utf-8') as f:
                lines = f.readlines()
            
            new_lines = []
            for line in lines:
                # Skip standalone --- lines
                if re.match(r'^---\s*$', line):
                    continue
                
                # Check if it's a ## header
                header_match = re.match(r'^##\s+(.*)', line)
                if header_match:
                    header_text = header_match.group(1).strip()
                    # Check if it contains any of the excluded strings
                    is_excluded = any(excl in header_text for excl in exclude_headers)
                    if not is_excluded:
                        # Ensure blank lines before and after ---
                        # Pop trailing blank lines from new_lines
                        while new_lines and new_lines[-1].strip() == '':
                            new_lines.pop()
                        
                        if new_lines:
                            new_lines.append('\n')
                        new_lines.append('---\n\n')
                
                new_lines.append(line)
                
            with open(filepath, 'w', encoding='utf-8') as f:
                f.writelines(new_lines)
