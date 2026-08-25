function showWeather(city, temperature) {
  console.log(`Сейчас в городе ${city} температура — ${temperature} градусов по Цельсию`);
}
showWeather('Медина', 32);
showWeather('Саранск', 24);
showWeather('Эр-Рияд', 29);


const SPEED_LIGHT = 299792458;
function checkSpeed(speed) {
  if (speed > SPEED_LIGHT) {
    console.log('Сверхсветовая скорость');
  } else if (speed < SPEED_LIGHT) {
    console.log('Субсветовая скорость');
  } else {
    console.log('Скорость света');
  }
}

checkSpeed(400000000);
checkSpeed(299792458);
checkSpeed(150000072);



const product = 'Ноутбук';
const price = 75000;

function buyProduct(budget) {
  if (budget >= price) {
    console.log(`${product} приобретён. Спасибо за покупку!`);
  } else {
    const difference = price - budget;
    console.log(`Вам не хватает ${difference}, пополните баланс`);
  }
}

buyProduct(100000);
buyProduct(50000);
buyProduct(75000);



function forPinning() {
  console.log('Функция создана!');
}
forPinning();



const userName = 'Ильдар';
let userAge = 23;
let isStudent = true;
