//Navbar
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

document.addEventListener("DOMContentLoaded", function () {
    const weapons = [
        {
            name: "Classic",
            category: "Pistols"
        },
        {
            name: "Shorty",
            category: "Pistols"
        },
        {
            name: "Stinger",
            category: "Pistols"
        },
        {
            name: "Ghost",
            category: "Pistols"
        },
        {
            name: "Sheriff",
            category: "Pistols"
        },
        {
            name: "Golden Gun",
            category: "Special Guns"
        },
        {
            name: "Snowball Launcher",
            category: "Special Guns"
        },
        {
            name: "Stinger",
            category: "SMGs"
        },
        {
            name: "Spectre",
            category: "SMGs"
        },
        {
            name: "Bucky",
            category: "Shotguns"
        },
        {
            name: "Judge",
            category: "Shotguns"
        },
        {
            name: "Bulldog",
            category: "Rifles"
        },
        {
            name: "Guardian",
            category: "Rifles"
        },
        {
            name: "Phantom",
            category: "Rifles"
        },
        {
            name: "Vandal",
            category: "Rifles"
        },
        {
            name: "Marshal",
            category: "Sniper Rifles"
        },
        {
            name: "Operator",
            category: "Sniper Rifles"
        },
        {
            name: "Ares",
            category: "Machine Guns"
        },
        {
            name: "Odin",
            category: "Machine Guns"
        },
        {
            name: "Tactical Knife",
            category: "Knife"
        }
    ];

    function createWeaponElement(weapon) {
        const weaponElement = document.createElement("div");
        weaponElement.classList.add("weapon");

        const image = document.createElement("img");
        image.classList.add("weapon-image");
        image.src = generateImageURL(weapon.name);
        image.alt = weapon.name;

        const name = document.createElement("h2");
        name.classList.add("weapon-name");
        name.textContent = weapon.name;

        weaponElement.appendChild(image);
        weaponElement.appendChild(name);

        return weaponElement;
    }

    const weaponListElement = document.getElementById("weaponList");

    const categories = [
        "Pistols",
        "Special Guns",
        "SMGs",
        "Shotguns",
        "Rifles",
        "Sniper Rifles",
        "Machine Guns",
        "Knife"
    ];

    categories.forEach(category => {
        const categoryTitle = document.createElement("h2");
        categoryTitle.classList.add("category-title");
        categoryTitle.textContent = category;

        const categoryWeapons = weapons.filter(weapon => weapon.category === category);

        const categoryElement = document.createElement("div");
        categoryElement.classList.add("category");

        const weaponsContainer = document.createElement("div");
        weaponsContainer.classList.add("weapons-container");

        categoryWeapons.forEach(weapon => {
            const weaponElement = createWeaponElement(weapon);
            weaponsContainer.appendChild(weaponElement);
        });

        categoryElement.appendChild(categoryTitle);
        categoryElement.appendChild(weaponsContainer);
        weaponListElement.appendChild(categoryElement);
    });
});

function generateImageURL(weaponName) {
    const formattedName = weaponName.replace(/\s/g, "");
    return `imagens/arsenal/${formattedName}.webp`;
}