const toggleButton = document.querySelector('.menu-toggle');
const navList = document.getElementById('nav-list');

toggleButton.addEventListener('click', () => {
  const isExpanded = navList.style.display === 'flex';
  navList.style.display = isExpanded ? 'none' : 'flex';
  toggleButton.setAttribute('aria-expanded', !isExpanded);
});