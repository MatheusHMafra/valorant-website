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


// Carregar Agentes
const agents = [
    {
        name: "Brimstone",
        subname: "@Liam Byrne",
        description:
            "Vindo dos EUA, o arsenal orbital de Brimstone garante que seu esquadrão sempre tenha vantagem. Sua capacidade de fornecer utilidade com precisão e à distância faz dele um comandante incomparável.",
        backgroundColor: "orange",
    },
    {
        name: "Viper",
        subname: "@Sabine Callas",
        description:
            "A química americana implanta uma série de dispositivos químicos venenosos para controlar o campo de batalha e prejudicar a visão do inimigo. Se as toxinas não matarem sua presa, seus jogos mentais certamente o farão.",
        backgroundColor: "forestgreen",
    },
    {
        name: "Omen",
        subname: "@????",
        description:
            "Um fantasma de uma memória, Omen caça nas sombras. Ele deixa os inimigos cegos, se teletransporta pelo campo e deixa a paranóia tomar conta enquanto seu inimigo luta para saber onde ele pode atacar em seguida.",
        backgroundColor: "#46516d",
    },
    {
        name: "Killjoy",
        subname: "@Klara Böhringer",
        description:
            "A gênia da Alemanha, Killjoy protege o campo de batalha com facilidade usando seu arsenal de invenções. Se o dano de seu equipamento não parar seus inimigos, seu debuff de robôs ajudará a acabar com eles.",
        backgroundColor: "#f6db2c",
    },
    {
        name: "Cypher",
        subname: "@Amir El Amari",
        description:
            "Cypher é uma rede de vigilância de um homem só que mantém o controle sobre cada movimento do inimigo. Nenhum segredo é seguro. Nenhuma manobra passa despercebida. Cypher está sempre observando.",
        backgroundColor: "#585a65",
    },
    {
        name: "Sova",
        subname: "@Alexander (Sasha) Novikov",
        description:
            "Sova rastreia, encontra e elimina inimigos com eficiência e precisão implacáveis. Seu arco personalizado e incríveis habilidades de reconhecimento garantem que, mesmo se você correr, não poderá se esconder.",
        backgroundColor: "#829fad",
    },
    {
        name: "Sage",
        subname: "@Ling Ying Wei",
        description:
            "O bastião da China, Sage cria segurança para si e sua equipe onde quer que vá. Capaz de reviver amigos caídos e evitar ataques agressivos, ela fornece um centro calmo para uma luta infernal.",
        backgroundColor: "lightblue",
    },
    {
        name: "Phoenix",
        subname: "@Jamie Adeyemi",
        description:
            "Vindo do Reino Unido, o poder estelar de Phoenix brilha em seu estilo de luta, inflamando o campo de batalha com flash e brilho. Quer ele tenha reforços ou não, ele entrará em uma luta em seus próprios termos.",
        backgroundColor: "orangered",
    },
    {
        name: "Jett",
        subname: "@Sabine Callas",
        description:
            "Representando a Coreia do Sul, o estilo de luta ágil e evasivo permite que ela corra riscos que ninguém mais consegue. Ela corre em círculos em cada escaramuça, cortando os inimigos antes mesmo que eles saibam o que os atingiu.",
        backgroundColor: "#78b7bf",
    },
    {
        name: "Reyna",
        subname: "@Zyanya Mondragón",
        description:
            "Forjada no coração do México, Reyna domina o combate individual, disparando a cada morte que consegue. Sua capacidade é limitada apenas por sua habilidade bruta, tornando-a altamente dependente do desempenho.",
        backgroundColor: "#b600a4",
    },
    {
        name: "Raze",
        subname: "@Tayane Alves",
        description:
            "Raze explode fora do Brasil com sua grande personalidade e grandes armas. Com seu trauma contundente estilo de jogo, ela se destaca em liberar inimigos entrincheirados e limpar espaços apertados com um \"boom\".",
        backgroundColor: "#b8352a",
    },
    {
        name: "Breach",
        subname: "@Erik Torsten",
        description:
            "Breach, o sueco biônico, dispara rajadas cinéticas poderosas e direcionadas para abrir caminho agressivamente através do terreno inimigo. O dano e a interrupção que ele inflige garantem que nenhuma luta seja justa.",
        backgroundColor: "#db651f",
    },
    {
        name: "Skye",
        subname: "@Kirra Foster",
        description:
            "Vindo da Austrália, Skye e seu bando de feras abrem caminho através de território hostil. Com suas criações dificultando o inimigo e seu poder de curar os outros, a equipe é mais forte e mais segura ao lado de Skye.",
        backgroundColor: "#77cd9e",
    },
    {
        name: "Yoru",
        subname: "@Ryo Kiritani",
        description:
            "O nativo japonês Yoru abre buracos na realidade para se infiltrar nas linhas inimigas sem ser visto. Usando decepção e agressão em igual medida, ele consegue derrubar cada alvo antes que eles saibam onde procurar.",
        backgroundColor: "#4056c3",
    },
    {
        name: "Astra",
        subname: "@Efia Danso",
        description:
            "Astra aproveita a energia do cosmos para remodelar o campo de batalha, colocando o destino nas suas mãos. Com total domínio de sua forma astral e talento para uma visão estratégica profunda.",
        backgroundColor: "#56318d",
    },
    {
        name: "KAY/O",
        subname: "@KAYO",
        description:
            "KAY/O é uma máquina de guerra construída com um único objetivo: neutralizar radiantes. Seu poder de suprimir habilidades inimigas impede os seus oponentes de revidar, garantindo a vitória a sua equipe.",
        backgroundColor: "#c4a6ff",
    },
    {
        name: "Chamber",
        subname: "@Vincent Fabron",
        description:
            "Bem vestido e bem armado, designer de armas francês Chamber expulsa agressores com golpes mortais precisão. Ele utiliza seu arsenal personalizado para manter a linha e abater os inimigos de longe.",
        backgroundColor: "#dbba6d",
    },
    {
        name: "Neon",
        subname: "@Tala Nicole Dimaapi Valdez",
        description:
            "Neon avança em velocidades chocantes, descarregando rajadas de radiação bioelétrica tão rápido quanto ela. corpo o gera. Ela corre à frente para pegar os inimigos desprevenidos e depois os derruba mais rápido do que raio.",
        backgroundColor: "#4b72cb",
    },
    {
        name: "Fade",
        subname: "@Hazal Eyletmez",
        description:
            "O caçadora de recompensas turca Fade libera o poder do pesadelo cru para apreender os segredos do inimigo. Sintonizado com próprio terror, ela caça alvos e revela seus medos mais profundos - antes de esmagá-los no escuro.",
        backgroundColor: "#323e5a",
    },
    {
        name: "Harbor",
        subname: "@Varun Batra",
        description:
            "Harbour invade o campo empunhando tecnologia antiga com domínio sobre a água. Ele desencadeia corredeiras espumantes e ondas esmagadoras para proteger seus aliados e atacar aqueles que se opõem a ele.",
        backgroundColor: "#7ba9cc",
    },
    {
        name: "Gekko",
        subname: "@Mateo Armendáriz De la Fuente",
        description:
            "Gekko lidera uma equipe unida de criaturas calamitosas. Seus amigos avançaram, espalhando os inimigos para fora do caminho, com Gekko perseguindo-os para se reagrupar e partir novamente.",
        backgroundColor: "#cbe87e",
    },
    {
        name: "Deadlock",
        subname: "@Iselin",
        description:
            "Deadlock implanta uma série de nanofios de ponta para proteger o campo de batalha até mesmo do ataque mais letal. Ninguém escapa de sua vigilância vigilante, nem sobrevive",
        backgroundColor: "#5d5a6f",
    },
];

