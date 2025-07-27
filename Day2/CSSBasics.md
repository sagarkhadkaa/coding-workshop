# CSS Basics for Beginners

---

## What is CSS?

CSS (Cascading Style Sheets) is a language used to style and layout web pages. It controls colors, fonts, spacing, and positioning of HTML elements.

---

## Ways to Add CSS

- **Inline CSS:** Directly in the HTML element using the `style` attribute.
- **Internal CSS:** Inside a `<style>` tag in the HTML `<head>`.
- **External CSS:** In a separate `.css` file linked with `<link>`.

---

## Basic CSS Syntax

```css
selector {
  property: value;
}
```

Example:

```css
h1 {
  color: blue;
  font-size: 2em;
}
```

---

## Common Selectors

- `element` (e.g., `p`, `h1`)
- `.class` (e.g., `.container`)
- `#id` (e.g., `#main`)

---

## Example: Internal CSS

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      body {
        background: #f0f0f0;
      }
      h1 {
        color: #007bff;
      }
      p {
        font-size: 1.2em;
      }
    </style>
  </head>
  <body>
    <h1>Styled Heading</h1>
    <p>This paragraph is styled with internal CSS.</p>
  </body>
</html>
```

---

## Example: External CSS

**styles.css**

```css
body {
  background: #fffde7;
}
h1 {
  color: #e91e63;
}
p {
  font-size: 1.2em;
}
```

**HTML file:**

```html
<link rel="stylesheet" href="styles.css" />
```

---

## Useful Properties

- `color`, `background-color`
- `font-size`, `font-family`
- `margin`, `padding`, `border`
- `width`, `height`
- `text-align`, `display`, `position`

---

> For more, visit: https://developer.mozilla.org/en-US/docs/Web/CSS
