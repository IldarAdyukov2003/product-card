// Задание 3. Объект с личными данными
const person = {
  firstName: 'Ильдар',
  lastName: 'Адюков',
  email: 'ildar.adyukov@mail.ru',
  job: 'Преподаватель',
  age: 23,
  country: 'Россия',
  city: 'Саранск',
  relationshipStatus: 'не женат',
  hobby: 'чтение'
};

// Задание 4. Объект, хранящий данные об автомобиле
const car = {
  brand: 'Kia',
  model: 'Spectra',
  year: 2008,
  color: 'красный перец',
  transmission: 'механика'
};
car.owner = person;

// Задание 5. Функция добавления свойства "максимальная скорость"
function ensureMaxSpeed(obj) {
  if (!obj.hasOwnProperty('maxSpeed')) {
    obj['maxSpeed'] = 220;
  }
}
ensureMaxSpeed(car);
console.log('car после добавления maxSpeed:', car);

// Задание 6. Функция вывода значения свойства объекта
function getPropertyValue(obj, prop) {
  console.log(`Значение свойства "${prop}":`, obj[prop]);
}
getPropertyValue(car, 'brand');

// Задание 7. Массив продуктов
const products = ['хлеб', 'молоко', 'яйца', 'масло', 'сыр'];

// Задание 8. Массив книг + добавление новой книги
const books = [
  {
    title: 'Война и мир',
    author: 'Лев Толстой',
    year: 1869,
    coverColor: 'красный',
    genre: 'роман'
  },
  {
    title: 'Преступление и наказание',
    author: 'Фёдор Достоевский',
    year: 1866,
    coverColor: 'серый',
    genre: 'роман'
  },
  {
    title: 'Тихий Дон',
    author: 'Михаил Шолохов',
    year: 1940,
    coverColor: 'фиолетовый',
    genre: 'роман'
  }
];
books.push({
  title: 'Дубровский',
  author: 'Александр Пушкин',
  year: 1832,
  coverColor: 'синий',
  genre: 'роман'
});
console.log('Массив книг после добавления:', books);

// Задание 9. Ещё один массив книг + объединение с предыдущим
const otherBooks = [
  {
    title: 'Мёртвые души',
    author: 'Николай Гоголь',
    year: 1835,
    coverColor: 'красный',
    genre: 'повесть'
  },
  {
    title: 'Муму',
    author: 'Иван Тургенев',
    year: 1852,
    coverColor: 'синий',
    genre: 'рассказ'
  }
];
const allBooks = [...books, ...otherBooks];
console.log('Объединённый массив книг:', allBooks);

// Задание 10. Функция с map

function markRareBooks(booksArray) {
  return booksArray.map(book => ({
    ...book,
    isRare: book.year > 1850
  }));
}
const rareMarkedBooks = markRareBooks(allBooks);
console.log('Книги со свойством isRare:', rareMarkedBooks);