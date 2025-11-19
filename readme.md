Gatherly 🌿

Gatherly is a modern, responsive, and interactive community platform designed to replace noisy group chats with organized, purpose-driven spaces.

It features navigation, login simulation, dark mode, and interactive modals, all achieved through advanced layout techniques like the "Checkbox Hack" and Peer Selectors.

🚀 Features

Pure HTML/CSS: All logic is handled via styles and markup.

Single Page Application (SPA): Instant navigation without page reloads.

Dark Mode: A fully functional theme toggle that switches colors and icons.

Responsive Design: Works on mobile, tablet, and desktop.

Interactive UI:

Mobile Hamburger Menu (freezes background scroll).

Login Simulation (swaps navigation bars and redirects).

"Post" and "Create Space" simulations.

Sticky Footer: Stays at the bottom of the viewport regardless of content size.

🛠️ How It Works (The Mechanics)

You might wonder: How does the page interact and change states using only styles?

This project uses a technique commonly known as the Checkbox/Radio Hack.

1. The Hidden Engine

At the top of the index.html file, there is a list of hidden <input> elements (Radio buttons and Checkboxes). These act as the "State Manager" for the application.

<!-- Example of the hidden controllers -->
<input type="radio" name="page" id="nav-home" class="controller" checked>
<input type="checkbox" id="chk-dark" class="controller">


2. The Remote Controls

We use HTML <label> tags as buttons. When you click a label (like a navigation link), the browser automatically checks the corresponding hidden input.

3. The CSS Logic

We use the CSS Sibling Selector (~) to change the visible content based on which input is checked.

Navigation: When the nav-home radio is checked, CSS hides all other pages and reveals the #p-home div.

Dark Mode: When the chk-dark checkbox is checked, CSS overrides the color variables for the main wrapper.

Login: When chk-login is checked, CSS hides the public navigation and reveals the dashboard.

📂 Project Structure

Since this is a simple prototype, everything is contained in a single file for easy portability.

index.html: Contains the HTML structure, the CSS logic (in the <style> tag), and all page views.

💻 How to Run

Download the index.html file.

Double-click it to open it in any web browser (Chrome, Safari, Firefox).

That's it!

🎨 Design System

Font: Segoe UI / Sans-serif.

Primary Color: Emerald Green (#059669).

Light Theme: Slate/White background.

Dark Theme: Pure Black (#000000) / Dark Grey (#111111).

📝 License

This project is open source and available for personal and educational use.

Built with 💚 by Niranjan Singh(Gatherly Team)
