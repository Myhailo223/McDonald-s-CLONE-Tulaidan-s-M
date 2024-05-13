'use strits'

const listImages = [
{
src: 'https://www.mcdonalds.com/content/dam/sites/ua/nfl/hero/slider/McCrispy_Slider.jpg',
nameImg: '1',
},
{
    src: 'https://www.mcdonalds.com/content/dam/sites/ua/nfl/hero/slider/Slider_Flurry_BubbleGum.jpg',
    nameImg: '2',
},
{
    src: 'https://www.mcdonalds.com/content/dam/sites/ua/nfl/hero/slider/McD_ROYALS_instore_march2024_Slider_00-1.jpg',
    nameImg: '3',
},
{
    src: 'https://www.mcdonalds.com/content/dam/sites/ua/nfl/hero/slider/Slider_HMR_Book_17.png',
    nameImg: '4',
},
{
    src: 'https://www.mcdonalds.com/content/dam/sites/ua/nfl/hero/slider/slider-GMAL-banner-3.jpg',
    nameImg: '5',
},
{
    src: 'https://www.mcdonalds.com/content/dam/sites/ua/nfl/hero/slider/Best_slider_menu.jpg',
    nameImg: '6',
},

];

const img = document.querySelector('.img1');
const button = document.querySelector('button');

const setImg = currentDataImg =>{
    img.src = currentDataImg.src;
    img.alt = currentDataImg.nameImg;
};

setImg(listImages[0]);

button.addEventListener('click', onChangeImg);

let count = 0;
 
function onChangeImg() {
    if (count === listImages.length - 1){
        count = 0;
    }  else {
        count +=1;
    }

 setImg(listImages[count]);
}

// Списки текстів для зміни
var texts1 = [
    'Закрути свій настрій!',
    'Улюблені Рояли. М-м-м-м-м',
    'Нова книжечка вже в Хеппі Міл®',
    'Час встановити застосунок!',
    'МакДональдз там, де ти.',
    'МакКріспі, ммм?'
];

var texts2 = [
    'Спробуй улюблене морозиво з новим смаком — МакФлурі® Бабл Гам. І не забудь про прохолодні напої — айс-каву чи новий Лимонад Бабл Гам Фрут. І побачиш, як твій день стає трішки кращим!',
    'Коли соковита яловичина зустрічається з сиром чедер, а мариновані огірки, скибочки цибульки та соуси довершують смак пікантними нотками, навіть гурманам забракне слів. А тепер ще спробуй свіжу новинку — Роял Делюкс.',
    'Серія книжок «Я можу» в Хеппі Міл® відкриває дітям світ, у якому маленькі мрії перетворюються на великі досягнення. Вирушайте у відкритий космос разом із дітлахами, читаючи нову книгу серії під назвою «Я можу стати космонавтом»!',
    'Чи працює зараз заклад? Які ціни на улюблене? Що там по ваучерах? Відповіді на ці запитання можна знайти в застосунку МакДональдз! Годі зволікати — встановлюй і користуйся на повну!',
    'Замовляй соковиті бургери та таку улюблену хрумку картопельку Фрі. А ми доставимо!',
    'Новий бургер із великим шматком курячого філе в хрумкій паніровці, свіжим салатом і пікантним соусом у пухкенькій булочці з кунжутом і маком вже чекає на тебе в МакДональдз!',
];

// Поточний індекс тексту у списку для div1
var currentIndex1 = 0;

// Поточний індекс тексту у списку для div2
var currentIndex2 = 0;

// Функція для зміни вмісту дівів
function changeDivContent() {
    var div1 = document.getElementById('container1');
    var div2 = document.getElementById('container2');

    // Змінити вміст div1 на поточний текст з першого списку
    div1.innerHTML = texts1[currentIndex1];

    // Збільшити лічильник індексу тексту для div1 і перевірити, чи перевищив максимальний індекс тексту, і якщо так, перейти до першого тексту
    currentIndex1++;
    if (currentIndex1 >= texts1.length) {
        currentIndex1 = 0;
    }

    // Змінити вміст div2 на поточний текст з другого списку
    div2.innerHTML = texts2[currentIndex2];

    // Збільшити лічильник індексу тексту для div2 і перевірити, чи перевищив максимальний індекс тексту, і якщо так, перейти до першого тексту
    currentIndex2++;
    if (currentIndex2 >= texts2.length) {
        currentIndex2 = 0;
    }
}

// Обробник події для кнопки
document.getElementById('changeButton').addEventListener('click', function() {
    changeDivContent(); // Викликати функцію зміни вмісту дівів
});

