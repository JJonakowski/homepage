const button = document.querySelector('.header__button--js'); //wybieramy button

function klik() {
    console.log('halo');
}

//button.addEventListener('click', klik); //dodajemy listenera dzialajacego na klikniecie z funkcja

const main = document.querySelector('.main__who-me--js');

button.addEventListener('click', (e) => { //e pokazuje wszystkie szczegoly elementu
    console.log(e);
    main.innerHTML = `klik klik`;
//  main.classList.add('main__who-me--red'); //zmienia kolor naglowka na czerwony
     main.classList.toggle('main__who-me--red'); // kazde klikniecie powoduje zmiene koloru czarny-czerwony-czarny
//if (main.classList.contains('main__who-me--red')) { //zwraca tru/false 
//    console.log('jest klasa');
//} else {
//   console.log('klasy nie ma');
//}
})

const navigationSwitch = document.querySelector('.navigation__switch--js');


navigationSwitch.addEventListener('click', (e) => {
    const navigationList = document.querySelector('.navigation__list--js');
    navigationList.classList.toggle('navigation__list--visible');
});
