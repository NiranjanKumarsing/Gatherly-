function switchPage(pageId) {
    const pages = document.querySelectorAll('.page');
    
    pages.forEach(page => {
        page.classList.remove('active');
    });

    const target = document.getElementById(pageId);
    
    if (target) {
        target.classList.add('active');
    }

    window.scrollTo(0, 0);

    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenu) {
        mobileMenu.classList.remove('active');
    }
}

function toggleTheme() {
    document.body.classList.toggle('dark');
}

function toggleLogin() {
    document.body.classList.toggle('logged-in');
    
    if (document.body.classList.contains('logged-in')) {
        switchPage('dashboard');
    } else {
        switchPage('home');
    }
}


function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    if (menu) {
        menu.classList.toggle('active');
    }
}


function mockPost() {
    const input = document.querySelector('textarea');
    if (input && input.value.trim() !== "") {
        alert("Post functionality is simulated.\n\nYou wrote: " + input.value);
        input.value = ""; 
    } else {
        alert("Please write something to post.");
    }
}