function generateImageURL(agentName) {
    const formattedName = agentName.replace(/\//g, "").replace(/\s/g, "_");
    return `imagens/agents/${formattedName}_Artwork_Full.webp`;
}

function generateBackgroundURL(agentName) {
    const formattedName = agentName.replace(/\//g, "").replace(/\s/g, "_");
    return `imagens/agents/${formattedName}_Background_Text.webp`;
}

function Agents() {
    const agentsContainer = document.getElementById("agents-container");

    agents.forEach((agent) => {
        const agentCard = document.createElement("div");
        agentCard.classList.add("card", "block");
        agentCard.style = `padding: 0; margin: 3px;`;

        const cardImage = document.createElement("div");
        cardImage.classList.add("card-image");

        const figure = document.createElement("figure");
        figure.classList.add("image", "is-16by9", "box");

        const img = document.createElement("img");
        img.src = generateImageURL(agent.name);
        img.style = `width: 100%;
                   height: 100%;
                   max-height: 100%;
                   display: block;
                   margin: 0 auto;
                   object-fit: contain;
                   background-color: ${agent.backgroundColor};
                   background-image: url(${generateBackgroundURL(agent.name)});
                   background-repeat: no-repeat;
                   background-position: center;`;

        figure.appendChild(img);
        cardImage.appendChild(figure);
        agentCard.appendChild(cardImage);

        const cardContent = document.createElement("div");
        cardContent.classList.add("card-content");
        cardContent.style = ` padding: 0; margin: 3px;`;

        const media = document.createElement("div");
        media.classList.add("media");

        const mediaContent = document.createElement("div");
        mediaContent.classList.add("media-content");

        const title = document.createElement("p");
        title.classList.add("title", "is-4");
        title.textContent = agent.name;

        const subtitle = document.createElement("p");
        subtitle.classList.add("subtitle", "is-6");
        subtitle.textContent = agent.subname;

        mediaContent.appendChild(title);
        mediaContent.appendChild(subtitle);
        media.appendChild(mediaContent);
        cardContent.appendChild(media);

        const description = document.createElement("div");
        description.classList.add("content");
        description.textContent = agent.description;

        cardContent.appendChild(description);
        agentCard.appendChild(cardContent);

        agentsContainer.appendChild(agentCard);
    });
}

Agents();