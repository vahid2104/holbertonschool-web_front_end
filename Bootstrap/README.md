📌 Bootstrap Responsive Layout Projects



This repository contains multiple responsive web design projects built as part of the Holberton School Web Stack – Bootstrap curriculum.

Each task focuses on specific Bootstrap utilities, components, and responsive breakpoints.

No inline CSS or <style> tags were used — only Bootstrap classes and (when required) an external stylesheet.



📂 Project Structure

.

├── task-01/    # Responsive rows \& columns with ordering rules

├── task-02/    # Responsive table with alert header

├── task-03/    # Cards with modal

├── task-04/    # Tabs \& collapsible content (Bob Dylan example)

├── task-05/    # Responsive layout with Left / Middle / Right divs

├── task-06/    # Pricing page with custom CSS



📝 Tasks Overview

🔹 Task 01 – Responsive Rows and Ordering



Built responsive rows with different rules per breakpoint:



Cells have padding .5rem, centered white text with background color.



Different layouts for <576px, <768px, <992px, <1200px.



Ordering changes dynamically depending on screen size.



🔹 Task 02 – Table with Alert Header



Includes a Bootstrap alert with h4 heading.



Responsive table (table-dark, table-hover) inside a .table-responsive.



Breakpoint set at 992px.



Badge (only 5) included inside the title.



🔹 Task 03 – Cards with Modal



A card deck displays 3 programming languages: HTML, CSS, JavaScript.



Each card has:



Card header → “Coding”



Image placeholder (450x200)



Card body with title, description, and button



Card footer with duration (e.g., 40h)



The “Play with” button uses btn-danger and opens a modal.



Modal contains:



Information about CodePen



Login form (username, password) with submit button



🔹 Task 04 – Tabs \& Collapsible Content (Bob Dylan)



Background of the body → bg-dark.



Inside a .container with padding.



Tabs navigation (nav-tabs) with “Introduction” and “Discography”.



Introduction tab: displays Bob Dylan biography text.



Discography tab:



Albums listed as a grouped layout.



Each album name is a collapsible item with description.



Transition between tabs uses fade animation.



🔹 Task 05 – Responsive Left / Middle / Right Layout



Includes two titles:



“Big title” → shown only when screen >768px



“Small title” → shown only when screen ≤768px



Main .container:



Background bg-info, padding, rounded borders.



Inside container → 3 divs:



Left: aligned left, light text, bottom + right border.



Middle: centered, light text, shadow, disappears when width ≤768px.



Right: aligned right, light text, bottom + left border.



🔹 Task 06 – Pricing Page (with custom CSS)



Navigation bar with links and “Sign up” button.



Title “Pricing” and description text.



Three pricing cards: Free, Pro, Enterprise.



Custom styles in 6-styles.css:



.btn-primary → background #E0003C, hover #BC1340



.btn-outline-primary → border \& text color #E0003C



a → link color #E0003C (normal, hover, focus)



.card and .card-header → border color #E0003C, border-radius 1rem, header background #E0003C with white text



.text-muted → color #8C8C8C



🛠️ Technologies



HTML5



Bootstrap 4.4.1



Custom CSS (only in Task 06)





✨ Learning Outcomes



By completing these tasks, you will practice:



Building responsive layouts with Bootstrap grid system



Using utility classes for spacing, alignment, and responsiveness



Creating cards, tables, modals, alerts, badges, and tabs



Overriding Bootstrap styles with custom CSS

