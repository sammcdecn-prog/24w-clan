const yearEl = document.getElementById('year');
const themeToggle = document.getElementById('theme-toggle');
const root = document.documentElement;
const THEME_KEY = '24w-theme';

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

function setTheme(theme) {
  root.setAttribute('data-theme', theme);
  if (themeToggle) {
    themeToggle.textContent = theme === 'dark' ? '🌙 Dark' : '☀️ Light';
  }
}

const savedTheme = localStorage.getItem(THEME_KEY);
if (savedTheme === 'light' || savedTheme === 'dark') {
  setTheme(savedTheme);
}

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const nextTheme = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    localStorage.setItem(THEME_KEY, nextTheme);
  });
}
