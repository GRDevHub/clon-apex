const headerInput = document.querySelector('.header__input');
const navInput = document.querySelector('.nav__input');
// const headerLabel = document.querySelector('.header__label');
const navLabel = document.querySelector('.nav__label');

// Reset input checkbox a false
const handleLabel = () => {
    navInput.checked = false;
    headerInput.checked = false;
}

// Evento click => llamar a handleLabel
navLabel.addEventListener('click', handleLabel);