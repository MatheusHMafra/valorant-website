// Navbar
document.addEventListener('DOMContentLoaded', () => {

    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    $navbarBurgers.forEach(el => {
        el.addEventListener('click', () => {

            const target = el.dataset.target;
            const $target = document.getElementById(target);

            el.classList.toggle('is-active');
            $target.classList.toggle('is-active');

        });
    });

});

// Carregar página
window.addEventListener('load', function () {
    document.querySelector('.page-transition').style.opacity = '1';
});

// Create icon
var link = document.createElement('link');
link.rel = 'icon';
link.type = 'image/webp';
link.href = 'imagens/logo.webp';

var existingFavicon = document.querySelector("link[rel='icon']");

if (existingFavicon) {
    existingFavicon.parentNode.removeChild(existingFavicon);
}

document.head.appendChild(link);