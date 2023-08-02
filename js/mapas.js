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

// Carregar Mapas
var maps = [
    {
        name: "The Range",
        image: "imagens/maps/Range_minimap.webp",
        audio: "audio/Range.mpeg",
        background: "imagens/maps/Loading_Screen_Range.webp",
        location: "Poveglia, Veneza, Veneto, Itália, Terra Alpha",
        coordinates: "45°26'55\" N 12°20'9\" E",
    },
    {
        name: "Bind",
        image: "imagens/maps/Bind_minimap.webp",
        audio: "audio/Bind.mpeg",
        background: "imagens/maps/Loading_Screen_Bind.webp",
        location: "Rabat, Marrocos, Terra Alpha",
        coordinates: "34°2'0\" N 6°51'0\" W",
    },
    {
        name: "Haven",
        image: "imagens/maps/Haven_minimap.webp",
        audio: "audio/Haven.mpeg",
        background: "imagens/maps/Loading_Screen_Haven.webp",
        location: "Thimphu, Butão, Terra Alpha",
        coordinates: "27°28'0\" N 89°38'30\" E",
    },
    {
        name: "Split",
        image: "imagens/maps/Split_minimap.webp",
        audio: "audio/Split.mpeg",
        background: "imagens/maps/Loading_Screen_Split.webp",
        location: "Tóquio, Japão, Terra Alpha",
        coordinates: "35°41'23\" N 139°41'32\" E",
    },
    {
        name: "Ascent",
        image: "imagens/maps/Ascent_minimap.webp",
        audio: "audio/Ascent.mpeg",
        background: "imagens/maps/Loading_Screen_Ascent.webp",
        location: "Veneza, Itália, Terra Alpha",
        coordinates: "45°26'15\" N 12°20'9\" E",
    },
    {
        name: "Icebox",
        image: "imagens/maps/Icebox_minimap.webp",
        audio: "audio/Icebox.mpeg",
        background: "imagens/maps/Loading_Screen_Icebox.webp",
        location: "Ilha Bennett, Rússia, Terra Alpha",
        coordinates: "76°44'0\" N 149°30'0\" E",
    },
    {
        name: "Breeze",
        image: "imagens/maps/Breeze_minimap.webp",
        audio: "audio/Breeze.mpeg",
        background: "imagens/maps/Loading_Screen_Breeze.webp",
        location: "Triângulo das Bermudas, Oceano Atlântico, Terra Alpha",
        coordinates: "26°11'06\" N 71°10'31\" W",
    },
    {
        name: "Fracture",
        image: "imagens/maps/Fracture_minimap.webp",
        audio: "audio/Fracture.mpeg",
        background: "imagens/maps/Loading_Screen_Fracture.webp",
        location: "Condado de Santa Fe, Novo México, EUA, Terra Alpha",
        coordinates: "35°48'18\" N 106°08'19\" W",
    },
    {
        name: "Pearl",
        image: "imagens/maps/Pearl_minimap.webp",
        audio: "audio/Pearl.mpeg",
        background: "imagens/maps/Loading_Screen_Pearl.webp",
        location: "Lisboa, Portugal, Terra Omega",
        coordinates: "38°42'43\" N 9°08'27\" W",
    },
    {
        name: "Lotus",
        image: "imagens/maps/Lotus_minimap.webp",
        audio: "audio/Lotus.mpeg",
        background: "imagens/maps/Loading_Screen_Lotus.webp",
        location: "Gates Ocidentais, Índia, Terra Omega",
        coordinates: "14°07'03\" N 74°53'21\" E",
    },
    {
        name: "District",
        image: "imagens/maps/District_minimap.webp",
        audio: "audio/TDM.mpeg",
        background: "imagens/maps/Loading_Screen_District.webp",
        location: "Tóquio, Japão, Terra Omega",
        coordinates: "35°41'23\" N 139°41'32\" E",
    },
    {
        name: "Kasbah",
        image: "imagens/maps/Kasbah_minimap.webp",
        audio: "audio/TDM.mpeg",
        background: "imagens/maps/Loading_Screen_Kasbah.webp",
        location: "Rabat, Marrocos, Terra Omega",
        coordinates: "34°2'0\" N 6°51'0\" W",
    },
    {
        name: "Piazza",
        image: "imagens/maps/Piazza_minimap.webp",
        audio: "audio/TDM.mpeg",
        background: "imagens/maps/Loading_Screen_Piazza.webp",
        location: "Veneza, Itália, Terra Omega",
        coordinates: "45°26'15\" N 12°20'9\" E",
    }
];

var currentIndex = 0;
var mapBox = document.querySelector('.map-image');
var mapImage = document.getElementById("mapImage");
var mapName = document.getElementById("mapName");
var mapLocation = document.getElementById("mapLocation");
var mapCoordinates = document.getElementById("mapCoordinates");
var mapAudio = document.getElementById("mapAudio");
var audioSource = document.getElementById("mapAudio");
var playButton = document.getElementById("playButton");
var audioTime = document.getElementById("audioTime");
var playButtonIcon = document.getElementById("playButtonIcon");

function changeMap(direction) {
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = maps.length - 1;
    } else if (currentIndex >= maps.length) {
        currentIndex = 0;
    }

    var currentMap = maps[currentIndex];

    mapImage.src = currentMap.image;
    mapImage.alt = currentMap.name;
    mapBox.style.backgroundImage = `url('${currentMap.background}')`;
    mapName.textContent = currentMap.name;
    mapLocation.textContent = currentMap.location;
    mapCoordinates.textContent = currentMap.coordinates;
    audioSource.src = currentMap.audio;

    playButton.classList.remove("is-playing");
    playButtonIcon.classList.remove("fa-pause");
    playButtonIcon.classList.add("fa-play");

    mapAudio.volume = 0.25;
    mapAudio.load();
}

function toggleAudio() {
    if (mapAudio.paused) {
        mapAudio.play();
        playButton.classList.add("is-playing");
        playButtonIcon.classList.remove("fa-play");
        playButtonIcon.classList.add("fa-pause");
    } else {
        mapAudio.pause();
        playButton.classList.remove("is-playing");
        playButtonIcon.classList.remove("fa-pause");
        playButtonIcon.classList.add("fa-play");
    }
}

function formatTime(time) {
    var minutes = Math.floor(time / 60);
    var seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

mapAudio.addEventListener("timeupdate", function () {
    if (!isNaN(mapAudio.duration)) {
        var currentTime = formatTime(mapAudio.currentTime);
        var duration = formatTime(mapAudio.duration);
        audioTime.textContent = currentTime + " / " + duration;
    } else {
        audioTime.textContent = "00:00 / 00:00";
    }
});

changeMap(0);