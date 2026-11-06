const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const fromFive = numbers.slice(4);
console.log(fromFive);

const books = ['Тафсир ас-Саади', 'Тафсир ибн Касира', 'Облегчённый фикх', 'Вехи осознанности'];
const availabilityBook = books.includes('Тафсир ибн Касира');
console.log(availabilityBook);

function reverseArray(array) {
  return array.reverse();
}
console.log(reverseArray(numbers));
console.log(reverseArray(books));

import { comments } from "./comments.js";
const emailCom = comments.filter(comment => comment.email.includes('.com'));
console.log(emailCom);

const updatedComments = comments.map(comment => {
  return {
    ...comment,
    postId: comment.id <= 5 ? 2 : 1
  };
});
console.log(updatedComments);

const shortComments = comments.map(comment => ({
  id: comment.id,
  name: comment.name
}));
console.log(shortComments);

const checkedComments = comments.map(comment => ({
  ...comment,
  isInvalid: comment.body.length > 180
}));
console.log(checkedComments);

const emailArray = comments.reduce((acc, comment) => {
  acc.push(comment.email);
  return acc;
}, []);
console.log(emailArray);
const emailArray_2 = comments.map(comment => comment.email);
console.log(emailArray_2);

const emailString = emailArray_2.toString();
console.log(emailString);

const emailString_2 = emailArray_2.join(', ');
console.log(emailString_2);