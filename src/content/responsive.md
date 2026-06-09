# Responsive Design

DocBet is designed to provide a premium viewing experience across mobile viewports, tablet screens, and desktop layouts.

## Mobile Sidebar Drawer

On viewports below 768px (Chakra `md` breakpoint), the sidebar transforms:
- It hides from the side grid using `display={{ base: "none", md: "block" }}`.
- A hamburger menu toggle appears on the top navbar.
- Clicking the toggle opens an absolute-positioned sidebar overlay drawer with a blurry background layer, providing full access to all dynamic document pages.

---

## Styling Layout Breakpoints

You can define responsive spacing using Chakra UI's object props:

```tsx
<Box
  px={{ base: 4, md: 8 }}
  py={{ base: 6, md: 10 }}
  maxWidth="100%"
>
  Content container
</Box>
```

This makes it incredibly simple to write clean responsive layouts without managing manual `@media` queries in custom CSS files.
