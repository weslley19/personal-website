const buttonUI = document.querySelector('#ui');
const buttonWeb = document.querySelector('#web');
const buttonMobile = document.querySelector('#mobile');

const ui = document.querySelector('.ui-clone');
const web = document.querySelector('.web');
const mobile = document.querySelector('.mobile');

const active = document.querySelector('#ui');
if (active.classList.contains('active')) {
    ui.style.display = 'flex';

    web.style.display = 'none';
    mobile.style.display = 'none';
}

buttonUI.addEventListener('click', () => {
    buttonUI.classList.add('active');
    buttonWeb.classList.remove('active');
    buttonMobile.classList.remove('active');
    ui.style.display = 'flex';

    web.style.display = 'none';
    mobile.style.display = 'none';
});

buttonWeb.addEventListener('click', () => {
    buttonWeb.classList.add('active');
    buttonMobile.classList.remove('active');
    buttonUI.classList.remove('active');
    web.style.display = 'flex';

    ui.style.display = 'none';
    mobile.style.display = 'none';
});

buttonMobile.addEventListener('click', () => {
    buttonMobile.classList.add('active');
    buttonUI.classList.remove('active');
    buttonWeb.classList.remove('active');
    mobile.style.display = 'flex';

    web.style.display = 'none';
    ui.style.display = 'none';
});
