# Accessibility Fix Project

This project focuses on improving web accessibility by applying WCAG 2.1
guidelines and best practices.\
The tasks were implemented in multiple HTML and CSS files to ensure the
website meets accessibility standards.

## 📌 Project Overview

The project is part of an accessibility learning exercise.\
The objective is to identify accessibility issues and fix them in the
provided HTML/CSS files using proper semantic structure, ARIA
attributes, and WCAG techniques.

## ✅ Tasks Implemented

### 0. Make the "works" card focus visible

-   Ensured keyboard users can see when a card link has focus.
-   Updated CSS to apply styles on `:focus` and `:hover` states.

### 1. Add the skip-links

-   Implemented skip links navigation to jump to:
    -   Primary navigation (`#a11y-primary-nav`)
    -   Main content (`#a11y-main-content`)
-   Added `tabindex="-1"` for better focus handling.

### 2. Elements must have sufficient color contrast

-   Updated CSS variables and styles to ensure text/background contrast
    meets WCAG AA requirements.

### 3. Documents must have `<title>` element

-   Added descriptive `<title>` to HTML documents (e.g.,
    `Homepage - A fake website`).

### 4. `<html>` element must have a lang attribute

-   Added `lang="en"` to `<html>` for screen reader support.

### 5. Images must have alternate text

-   Added descriptive `alt` attributes to meaningful images.
-   Added empty `alt` (`alt=""`) for decorative images.

### 6. Form elements must have labels

-   Linked `<label>` with inputs using `for` and `id` attributes.
-   Ensured better usability and accessibility for screen readers.

### 7. Links must have discernible text

-   Added descriptive link text or `aria-label` to icon-only links
    (e.g., Facebook, Twitter).

### 8. Zooming and scaling must not be disabled

-   Removed `user-scalable=no` from the viewport meta tag.

### 9. Heading levels should only increase by one

-   Fixed heading hierarchy (`h1 → h2 → h3`) to improve document
    outline.

### 10. Document must have one main landmark

-   Used semantic landmarks: `<header>`, `<nav>`, `<main>`, `<footer>`,
    `<section>`.

### 11. More than 2 elements become list

-   Converted multiple `<p>` inside a `<div>` into `<ul>` with `<li>`
    items.

## 🛠️ Technologies Used

-   **HTML5** (semantic structure, ARIA attributes)
-   **CSS3** (focus styles, contrast fixes)
-   **Accessibility Tools**: Axe, HeadingsMap, Landmarks extension

## 🎯 Learning Objectives

By completing this project, I learned: - ARIA's main purpose - WCAG
conformance levels (A, AA, AAA) - Importance of accessible design -
Tools to check and improve accessibility

## 🚀 How to Run the Project

1.  Clone the repository

    ``` bash
    git clone https://github.com/holbertonschool-web_front_end.git
    ```

2.  Navigate to the **accessibility** directory.\

3.  Open the `fix-a11y` and `skip-links` folders in a browser.\

4.  Test with accessibility tools (Axe, Lighthouse, NVDA/VoiceOver).

------------------------------------------------------------------------

👨‍💻 **Author**: Vahid Aliyev\
📅 **Date**: 16 September 2025
