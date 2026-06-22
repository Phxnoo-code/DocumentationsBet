const fs = require('fs');
const file = 'c:/Users/phano/Documents/DocumentBet/docs/menu/member-ranks/members.md';
let c = fs.readFileSync(file, 'utf8');

// Fix <img> tags to be self-closing
c = c.replace(/<img([^>]+)>/g, (m, attrs) => {
    if (!attrs.trim().endsWith('/')) {
        return `<img${attrs} />`;
    }
    return m;
});

// Fix indentation of <a href...> tags that start with `    *   <a`
c = c.replace(/^(\s*\*\s*)<a href="/gm, '\n<a href="');

fs.writeFileSync(file, c, 'utf8');
console.log('Fixed tags');
