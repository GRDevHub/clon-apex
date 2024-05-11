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

window.addEventListener('resize', function(){
    let windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const video = document.querySelector('.itro__video');
    if(windowWidth < 768){
        video.setAttribute('src', './assets/video-mobile.mp4');
    }else{
        video.setAttribute('src', './assets/video-tablet.mp4');
    }
});

window.dispatchEvent(new Event('resize'));