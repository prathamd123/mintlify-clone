const a1 = 'darkTheme';
const a2 = 'lightTheme';

console.log(a1, a2);

//logic for the toggle button

const toggleBtn = document.getElementById('toggle-btn');

toggleBtn.addEventListener('click', () => {
    document.documentElement.setAttribute('data-theme', document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
});