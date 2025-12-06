document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;

  const themeBtns = document.querySelectorAll('.tog-theme');
  if (localStorage.getItem('theme') === 'dark') body.classList.add('dark');

  themeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      body.classList.toggle('dark');
      localStorage.setItem('theme', body.classList.contains('dark') ? 'dark' : 'light');
    });
  });

  const menuBtn = document.querySelector('.menu-btn');
  const closeBtn = document.querySelector('.close-menu');
  const mobMenu = document.querySelector('.mob');

  if (menuBtn && mobMenu) {
    menuBtn.addEventListener('click', () => mobMenu.classList.add('open'));
    closeBtn.addEventListener('click', () => mobMenu.classList.remove('open'));
  }

  const isAuth = localStorage.getItem('user') === 'true';
  const guestNav = document.querySelectorAll('.auth-guest');
  const userNav = document.querySelectorAll('.auth-user');

  if (isAuth) {
    guestNav.forEach(el => el.classList.add('hide'));
    userNav.forEach(el => el.classList.remove('hide'));
  } else {
    guestNav.forEach(el => el.classList.remove('hide'));
    userNav.forEach(el => el.classList.add('hide'));
  }

  const loginForm = document.getElementById('login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      localStorage.setItem('user', 'true');
      window.location.href = 'dashboard.html';
    });
  }

  const logoutBtns = document.querySelectorAll('.do-logout');
  logoutBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      localStorage.removeItem('user');
      window.location.href = 'index.html';
    });
  });

  if (window.location.pathname.includes('dashboard.html') && !isAuth) {
    window.location.href = 'login.html';
  }
});
