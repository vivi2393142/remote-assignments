// Request 1: Click to Change Text.
const banner = document.querySelector('.banner');
const welcome = document.querySelector('.welcome');

banner.addEventListener('click', () => {
	welcome.textContent = 'Have a Good Time!';
	banner.style.cursor = 'default';
})


// Request 2: Click to Show/Close Menu.
const menubutton = document.querySelector('.menubutton');
const closeButton = document.querySelector('.closeButton');
const nav = document.querySelector('.nav');

menubutton.addEventListener('click', () => {
	nav.style.right = '0';
	closeButton.style.right = '0';
})

closeButton.addEventListener('click', () => {
	nav.style.right = '-100%';
	closeButton.style.right = '-100%';

})

// Request 3: Click to Show More Content Boxes.
const callContents = document.querySelector('.callContents');
const button = document.querySelector('.button');

button.addEventListener('click', () => {
	callContents.style.display = 'flex';

})