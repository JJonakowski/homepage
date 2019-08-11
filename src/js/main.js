"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('serviceworker.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// Zmiana tekstu po kliknieciu

const button = document.querySelector('.header__button--js'); //wybieramy button
const main = document.querySelector('.main__who-me--js');

button.addEventListener('click', (e) => { //e pokazuje wszystkie szczegoly elementu
    main.innerHTML = `klik klik`;
     main.classList.toggle('main__who-me--red'); // kazde klikniecie powoduje zmiene koloru czarny-czerwony-czarny

})

// Hamburger menu

const navigationSwitch = document.querySelector('.navigation__switch--js');
navigationSwitch.addEventListener('click', (e) => {
    const navigationList = document.querySelector('.navigation__list--js');
    navigationList.classList.toggle('navigation__list--visible');
});

// Local storage

const focusInput = document.querySelector('.input--js');

if(localStorage.getItem('focusInput')) {
  focusInput.value = localStorage.getItem('focusInput');
}

focusInput.addEventListener('keyup', (e) => {
  localStorage.setItem('focusInput', e.target.value);
});

// -- Edytor -- 

const area = document.querySelector('.form__msg--box--js');
const load = document.querySelector('.form__button--load--js');
const save = document.querySelector('.form__button--save--js');
const del = document.querySelector('.form__button--delete--js');

save.addEventListener('click', (e) => {
  e.preventDefault();
  localStorage.setItem('area', area.value);
})

load.addEventListener('click', (e) => {
  e.preventDefault();
  area.innerHTML = localStorage.getItem('area');
})

del.addEventListener('click', (e) => {
  localStorage.removeItem('area');
})

//-- --



 