const themeSwitch = document.getElementById('theme-switch');
const body = document.body;

themeSwitch.addEventListener('change', function () {
    if (themeSwitch.checked) {

        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        body.style.backgroundColor = '#333333';
        cards.forEach(card => {
            card.classList.remove('light-mode');
            card.classList.add('dark-mode');
        });
    } else {

        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        body.style.backgroundColor = '#ffffff';
        cards.forEach(card => {
            card.classList.remove('dark-mode');
            card.classList.add('light-mode');
        });
    }
});
