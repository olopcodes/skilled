const themeBtn = document.querySelector('.btn--theme');
const themeBtnIcon = document.querySelector('.btn--theme i');
const body = document.querySelector('body');
const headerLogoImg = document.querySelector('header .logo img');
const footerLogoImg = document.querySelector('footer img');

themeBtn.addEventListener('click', e => {
   if(body.dataset.theme === 'light') {
        darkTheme();    
   } else {
    resetTheme();
   }
});

function darkTheme () {
    body.dataset.theme = 'dark';
    headerLogoImg.src = './assets/logo-light.svg';
    footerLogoImg.src = './assets/logo-dark.svg';
    themeBtnIcon.classList.remove('fa-moon');
    themeBtnIcon.classList.add('fa-sun');
}

function resetTheme () {
    body.dataset.theme = 'light';
    headerLogoImg.src = './assets/logo-dark.svg';
    footerLogoImg.src = './assets/logo-light.svg';
    themeBtnIcon.classList.remove('fa-sun');
    themeBtnIcon.classList.add('fa-moon');
}



//  Styles from the :root element
// var styles = window.getComputedStyle(document.documentElement);
// Get current color set in `--main-color` variable
// var color = styles.getPropertyValue('--main-color');
// Replace the color with a new value; now all elements using
// `--main-color` will be updated with the new color value. Handy! document
// documentElement.styles.setProperty('--main-color', 'hotpink');