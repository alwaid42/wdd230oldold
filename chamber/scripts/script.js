const date = new Date();
const currentYear = date.getFullYear();
document.querySelector('#current-year').textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById('last-modified').textContent = lastModified;

const datefield = document.querySelector('.date');


const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');
hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);