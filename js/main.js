let wallpaper = [
    {   "title" : "popular",
        "title-rus" : "Популярное",
        "image": [
            "img/1.jpg",
            "img/2.jpg",
            "img/3.jpg",
            "img/4.png",
            "img/5.jpg",
            "img/6.jpg",
            "img/7.jpg",
            "img/8.jpg",
            "img/9.jpg",
            "img/10.jpg",
            "img/11.jpg",
            "img/12.jpg",
            
        ]
    },
    {   "title" : "black_white",
        "title-rus" : "Чёрно-белое",
        "image": [
            "img/BlackWhite1.jpg",
            "img/BlackWhite2.jpg",
            "img/BlackWhite3.jpg",
            "img/BlackWhite4.jpg",
            "img/BlackWhite5.jpg",
            "img/BlackWhite6.jpg",
            "img/BlackWhite7.jpg",
            "img/BlackWhite8.jpg",
            "img/BlackWhite9.jpg",
            "img/BlackWhite10.jpg",
            "img/BlackWhite11.jpg",
            "img/BlackWhite12.jpg",
            
        ]
    },
    {   "title" : "north_lights",
        "title-rus" : "Северное сияние",
        "image": [
            "img/Shine1.jpg",
            "img/Shine2.jpg",
            "img/Shine3.jpg",
            "img/Shine4.jpg",
            "img/Shine5.jpg",
            "img/Shine6.jpg",
            "img/Shine7.jpg",
            "img/Shine8.jpg",
            "img/Shine9.jpg",
            "img/Shine10.jpg",
            "img/Shine11.jpg",
            "img/Shine12.jpg",
            
        ]
    },
    {   "title" : "winter",
        "title-rus" : "Зима",
        "image": [
            "img/Winter1.jpg",
            "img/Winter2.jpg",
            "img/Winter3.jpg",
            "img/Winter4.jpg",
            "img/Winter5.jpg",
            "img/Winter6.jpg",
            "img/Winter7.jpg",
            "img/Winter8.jpg",
            "img/Winter9.jpg",
            "img/Winter10.jpg",
            "img/Winter11.jpg",
            "img/Winter12.jpg",
            
        ]
    },
    {   "title" : "fire",
        "title-rus" : "Фейерверки",
        "image": [
            "img/Fire1.jpg",
            "img/Fire2.jpg",
            "img/Fire3.jpg",
            "img/Fire4.jpg",
            "img/Fire5.jpg",
            "img/Fire6.jpg",
            "img/Fire7.jpeg",
            "img/Fire8.png",
            "img/Fire9.jpg",
            "img/Fire10.jpg",
            "img/Fire11.jpg",
            "img/Fire12.jpg",
            
        ]
    },
    {   "title" : "flower",
        "title-rus" : "Цветы",
        "image": [
            "img/Flower1.jpg",
            "img/Flower2.jpg",
            "img/Flower3.jpeg",
            "img/Flower4.jpg",
            "img/Flower5.jpg",
            "img/Flower6.jpg",
            "img/Flower7.jpg",
            "img/Flower8.jpg",
            "img/Flower9.jpg",
            "img/Flower10.jpg",
            "img/Flower11.jpg",
            "img/Flower12.jpg",
        ]
    },
  ]


let menu = document.getElementById('menu');
let cardsContainer = document.getElementById('cardsContainer');
let templateMenu = document.getElementById('tmpl-menu').innerHTML;
let templateCards = document.getElementById('tmpl-cards').innerHTML;
let templateCard = document.getElementById('tmpl-card').innerHTML;

showMenu();
showCards();
//функция для меню
function showMenu(){
    for (let i = 0; i < wallpaper.length; i++){   
        menu.innerHTML += templateMenu  .replace('${title}', wallpaper[i]['title'])
                                        .replace('${title-rus}', wallpaper[i]['title-rus']);
    }
}
//
function showCards(){
    //для каждой категории картинок
    for (let i = 0; i<wallpaper.length; i++){
        //прописываем название категории
        cardsContainer.innerHTML += templateCards   .replace('${title}', wallpaper[i]['title'])
                                                    .replace('${title-rus}', wallpaper[i]['title-rus']);
        //выводим картинки этой категории
        for (let j = 0; j<wallpaper[i]['image'].length; j++){
            cardsContainer.innerHTML += templateCard.replace(/{image}/g, wallpaper[i]['image'][j]);
        }
    }

}