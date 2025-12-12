(function () {
  const toggleButton = document.getElementById('theme-toggle');
  const body = document.body;


  if (!toggleButton) {
    console.error('Theme toggle button not found (#theme-toggle).');
    return;
  }

  const saved = localStorage.getItem('site-theme');
  if (saved === 'dark') {
    body.classList.add('dark');
    toggleButton.setAttribute('aria-pressed', 'true');
    toggleButton.textContent = 'Switch to Light';
  } else {
    body.classList.remove('dark');
    toggleButton.setAttribute('aria-pressed', 'false');
    toggleButton.textContent = 'Switch to Dark';
  }

  toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark');
    const isDark = body.classList.contains('dark');

    toggleButton.setAttribute('aria-pressed', isDark ? 'true' : 'false');
    toggleButton.textContent = isDark ? 'Switch to Light' : 'Switch to Dark';

    localStorage.setItem('site-theme', isDark ? 'dark' : 'light');
  });

  console.info('script.js loaded — theme toggle initialized.');
})();
