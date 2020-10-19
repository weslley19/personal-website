// Menu mobile

const asideMobile = document.querySelector('.main-content-aside-mobile');
const aside = document.querySelector('.mobile');
const closIcon = document.querySelector('.main-aside-clos-icon');

asideMobile.addEventListener('click', () => {
    aside.style.display = 'block';
    closIcon.style.display = 'block';
});

closIcon.addEventListener('click', () => {
    aside.style.display = 'none';

    window.location.href = window.location.href;
});
