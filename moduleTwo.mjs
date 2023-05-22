// ВАЖНО node.js поддерживает ES6 только с 13 версии
// Мы работаем в терминале с помощью Node.js и запускаем файлы командай node имя файла с расширением

// import sumNumbers from './moduleOne.mjs'; // используются одинарные ковычки

// const res1 = sum(10, 2);
// console.log(res1); // 12 

// const res2 = sum(5, 10);
// console.log(res2); // 15

// const res = sumNumbers(10, 2); // Если из одного модуля экспорт дефолтный, то названия могут различаться
// console.log(res); // 12

// console.log(myName); // ReferenceError: myName is not defined // В первом файле мы объявили переменную иона является локальной дляя файла, так как мы её не экспортировали. Оттуда и ошибка

// import { // Так мы импортируем сразу несколько переменных
//     one,
//     two
// } from './moduleOne.mjs'; // Название должны совпадать, так как экспорт не дефолтный

// Чтобы указать другое название используется as

// import{
//     one as oneRenamed,
//     two
// } from './moduleOne.mjs'; // как итог переменная one не создаётся. Вместо неё будет переменная oneRenamed

// import{
//     sum,
//     mult
// } from './moduleOne.mjs';

// console.log(sum(10, 2)); // 12
// console.log(mult(10, 2)); // 20


// import{
//     sum,
//     mult as multi
// } from './moduleOne.mjs';

// console.log(sum(10, 2)); // 12
// // console.log(mult(10, 2)); // ReferenceError: mult is not defined
// console.log(multi(10, 2)); // 20