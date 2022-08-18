

const toggleB = document.querySelector('.more')
const menu = document.querySelector('.options')
const icon = document.querySelector('.icons')

toggleB.addEventListener('click',() => {
    menu.classList.toggle('active');
    icon.classList.toggle('active');
});