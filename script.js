const menu = document.querySelector('.menu');
const targets = document.querySelectorAll('.target');
const icons = document.querySelectorAll('.section-1-icons i');
let iconIndex = 1;

function toggleNavbar() {
    targets.forEach(item => item.classList.toggle('change'));
}

setInterval(() => {
    const icon = document.querySelector('.section-1-icons .change');
    icon.classList.remove('change');
    iconIndex++;
    if (iconIndex > icons.length) {
        icons[0].classList.add('change');
        iconIndex = 1;
    } else {
        icon.nextElementSibling.classList.add('change');
    }
}, 4000);

menu.addEventListener('click', toggleNavbar);