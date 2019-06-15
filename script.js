const name='Jakub';
const age=36;

console.log(`mam na imię ${name} i mam ${age} lat`);

const main__header = document.querySelector('.main__header');
console.log(main__header.innerHTML);
main__header.innerHTML = `<i>mam</i> na imię ${name} i mam ${age} lat`

const section = document.querySelectorAll('section');
console.log(section);

console.log(section[1]);