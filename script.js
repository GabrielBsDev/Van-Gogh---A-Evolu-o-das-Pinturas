// script.js

document.addEventListener('DOMContentLoaded', () => {
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const carouselInner = document.querySelector('.carousel-inner');
    const items = document.querySelectorAll('.carousel-item');
    let index = 0;

    const updateCarousel = () => {
        const offset = -index * 100;
        carouselInner.style.transform = `translateX(${offset}%)`;
    };

    prevButton.addEventListener('click', () => {
        index = (index > 0) ? index - 1 : items.length - 1;
        updateCarousel();
    });

    nextButton.addEventListener('click', () => {
        index = (index < items.length - 1) ? index + 1 : 0;
        updateCarousel();
    });
});

// Array of carousel items
const carouselItems = [
    {
        imgSrc: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Van-willem-vincent-gogh-die-kartoffelesser-03850.jpg",
        altText: "Os Comedores de Batatas",
        description: "A primeira obra de destaque de Vincent Van Gogh foi “Os Comedores de Batatas”, de 1885. É um quadro sombrio e escuro, retratando camponeses durante uma refeição noturna."
    },
    {
        imgSrc: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Camera_da_Letto_Vincent_van_Gogh.jpg",
        altText: "O Quarto em Arles",
        description: "O Quarto em Arles, de 1888, mostra o interior simples e vibrante da casa de Van Gogh em Arles."
    },
    {
        imgSrc: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Vincent_van_Gogh_-_The_yellow_house_%28%27The_street%27%29.jpg",
        altText: "A Casa Amarela",
        description: "A Casa Amarela é uma pintura a óleo do pintor holandês Vincent van Gogh, de setembro de 1888."
    },
    {
        imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Starry_Night_Over_the_Rhone.jpg/800px-Starry_Night_Over_the_Rhone.jpg",
        altText: "A Noite Estrelada sobre o Ródano",
        description: "A Noite Estrelada sobre o Ródano, de 1888, captura a serenidade e a beleza da noite."
    },
    {
        imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Vincent_Willem_van_Gogh_128.jpg/300px-Vincent_Willem_van_Gogh_128.jpg",
        altText: "Girassóis",
        description: "Girassóis, uma das séries mais famosas de Van Gogh, retrata girassóis em uma jarra, pintado em 1888."
    },
    {
        imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Vincent_van_Gogh_-_The_Harvest_%28for_%C3%89mile_Bernard%29_-_Google_Art_Project.jpg/797px-Vincent_van_Gogh_-_The_Harvest_%28for_%C3%89mile_Bernard%29_-_Google_Art_Project.jpg",
        altText: "A Colheita",
        description: "A Colheita, de 1888, é um exemplo do interesse de Van Gogh pela vida rural."
    },
    {
        imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Vincent_van_Gogh_-_Almond_blossom_-_Google_Art_Project.jpg/759px-Vincent_van_Gogh_-_Almond_blossom_-_Google_Art_Project.jpg",
        altText: "A Amoreira",
        description: "A Amoreira, de 1889, retrata a natureza vibrante e a técnica impressionista de Van Gogh."
    },
    {
        imgSrc: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Vincent_van_Gogh_-_Irises_%281889%29.jpg",
        altText: "Íris",
        description: "Íris, uma pintura de 1889 que reflete o uso vibrante de cores e a paixão de Van Gogh por flores."
    },
    {
        imgSrc: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Vincent_van_Gogh_%281853-1890%29_-_Wheat_Field_with_Crows_%281890%29.jpg",
        altText: "Campo de Trigo com Corvos",
        description: "Campo de Trigo com Corvos, de 1889, é frequentemente interpretado como uma reflexão da instabilidade mental de Van Gogh."
    },
    {
        imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Van_Gogh_-_Selbstbildnis_mit_verbundenem_Ohr_und_Pfeife.jpeg/800px-Van_Gogh_-_Selbstbildnis_mit_verbundenem_Ohr_und_Pfeife.jpeg",
        altText: "Autorretrato com Orelha Bandada",
        description: "Autorretrato com orelha bandada, de 1890, marcando um momento significativo na vida pessoal de Van Gogh."
    },
    {
        imgSrc: "https://www.meisterdrucke.pt/kunstwerke/1000px/Vincent%20van%20Gogh%20-%20Le%20Semeur%20-%20%28MeisterDrucke-681405%29.jpg",
        altText: "O Sembrador",
        description: "O Sembrador ao Entardecer, de 1890, simboliza o ciclo da vida e a ligação do homem com a terra."
    }
];

// Function to create carousel items
function createCarouselItems() {
    const container = document.querySelector('.carousel-inner');

    carouselItems.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('carousel-item');

        const img = document.createElement('img');
        img.src = item.imgSrc;
        img.alt = item.altText;
        div.appendChild(img);

        const p = document.createElement('p');
        p.textContent = item.description;
        div.appendChild(p);

        container.appendChild(div);
    });
}
// Function to preload images
function preloadImages(imageUrls) {
    const preloadedImages = [];
    
    imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
        preloadedImages.push(img);
    });
}



// List of image URLs to preload
const imageUrls = [
    'https://example.com/images/os-comedores-de-batatas.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Vincent_Willem_van_Gogh_128.jpg/300px-Vincent_Willem_van_Gogh_128.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/c/c8/Vincent_van_Gogh_-_Irises_%281889%29.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/f/ff/Camera_da_Letto_Vincent_van_Gogh.jpg',
    
  
    // Add more URLs as needed
];

// Initialize carousel items
createCarouselItems();
