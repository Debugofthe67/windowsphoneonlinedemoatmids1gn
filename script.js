document.addEventListener('DOMContentLoaded', () => {
    const contentDivs = document.querySelectorAll('.content');
    const navButtons = document.querySelectorAll('.nav-button');
    const appListItems = document.querySelectorAll('.app-list li');
    const backButtons = document.querySelectorAll('.back-button');

    function showPage(targetId) {
        contentDivs.forEach(div => div.classList.remove('active'));
        document.getElementById(targetId).classList.add('active');
    }

    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            navButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            showPage(button.dataset.target);
        });
    });

    appListItems.forEach(item => {
        item.addEventListener('click', () => {
            showPage(item.dataset.target);
        });
    });

    backButtons.forEach(button => {
        button.addEventListener('click', () => {
            showPage('home-screen'); // Navigate back to the home screen
        });
    });
});
