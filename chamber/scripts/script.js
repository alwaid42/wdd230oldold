const date = new Date();
const currentYear = date.getFullYear();
document.querySelector('#current-year').textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById('last-modified').textContent = lastModified;

const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');
hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// select the elements to manipulate (output to)
const datefield = document.querySelector(".date");

// derive the current date using a date object
const fulldate = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(date);
// long, medium, short options ... try them

datefield.innerHTML = `<em>${fulldate}</em>`;

const weekday = date.getDay();
if (weekday == 1 || weekday == 2){
    document.getElementById("banner").style.display = "block";
}