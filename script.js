const name='Jakub';
const age=36;
console.log(`mam na imię ${name} i mam ${age} lat`);

//const main__header = document.querySelector('.main__header');
//console.log(main__header);
//console.log(main__header.innerHTML);
//main__header.innerHTML = `<i>mam</i> na imię ${name} i mam ${age} lat`

//const section = document.querySelectorAll('section');
//console.log(section);
//console.log(section[1]);

//const about = document.querySelector('.main__who-me');
//about.innerHTML = `xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`;

function kalkulator (x) {
x=x+1;
console.log(x);
return x*2;
}

console.log(kalkulator(2));
//const licz = kalkulator(2);
//console.log(licz);

const calc = (x) => {
x=x+2;
console.log(x);
return x*2;
}

console.log(calc(1));

const calcul = x => (x*2);
console.log(calcul(1));