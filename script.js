/**
 * Navigation Logic
 * Hides all pages and only shows the one matching the pageId.
 */
function switchPage(pageId) {
    // Get all page elements
    const pages = document.querySelectorAll('.page');
    
    // Remove the 'active' class from all pages
    pages.forEach(page => {
        page.classList.remove('active');
    });

    // Find the target page by ID
    const target = document.getElementById(pageId);
    
    // If the target page exists, add the 'active' class to show it
    if (target) {
        target.classList.add('active');
    }

    // Scroll to the top of the window
    window.scrollTo(0, 0);

    // Close the mobile menu if it is currently open
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenu) {
        mobileMenu.classList.remove('active');
    }
}

/**
 * Theme Toggle
 * Toggles the 'dark' class on the body element.
 * The CSS handles the color changes based on this class.
 */
function toggleTheme() {
    document.body.classList.toggle('dark');
}

/**
 * Login Simulation
 * Toggles the 'logged-in' class on the body to switch between
 * Guest and User views. Redirects to Dashboard or Home accordingly.
 */
function toggleLogin() {
    document.body.classList.toggle('logged-in');
    
    // Check if the user is now "logged in"
    if (document.body.classList.contains('logged-in')) {
        switchPage('dashboard');
    } else {
        switchPage('home');
    }
}

/**
 * Mobile Menu Toggle
 * Toggles the visibility of the full-screen mobile menu.
 */
function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    if (menu) {
        menu.classList.toggle('active');
    }
}

/**
 * Mock "Post" Functionality
 * Demonstrates interactivity for the 'Post' button in the dashboard.
 */
function mockPost() {
    const input = document.querySelector('textarea');
    if (input && input.value.trim() !== "") {
        alert("Post functionality is simulated.\n\nYou wrote: " + input.value);
        input.value = ""; // Clear the input
    } else {
        alert("Please write something to post.");
    }
}
