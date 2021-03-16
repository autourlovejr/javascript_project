let Henry = ['yes'];
let name = prompt('Hello, What is your name?')
let search = prompt('Do you make over $100,000 a year?')

if (Henry.includes(search.toLowerCase())) {
    message = `Hello, ${name.toUpperCase()}, How may we serve you? `;
} else {
    message =  `This service may not be for you, ${name.toUpperCase()}, sorry!`;
}




document.querySelector('main').innerHTML = `<p>${message}</p>`;

let Rando = Math.floor( Math.random() * 6) + 1;

console.log(`Enjoy this random number ${Rando}`);

const h2 = document.querySelector('h2');
let html = '';

for ( let i = 1; i <= 10; i++ ) {
    html += `<div>${i}</div>`;
}

h2.innerHTML = html;