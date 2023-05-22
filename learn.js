// Выражение 

// Примеры выражений

// "abc"; результат : "abc"
// 10; результат : 10
// 5 + 2; результат : 7
// c = 10; результат : 10
// "Good " + "Evening"; результат : "Good Evening"
// a <= b || c !== d; результат : true/false
// myFunc(c, d); результат : значение функции

// Практика

// console.log(10);
// console.log(5 + 2);
// console.log("Good " + "Evening");

// Выражение с побочными действими

// a = 5;
// b++;
// myFunc(c, d);

// Переменные

// Имена переменных 
// 1. PascalCase - типы и классы
// 2. DB_PASSWORD - значения известны до запуска приложения и не меняются (Например, пароль для бд)
// 3. camelCase - всё остальное

// Объявление переменных 
// var, let, const 

// let a ; // Объявление
// const c = 10; // Объявление и прислвоение
// a = true; // Присвоение

// console.log(a); // ReferenceError: a is not defined

// let a; 
// console.log(a) // undefined

// a = true;
// console.log(a); // true
// console.log(console.log(10)); // 10 
                                 // undefined
// const myName; // Missing initializer in const declaration 

// const myName = "Pargev";
// myName = "Pargev1"; // Assignment to constant variable.
// console.log(myName);

// Тип переменной

// Примитивные типы

// 1. String(строка)
// 2. Boolean(логические)
// 3. Number(число)
// 4. null
// 5. undefined
// 6. Symbol(символ)

// Примеры 

// "Hello world", 
// undefined, 
// 25, 
// true 

// Ссылочный тип

// 1. Object(объект)

// Примеры

// let obj = {
//     a: 10,
//     b: true
// }; 0x3151 - ссылка на область в памяти

// let array = [1, 2, 3 ...]; 0x7213 -  ссылка на область в памяти

// const obj = {
//     a: 10,
//     b: true
// }; 
// const copyOfObj = obj;
// copyOfObj.a = 20;
// copyOfObj.c = "abc";
// console.log(obj.c); //  "abc"
// console.log(obj.a); // 20

// Динамическая типизация

// JavaScript - динамически типизированный язык

// Не JavaScript

// String a = "abc";
// int b = 10;
// b = "xyz"; // Error

// JavaScript

// let a  = "abc"; //String
// a = 10; // Number
// a = true; //Boolean
// a = undefined; // undefined

// Минус динамической типизации

// function a(){
//     console.log("hey there")
// }
// a(); // "hey there"
// a = 10;
// a(); // a is not a function
 

// Как избежать ошибки

// const a = ()=>{
//     console.log("hey there");
// }
// a(); // "hey there"
// a = 10; // Assignment to constant variable.
// a();

// Правила работы с переменными 

// 1. Вcё время объявляёте переменные перед использование
// 2. Используйте const везде, где  это только возможно

// Объекты

// Синтаксис 

// const myCity = {
//     city: "Moscow", 
//     popular: true, 
//     country: "USA"
// };

// const myCity = {
// popular: true, 
// country: "USA"
// city: "Moscow",
// };

// Порядок ключей не имеет значение

// Получения значения свойств

// const myCity = {    
//     city: "Moscow", 
//     popular: true, 
//     country: "USA"
// };
// console.log(myCity.city); // "Moscow"

// // Изменить значение свойства

// myCity.city = "New York";
// console.log(myCity.city); // "New York"

// // Добавить свойство

// myCity.people = 100;
// console.log(myCity);  //{ city: 'New York', popular: true, country: 'USA', people: 100 }

// // Удалить свойство

// delete myCity.people
// console.log(myCity); // {city: 'New York', popular: true, country: 'USA'}

// const myCity = {
//     city: "Moscow"
// };

// Синтаксис с квадратными скобками

// myCity["popular"] = true;
// console.log(myCity); // {city: 'Moscow', popular: true}

// Приенение этого синтаксиса

// const countryPropertyName = "country";
// myCity[countryPropertyName] = "Russia"; // Создаться свойство с именем значения переменной
// console.log(myCity); // {city: 'Moscow', popular: true, country: 'Russia'}

// const myCity = {
//     city: "Moscow",
//     info : {
//         isPopular: true,
//         country: "Russia"
//     }
// }
// console.log(myCity.info.isPopular); // true

// delete myCity.info["isPopular"];
// console.log(myCity); // {city: 'Moscow', info: {…}} city: "Moscow", info: country: "Russia"

// const name = "Pargev";
// const age = "14";

// const userProfile = {
//     name, // Равносильно name: name,
//     age,  // Равносильно age: age,
//     hasSingedAgreement: false
// }
// console.log(userProfile); // {name: 'Pargev', age: '14', hasSingedAgreement: false}
// Рекомендовано ставить такие сокращённые свойства в начало, как в примере.

// Глобальные объекты

// 1. window // для браузеров 
// 2. global // для Node.js 
// 3. globalThis // общий

// console.log(window); // Window {window: Window, self: Window, document: document, name: '', location: Location, …}
// console.log(window.innerWidth); //1800 (px)
// console.log(globalThis); // Равносильно console.log(window);
// console.log(globalThis.innerWidth); // Равносильно console.log(window.innerWidth); 

// console.log(10);
// window.console.log(10); // Равносильно console.log(10);

// Методы

// Метод - свойство объекта, значение которого функция

// const myCity = {
//     city: "Moscow", // Свойство объекта
//     cityGreetting: function (){  // Метод объекта
//         console.log("Greetting!!!");
//     }
// }
// myCity.cityGreetting(); // Greetting!!!

// Сокращённая запись

// const myCity = {
//     city: "Moscow",
//     cityGreetting(){ 
//         console.log("Greetting!!!");
//     }
// }
// myCity.cityGreetting(); // Greetting!!!

// JSON

// JSON - JAVASCRIPT OBJECT NOTATION

// {
//     "userId": 1,
//     "id": 1, 
//     "title": "Test title",
//     "status": {
//         "completed": false
//     }
// }

// Конвертация JSON в Object

// JSON.parse();
// Результат: 
// {
//     userId: 1,
//     id: 1, 
//     title: "Test title",
//     status: {
//         completed: false
//     }
// }

// Конвертация Object в JSON

// JSON.stringify
// Результат:
// {
//     "userId": 1,
//     "id": 1, 
//     "title": "Test title",
//     "status": {
//         "completed": false
//     }
// }

// Пример

// const post = {
//     title: "My post",
//     likes: 5
// }
// console.log(post); // {title: 'My post', likes: 5}
// console.log(JSON); // JSON {Symbol(Symbol.toStringTag): 'JSON', parse: ƒ, stringify: ƒ}
// console.log(JSON.stringify(post)); // {"title":"My post","likes":5}
// postStr = JSON.stringify(post);
// console.log(JSON.parse(postStr)); // {title: 'My post', likes: 5}

// Мутация в JS 

// const a = 10;
// let b = a;
// b = 30;
// console.log(a); // 10
// console.log(b); // 30

// const person = {
//     name: "Bob",
//     age: 21
// }

// Мутация по значению

// person.age = 22; // Мутация объекта
// person.isAbult = true; // Мутация объекта
// console.log(person.age); // 22
// console.log(person.isAbult); // true

// Мутирование копии

// const person2 = person;
// person2.age = 22; // Мутация объекта
// person2.isAbult = true; // Мутация объекта
// console.log(person.age); // 22
// console.log(person.isAbult); // true

// Как избежать мутаций

// Первый способ
// const person = {
//     name: "Bob",
//     age: 21
// };
// const person2 = Object.assign({}, person);
// person2.age = 22;
// console.log(person.age); // 21
// console.log(person2.age); // 22

// Второй способ
// const person = {
//     name: "Bob",
//     age: 21
// };
// const person2 = {...person};
// person2.name = "Alice";
// console.log(person.name); //Bob
// console.log(person2.name); // Alice

// Третий способ

// const person = {
//     name: "Bob",
//     age: 21
// };
// const person2 = JSON.parse(JSON.stringify(person));
// person2.name = "Jhon";
// console.log(person.name); // Bob
// console.log(person2.name); // Jhon

// Функции

// Функция - блок кода, который можно выполнять многократно

// Не оптимально
// let a = 5;
// let b = 3;
// let c;
// c = a + b;
// console.log(c); // 8

// a = 8;
// b = 12;
// c = a + b;
// console.log(c); // 20

// Оптимально
// let a = 5;
// let b = 3;

// function sum(a,b){ // a  и b  - параметры
//     const c = a + b;
//     console.log(c);
// }

// sum(a,b); // 8  // a  и b - аргументы

// a = 12;
// b = 8;
// sum(a,b); // 20

// Типы функций
// 1. Именованная
// 2. Присвоенная переменной
// 3. Анонимной(безимянной)
// 4. Агрумет при вызове другой функции
// 5. Значение свойства/метода объекта

// Функция - объект

// Объявление функции

// function myFn(a,b){
//     let c;
//     a = a + 1; // 11
//     c = a + b; // 11 + 3 = 14
//     return c;
// }

// console.dir(myFn); // ƒ myFn(a,b) arguments: null, caller: null, length: 2, name: "myFn"

// Вызов функции

// myFn(10, 3); // 14

// Самая короткая функция

// function myFn(){}
// myFn(); // undefined

// Передача значения по ссылке

// const personOne = {
//     name: "Bob",
//     age: 20
// }

// function increasePersonAge(person){
//     person.age += 1;
//     return person
// }

// increasePersonAge(personOne);
// console.log(personOne.age); // 21
// Внутри функции не рекомендуется мутировать внешний объект

// Действия для избежания мутации

// const personOne = {
//     name: "Bob",
//     age: 21
// }

// function increasePersonAge(person){
//     const updatePerson = Object.assign({}, person);
//     updatePerson.age += 1;
//     return updatePerson;
// }

// const updatePerson = increasePersonAge(personOne);
// console.log(personOne.age); // 21
// console.log(updatePerson.age); // 22

// Callback функции

// Пример Callback функции

// function printMyName(){
//     console.log("Pargev");
// }
// console.log("Start");
// setTimeout(printMyName, 3000); // setTimeout - функция, которая вызывает функцию через определённые промежуток времени

// Правила работы с функциями
// 1. Называйте функции исходя из выполняемых задач
// 2. Одна функция выполняет одну задачу
// 3. Не рекомендуется изменять внешние относительно функции переменные

// Область видимости

// let a; // глобальная переменная
// let b; // глобальная переменная

// function myFn(){
//     let b; // локальная переменная
//     a = true; // глобальная переменная
//     b = 10; // изменяется локальная переменная, а не глобальная // совпадение в названии переменных допускаются
//     console.log(b); // 10
// }

// myFn();
// console.log(a); // true
// console.log(b); // undefined

// цепочка областей видимости

// const a = 5;

// function myFn(){
//     function innerFn(){ // локальная область видимости
//         console.log(a); // глобальная переменная, так как в области видимости функции innerFn() нет переменной a, и в myFn() так же нет этой переменной. Это называется цепочка областей видимости
//     }
//     innerFn();
// }

// myFn(); // 5

// Типы областейвидимости
// 1. Глобальеая
// 2. Локальная
// 3. Область видимости блока (переменные объявленные с помощью let и const, занесённые в блок(находятся между {}))

// function myFn(){
//     a = true; // рпеременная будет объявлена а глобальной области видимости, так как в итоге такую переменную не нашли // так делать не рекомендуется
//     console.log(a); // true
// }

// myFn();

// console.log(a); // true

// Обновлённые правила работы с переменными
// 1. Все переменные объявлять перед использованием
// 2. Использовать const везде, где это только возможно
// 3. Внутри функции не изменять переменные с внешних областей видимости

// Строгий режим
// Мтрогий режим - инструкция для JavaScript анализировать код более внимательно. Для использования нужно написать 'use strict'

// 'use strict'

// function myFn(){
//     a = true;
//     console.log(a); //  is not defined at myFn 
// }

// myFn();
// console.log(a);
// Запрещается использование необъявленных переменных

// Операторы
// Оператор - встроенная функция
// Виды операторов
// 1. Арифметические (+ - * /)
// 2. Стравнения (=== !== <= >=)
// 3. Логические (! && ||)
// 4. Присваивания (=)
// 5. Текстовые (typeOf, instanceOf, new, delete) // typeOf - тип переменной, instanceOf - пренодлежность к тому или иному классу, new - создать новый объект, delete - удаляет свойство или метод объекта

// let  a, b; // оператор запятая
// a = 10; // оператор присваивания
// b = a; // оператор присваивания
// let c = a + b; // оператор присваивания и оператор плюс
// console.log(c); // 20

// let a = 10; // здесь a и 10 - операнды

// Унарные операторы

// У унарных операторов всегда один операнд
// a++;
// +a;
// delete obj.a;
// typeof a;
// new Object()

// Бинарные операторы

// У бинарных операторов 2 два операнда

// a = 5;
// a + b;
// a += 5;
// a === b;
// a && b;

// Инфиксная запись

// Оператор находиться мtжду операндами
// a = true;
// a = b;
// a += 5;
// a || b;
// a > b;

// Префиксная запись

// Оператор находится перед операндом 
// ++a;
// delete obj.a;
// typeof a;

// Постфиксная запись

// Оператор находится после операнда
// a++;
// myFunction();

// Приоритетность операторов

// a + b * c /d - e; // Приорететность как в арифметике
// a + ((b * c) / (d - e)); // Для опорядочивания приорететности используются круглые скобки
// (((a + b) * c) / d) - e

// Логический операторы

// ! - не // всегда возврашает boolean
// && - и // возвращает значение одного из операндов
// || - или // возвращает значение одного из операндов

// Ложные значения

// Ложное значение - значение которое был приведено к типу Boolean и значению false
// Исользуется функция Boolean(value), здесь value должно быть ложно
// Примеры ложных значений
// 1. false
// 2. 0
// 3. ''
// 4. undefined
// 5. null

// console.log(Boolean); // возвращает значение одного из операндов
// console.log(Boolean('')); // false
// console.log(Boolean(undefined)); // false
// console.log(Boolean(' ')); // true
// console.log(Boolean(0)); // false
// console.log(Boolean(10)); // true
// console.log(Boolean(5.5)); //true

// console.log(typeof 10); // number
// console.log(typeof undefined); // undefined
// console.log(typeof "Pargev"); // string
// console.log(typeof false); // boolean
// console.log(typeof 10 === "number"); // true
// console.log("number" === "number"); // true
// let isundefined;
// console.log(typeof isundefined === "undefined"); // true

// Условный оператор НЕ (!)
// В основном используется в логических конструкциях

// console.log(!10); // false
// console.log(!0); //true
// console.log(!"abc"); //false
// console.log(!""); //true
// console.log(!true); // false
// console.log(!undefined); // true

// Отрицание отрицания

// console.log(!!10); // true
// console.log(!!0); //false
// console.log(!!"abc"); //true
// console.log(!!""); //false
// console.log(!!true); // true
// console.log(!!undefined); // false

// Пустой объект - истинной значение

// const obj ={};
// console.log(!!obj); // true

// Операторы && и ||

// Оператор && 
// Выражение 1 && Выражение 2
// Если выражение 1 ложно, выражение 2 игнорируется и возвращается результат выражения 1
// Это принцып работы оператора короткого замыкания
// Истина, когда оба выражения истина

// let a = 10;
// console.log(a && console.log("Выполнено")); // Выполнено
//                                             // undefined

// let b;
// console.log(b && console.log("Выполнено")); // undefined

// Оператор ||
// Выражение 1 && Выражение 2
// Если выражение 1 истина, выражение 2 игнорируется и возвращается результат выражения 1
// Этот оператор также оператор короткого замыкания
// Ложно, когда оба выражения ложны

// console.log("Pargev" || "Defolt value"); // Pargev
// console.log("" || "Defolt value"); // Defolt value

// Цепочка операторов && и ||
// a && b && c && d // Ищет первое ложное и возвращает его значение если таких нет возвращает значение последнего операнда
// a || b || c || d // Ищет первое истинное и возвращает его значение если таких нет возвращает значение последнего операнда

// Оператор разделения объекта на свойства (...)

// const button = {
//     width: 100,
//     text: "Buy"
// }

// const redButton = {
//     ...button,
//     color: "red"
// } // перезапишет цвет в случаи присутствия свойства color y button

// const redButton = {
//     color: "red"
//     ...button,
// } // не перезапишет

// console.table(button);

// (индекс)    Значение
//   width	      100
//   text	     'Buy'

// console.table(redButton);

// (индекс)    Значение
//   width	      100
//   text	     'Buy'
//   color	     'red'

// const buttonInfo = {
//     text: "Buy"
// }

// const buttonStyle = {
//     color: "yellow",
//     width: 200,
//     height: 100
// }

// const button = {
//     ...buttonInfo,
//     ...buttonStyle
// }

// console.table(button);

// (индекс)     Значение
//   text	      'Buy'
//   color	    'yellow'
//   width	      200
//   height	      100

// Конкатенация/соединение строк

// console.log("Hello " + "World"); // Hello World

// Переменные в конкатенации строк

// const hello = "Hello";
// const world = "World";
// const greeting = hello + " " + world; // нерационально
// console.log(greeting); // Hello World

// Шаблонные строки

// const hello = "Hello";
// const world = "World";
// const greeting = `${hello} ${world}`; // ES6 синтаксис // между ними пробел
// console.log(greeting); // Hello World

// Ещё один пример 
// const myName = "Паргев";
// const myCity = "Москва";
// const result = `Меня зовут ${myName} и мой город ${myCity}`;
// console.log(result); // Меня зовут Паргев и мой город Москва

// console.log(10 + "Pargev"); // "10Pargev"
// console.log(undefined + "abc"); // "undefinedabc"

// Функциональные выражения

// Объявленная функция

// function myFn(a, b){
//     let c;
//     a = a + 1;
//     c = a + b;
//     return c;
// }

// Функциональное выражение

// function(a, b){
//     let c;
//     a = a + 1;
//     c = a + b;
//     return c;
// }

// У функциональных выражений отсутствует имя и её нельзя использовать автономно
// Функциональное выражение можно присвоить переменной и использовать, как аргумент другой функции
// Саще всего функциональное выражение используют в качестве callback функции в другой функции

// Как присвоить имя функциональному выражению

// const myFunction = function(a, b){
//     let c;
//     a = a + 1;
//     c = a + b;
//     return c;
// }

// myFunction(5, 3); // 9

// Функциональное выражение в вызове другой функции

// setTimeout(function(){
//    console.log("Отложенное сообщение"); 
// }, 1000); // Отложенное сообщение через 1 секунду

// Стрелочные функции

// (a, b)=>{
//     let c;
//     a = a + 1;
//     c = a + b;
//     return c;
// }

// Стрелочная функция - выражение, и они всегда анонимны

// Как присвоить имя стрелочной функции

// const myFunction = (a, b)=>{
//     let c;
//     a = a + 1;
//     c = a + b;
//     return c;
// }

// myFunction(5, 3); // 9

// setTimeout(()=>{
//     console.log("Это стрелочная функция");
// }, 1000); // Это стрелочная функция через 1 секунду

// Как сокращать синтаксис стрелочной функции

// Если один параметр круглые скобки можно опустить, но так делать не рекомендуется

// a=>{
//     // Тело функции
// }

// Если функция состоит из одного выражения фигурные скобки можно опускать

// (a, b)=> a + b;

// Значение параметров функции по умолчанию

// function multByFactor(value, multiplayer = 1){
//     return value * multiplayer;
// }

// multByFactor(10, 2); // 20
// multByFactor(5); // 5 
// Параметру было присвоено дефолтное значение

//  Пример этой функции, созданной с помощью функционального выражения

// const func = function(value, multiplayer = 1){
//     return value * multiplayer;
// }

// func(10, 2); // 20
// func(5); // 5

//  Пример этой функции, созданной с помощью стрелочной функции

// const func = (value, multiplayer = 1)=>{
//     return value * multiplayer;
// }

// func(10, 2); // 20
// func(5); // 5

// Пример использования функции с параметром поумолчанию

// const newPost = (post, addedAt = Date())=>({
//     ...post,
//     addedAt
// });

// const firstPost = {
//     id: 1,
//     author: "Pargev"
// }

// newPost(firstPost);

// Круглые скобки нужны чтобы вернуть объект нереально. JS прочитает фигурные скобки не как объект, а как тело функции

// let variable = newPost(firstPost);
// console.log(variable); // {id: 1, author: 'Pargev', addedAt: 'Fri May 12 2023 16:46:27 GMT+0300 (Москва, стандартное время)'}

// Обратботка ошибок

// const fnWithError = ()=>{
//     throw new Error("Some error")
// }

// fnWithError(); // Uncaught Error: Some error
// console.log("Continue...");

// Решение проблемы - try/catch

// try{
//     // Выполнение блока кода
// } catch(error){
//     // Этот блок выполняется в случаи возникновения ошибки в блоке try
// }

// const fnWithError = ()=>{
//     throw new Error("Some error");
// }

// try{
//     fnWithError()
// }catch(error){
//     console.error(error); // learn.js:913 Error: Some error at fnWithError // Выделиться красным из-за функции console error
//     console.log(error.message); // Some error
// }

// console.log("Continue"); // Continue

// Ошибка обработалась и код продолжил выполняться< так как ошибка пойманная

// Инструкции

// Выражение возвращает значение
// Инструкция выполняет действия

// Примеры инструкция

// let a; // Создание переменной и присваивание значения

// const b = 5; // Создание переменной и присваивание значения

// if(a > b){
//     console.log("a is larger"); // Если вырно выполняй блок. Это инструкция
// }

// for(let i = 0; i < 5; i++){
//     console.log(i);
// }

// Инструкция обычно заканчивается точкой с запятой
// Точку с запятой можно опускать
// Выражение может быть инструкцией

// Приаеры выражений-инструкций

// "abc";
// a = a + 3;
// c = a + b;
// a = "Good " + "Evening";
// myFunc(c, d);
// console.log("Hey");

// Инструкцию нельзя трансформировать в выражение

// Как отличить выражение от инструкции

// Выражения могут быть использованы, как аргуметы вызова функции

// function myFn(a){
//     console.log(a);
// }

// const b = true;
// let  c = 10;

// myFn(2 + 3); // 5
// myFn(b); // true
// myFn(c = c + 1); // 11
// myFn(c = c + 1;); // Uncaught SyntaxError: missing ) after argument list
// myFn(let d); // Uncaught SyntaxError: missing ) after argument list

// Массивы

// Массив - объект с цыфровым именем свойств

// Синтаксис

// const myArray = [1, 2, 3];
// console.log(myArray); // (3) [1, 2, 3]

// const myArray2 = new Array(1, 2, 3);
// console.log(myArray2); // (3) [1, 2, 3]

// Структура массива

// const myArray = [1, true, "Pargev"];
// console.log(myArray);
// (3) [1, true, 'Pargev']
// 0: 1
// 1: true
// 2: "Pargev"
// length: 3

// console.log(myArray.length); // 3 // Вернёт длину массива, то есть количество эллемеентов

// const myArray2 = [1, true, "Pagrev"]; 
// console.log(myArray === myArray2); // false

// const myArray3 = myArray;
// console.log(myArray3 === myArray); // true

// const myObject = {
//     0: 1,
//     1: 2,
//     2: 3,
//     length: 3
// }
// console.log(myObject); // {0: 1, 1: 2, 2: 3, length: 3}
                       // 0: 1
                       // 1: 2
                       // 2: 3
                       // length: 3
                       // [[Prototype]]: Object

// const array = [1, 2, 3];
// console.log(array); // (3) [1, 2, 3]
                    // 0: 1
                    // 1: 2
                    // 2: 3
                    // length: 3
                    // [[Prototype]]: Array(0)

// Объект и массив визуально совпадают внешне, но у них разные прототипы.
// Индекс - порядковый номер элемента массива

// const myArray = [1, true, "a"];
// console.log(myArray); // (3) [1, true, 'a']

// console.log(myArray[0]); // 1
// console.log(myArray[1]); // true

// Индекс массива начинаетсяс нуля

// console.log(myArray.length); // 3

// console.log(myArray.0); // Uncaught SyntaxError: missing ) after argument list

// myArray.length = 7;
// console.log(myArray); // (7) [1, true, 'a', пусто × 4] Создано 4 пустых элементы. Вручную менять не рекомендуется

// const myArray = [1, 2, 3, 4];

// console.log(myArray); // (4) [1, 2, 3, 4]
// console.log(myArray.length); // 4

// myArray[2] = "abc";
// console.log(myArray); // (4) [1, 2, 'abc', 4]
// console.log(myArray[2]); // "abc"

// myArray[4] = true;
// console.log(myArray); // (5) [1, 2, 'abc', 4, true]
// console.log(myArray.length); // 5

// Методы массивов
// 1. push
// 2. pop
// 3. shift
// 4. unshift
// 5. forEach
// 6. map
// 7. reduce
// 8. reverse
// итд

// Они вызываются с помошью точечной записи

// Основные методы массива

// Push. Добавит жлемент в конце массива

// const myArray = [1, 2, 3];
// console.log(myArray); // (3) [1, 2, 3]

// myArray.push(4); // Добавляет элемент, 4, в конец массива
// console.log(myArray); // (4) [1, 2, 3, 4]

// myArray.push(true);
// console.log(myArray); // (5) [1, 2, 3, 4, true] 

// Pop. Удалит последний элемент в массиве и возвращает только что удалённый элемент

// const myArray = [1, 2, 3];
// console.log(myArray); // (3) [1, 2, 3]

// myArray.pop();

// console.log(myArray); // (2) [1, 2]

// const removedElement = myArray.pop(); // Возвращает только что удалённый элемент

// console.log(myArray); // [1]
// console.log(removedElement); // 2

// Unshift. Добавляет жлемеент в начало массива

// const myArray = [1, 2, 3];
// // console.log(myArray); (3) [1, 2, 3]

// myArray.unshift(true);
// console.log(myArray); // (4) [true, 1, 2, 3] // индексы всех элементов сдвинуться на один вперёд

// myArray.unshift("abc");
// console.log(myArray); // (5) ['abc', true, 1, 2, 3]

// Shift. Удаляет первый элемент массива и возвращет только что удалённый элемент

// const myArray = [1, 2, 3];
// // console.log(myArray); // (3) [1, 2, 3]

// myArray.shift();
// console.log(myArray); // (2) [2, 3]

// const removedElement = myArray.shift(); // По анологии с методом pop() возвращает только что удалённый элемент

// console.log(myArray); // [3]
// console.log(removedElement); // 2

// forEach. Перебирает каждый элемент массива и выполняет callback функцию столько раз, сколько элементов в массиве

// const myArray = [1, 2, 3];
// console.log(myArray); // (3) [1, 2, 3]

// myArray.forEach(el => console.log(el + 2)); // 3 // 4 // 
// console.log(myArray); // (3) [1, 2, 3] // Оригинальный массив не измениться

// const result = myArray.forEach(el => console.log(el + 2));
// console.log(result); // undefined

// Map. Перебирает каждый элемент массива и выполняет callback функцию столько раз, сколько элементов

// const myArray = [1, 2, 3];
// console.log(myArray); // (3) [1, 2, 3]

// const newArray = myArray.map(el => el + 3); // будет создан новый массив, в отличии от forEach

// В качестве параметра можно использовать и функциональное выраженеи, и стрелочную функцию

// console.log(myArray); // (3) [1, 2, 3]
// console.log(newArray); // (3) [4, 5, 6] // Оригинальный массив не измениться

// Деструктуризацияю

// Деструктуризация - присваивание значений и свойст объекта переменным

// const userProfile = {
//     name: "Pargev",
//     commentQty: 23, 
//     hasSingedAgreemrnt: false
// }

// const { name, commentQty } = userProfile;
// const { hasSingedAgreemrnt } = userProfile;

// console.log(name); // "Pargev"
// console.log(commentQty); // 23

// Деструктуризация массива

// const fruit = ["Apple", "Banana"];

// const [ fruitOne, fruitTwo ] = fruit; // Важно указать название переменной в нужном порядке

// console.log(fruitOne); // "Apple"
// console.log(fruitTwo); // "Banana"

// Деструктуризация в функциях

// const userProfile = {
//     name: "Pargev",
//     commentQty: 23,
//     hasSingedAgreement: false
// }

// const userInfo = ({ name, commentQty }) =>{
//     if(!commentQty){
//         return `User ${name} has no comments`; 
//     }
//     return `User ${name} has ${commentQty} comments`; 
// }

// userInfo(userProfile); //  User Pargev has 23 comments

// Условные инструкции

// Виды условных операторов
// 1. if
// 2. if ... else
// 3. if else if
// 4. switch
// 5. Тернарный оператор

// Синтаксис if

// if(Условие){
//     // Блок кода, который выполняется однократно, если условие истино
// }

// Примеры

// let val = 10;

// if(val > 5){
//     val += 20;
// }

// console.log(val); // 30

// const person = {
//     age: 14
// }

// if(!person.name){ // !undefined === true
//     console.log("Имя не указано"); //" Имя не указано"
//     // Других действий, если свойства name у объекта нет
// }

// Инструкция if ... else

// Синтаксис if ..  else

// if(Условие){
//     // Блок выполниться однократо, если условие верно
// } else{ // У else нет условия
//     // Блок выполниться однократно, если условие ложно
// }

// Пример

// let val = 10;

// if(val < 5){
//     val += 20;
// } else{
//     val -= 20;
// }

// console.log(val); // -10

// Инструкция if else if

// Синтаксис if else if

// if(Услоыие 1){
//     // Блок кода выполняется однократно, если Условие 1  верно
// } else if(Условие 2){
//     // Блок коды вополняется однократно, если Условие 2 верно
// } else{
//     // Блок кода выполняется однократно, если все предыдушие условия ложны
// }

// Пример

// const age = 14;

// if(age > 18){
//     console.log("Is adult");
// } else if(age >= 12){
//     console.log("Is tenager");
// } else{
//     console.log("Is child");
// }
// Is tenager

// Пример с использованием только if

// const age = 24;

// if(age > 18){
//     console.log("Is adult");
// }

// if(age >= 12){
//     console.log("Is tenager");
// }

// if(age < 12){
//     console.log("Is child");
// }

// Is adult 
// Is tenager

// Как исправить ошибку

// const age = 24;

// if(age >= 18){
//     console.log("Is adult");
// }

// if(age >= 12 && age < 18){
//     console.log("Is tenager");
// }

// if(age < 12){
//     console.log("Is child");
// }
// Is adult 

// if в функциях

// const sumPositiveNumbers = (a, b)=>{
//     if(typeof a !== "number" || typeof b !== "number"){
//         return "One of the arguments is not a number";
//     }

//     if(a <= 0 || b <= 0){
//         return "NUmber/s is/are not positive";
//     }

//     return a + b;
// }

// Функция принимает два аргумента и с использованием if проверяет эти числа. Первый if проверяет тип аргумента, и если это не число выводит сообщение о том, что одно из чисел (аргуметов) не число. Второй if проверяет на знак числа и на равенство с нулём. Если число равно нулю или имеет знак минус возвращается сообщение, предупреждающее об это

// Инструкция switch

// Синтаксис switch

// switch(выражение){
//     case A:
//         // Действие если Выражение === B
//     break
//     case B:
//         // Действие если Выражение === B;
//     break
//     default:
//         // Действие по умолчанию
// }

// Ключевое слово break выводит нас из инструкции switch в случаи если выражение === блоку. (то есть выполнилось условие)
// Ключевое слово defoult устанавливает значение по умолчанию. Аналогичло else

// Пример

// const mounth = 2;

// switch(mounth){
//     case 12:
//         console.log("Декабрь");
//     break
//     case 1:
//         console.log("Январь");
//     break
//     case 2:
//         console.log("Февраль");
//     break
//     default:
//         console.log("Это не зимний месяц");
// } // Февраль  

// Тернарный оператор

// У тернарного оператора три оператора
// Конструкция с тернарным оператором - выражение, а выражение всегда возвращает значение

// Синтаксис тернарного оператора
// Условие ? Выражение 1 : Выражение 2

// Выражение 1 выполняется, когда условие правдиво, а если ложно возвращается результат Выражение 2
// Тернарный оператор является заменой if, которая может использовать только выражение

// Рекомендуется писать так

// Условие
    // ? Выражение 1
    // : Выражение 2

// Пример

// const value = 11;

// value
//     ? console.log("Условие истино")
//     : console.log("Условие ложно");
// "Условие истино"

// Ещё пример

// const value1 = 11;
// const value2 = 25;

// value1 && value2 
//     ? myFunction(value1, value2)
//     : anotherFunction();
// Будет запущена функция, так как вызов функции - выражение, и передаётся ей в качестве переменной и первая переменная и вторая

// Ещё один пример

// let value = 11;
// console.log(value >= 0 ? value : -value); // 11

// // Значение выражения с тернарным оператором можно присвоить переменной

// value = -5;
// const res = value >= 0 ? value : - value;
// console.log(res); // 5 // -(-5) = 5 // Выполнилось второе выражение, так как условие ложно 

// Циклы

// Значение цикла - упростить различный код, похожий на один из таких

// let i = 0;

// console.log(i); // 0
// i++;
// console.log(i); // 1
// i++
// console.log(i); // 2
// i++;
// console.log(i); // 3
// i++
// console.log(i); // 4
// i++;
// console.log(i); // 5
// i++;

// const myArray = [true, "abc", 10];

// console.log(myArray[0]); // true
// console.log(myArray[1]); // "abc"
// console.log(myArray[2]); // 10

// const myObject = {
//     x: 10, 
//     y: true,
//     z: "abc"
// }

// console.log(myObject.x); // 10
// console.log(myObject.y); // true
// console.log(myObject.z); // "abc"

// Типы циклов
// 1. for
// 2. for ... in ...
// 3. while 
// 4. do ... while
// 5. for ... of ... 

// Все циклы - инструкции

// Цикл for

// Синтаксис for 

// for(Начальная инструкция; Условие; Итерационное действие){
//     // Блок кода, выполняемый при каждой итерации
// }

// Пример

// for(let i = 0; i <= 5; i++){
//     console.log(i); // 0 // 1 // 2 // 3 // 4 // 5
// } // так можно заменить код, в котором нужно менять значение переменной от 0 до 5

// Сначало сравниваем значение переменной с 5, условие выполняется и мы выполняем блок кода и увеличивается значение i на 1, затем заново происходит проверка на выполнение устройства. Когда i = 6 мы выходим из цикла

// Цикл for можно использовать для того, чтобы перебрать массив. Но не рекомендуется. Лучше использовать методы высшего порядка

// Пример как перебрать массив с помошью цикла for

// const myArray = ["first", "second", "third"];

// for(let i = 0; i < myArray.length; i++){
//     console.log(myArray[i]); 
// } // first // second // third

// Лучше использовать forEach

// const myArray = ["first", "second", "third"];

// myArray.forEach((elem, index)=>{
//     console.log(elem, index);
// }) // first 0 // second 1 // third 2 // index можно не объявлять и не использовать

// Цикл while

// Синтаксис while

// while(Условие){
//     // Блок кода выполниться на каждой итреации
// }

// Пример

// let i = 0;

// while(i < 5){
//     console.log(i);
//     i++; // нцжно менять переменную в теле цикла, а не в параметрах, иначе цикл будет бесконечным
// } // 0 // 1 // 2// 3 // 4 

// Другой пример

// let i = 0;

// while(i < 5){
//     console.log(i);
// } // выведет 0 бесконечное количество раз  // так лучше не делать

// Цикл do while
// Данный цикл всегда выполняетсяхотябы один раз

// Синтаксис do while

// do{
//     // Блок кода, выполняемый на каждой итерации
// } while(Условие)

// Пример

// let i = 0;

// do{
//     console.log(i);
//     i++
// } while(i < 5) // 0 // 1 // 2 // 3 // 4 // Сначало выполниться блок do затем будет совершена проверка и когда i будет равнятся 5, а это после вывода 4, мы выйдем из цикла

// Другой ппример. Здесь условие изначально неверно, поэтому блок do выполниться один раз

// let i = 10;

// do{
//     console.log(i);
//     i++;
// } while(i < 5) // 10

// Цикл for in

// Синтаксис for in

// for(key in Object){ // здесь key - переменная // Object - переменная, свойства которой нужно перебрать
//     // Действие с каждым свойством объекта
//     // Значение свойства - Object[key]
// }

// const myObject = {
//     x: 10,
//     y: true,
//     z: "abc"
// }

// for(const key in myObject){
//     console.log(key, myObject[key]);
// }
// x 10
// y true
// z abc

// forEach для того, чтобы перебрать объект // некая аналогия for in

// const myObject = {
//     x: 10,
//     y: true,
//     z: "abc"
// }

// Object.keys(myObject).forEach(key =>{
//     console.log(key, myObject[key]);
// });
// x 10
// y true
// z abc

// Можно перебрать сразу значения объекта также с помощью for Each. Можно воспринять, как другой аналогичный код циклу for in

// const myObject = {
//     x: 10,
//     y: true,
//     z: "abc"
// }

// Object.values(myObject).forEach(value =>{
//     console.log(value);
// });
// 10
// true
// abc
// Object.values на выходе даст массив и мы сможем использовать forEac, как метод высшего порядка для массива

// Object.keys

// console.log(Object.keys({})); // [] // получили массив
// console.log(Object.keys({name: "Pargev"})); // ["name"] // получили массив
// console.log(Object.keys({name: "Pargev", isInstructor: true})); // ["name", "isInstructor"] // получили массив

// С помощью Object.keys мы получаем массив ключей объекта

// Object.values

// console.log(Object.values({})); // []
// console.log(Object.values({name: "Pargev"})); // ["Pargev"]

// С помощью Object.keys мы получаем массив значений ключей объекта

// for in для массивов

// const myArray = [true, 10, "abc", null];

// for(const key in myArray){ // обратите внимание, что переменная key объявляется ВСЕГДА с помощью const
//     console.log(myArray[key]);
// } // Данный синтаксис использовать не рекомендуется. Лучше использовать родные методы массива
// true
// 10
// abc
// null

// Цикл for of
// Этот цикл появился впервые в стандарте ES6

// Синтаксис for of

// for(Element of Interable){ // Interable - это выражение,которое нужно перебрать. Например, строка. В ней можно перебрать все символы, этими символами будет являтся Element. 
//     // Действия с определённым элементом
// }

// Пример

// const myString = "Hey";

// for(const letter of myString){
//     console.log(letter);
// }
// H // e // y

// Другой пример

// const myArray = [true, 10, "abc", null]

// for(const elem of myArray){
//     console.log(elem);
// }
// true
// 10
// abc
// null 
// Но forEach всё равно преорететнее для массивов

// for of НЕ для объектов

// let myObject = {
//     x: 10,
//     y: true,
//     z: "abc"
// }

// for(const prop of myObject){
//     console.log(prop);
// } // Uncaught TypeError: myObject is not iterable

// Лучше всего не спользовать циклы для перебора массива

// Модули
// Модули позволяют структурировать код
// Модули позволяют избегать дублтрования блока кода

// export/import появился впервые в ES6

// Синтаксис export/import

// Это файл moduleOne.js
// export ... 

// Это файл moduleTwo.js
// import ... 

// Пример

// Файл moduleOne.js

// const myName = ()=>{
//     console.log("Parhev");
// }

// export default myName; // экспортировать нужно по умолчанию

// Файл moduleTwo.js

// import printMyName from "./modoleOne.js" // во втором файле мы импортировали переменную. Название переменной может не совпадать.Это допускается при дефолтном экспорте. Будьте внимательны когда будете писать путь

// printMyName() // "Pargev"

// Примеры работы с export/import смотрите в файлах moduleOne.js и moduleTwo.js

// Правила работы с модулями
// 1. Модули должны быть одноцелевыми
// 2. Располагайте все export инструкции внизу файла
// 3. Располагайте import инструкции вверху файла
// 4. По возможности используйте export default

// Классы и прототипы

// Классы появились в ES6. До него не было классов, так как JS не объектноориентированный язык, а для того, чтобы JS был похож на такой язык придумали классы и прототипы

// Синтаксис класса

// class ...

// Классы позволяют создать прототипы для объектов
// На основании прототипа создают экземпляры
// Экземпляры имеют свои собственные свойства и метода или могут наследовать их у родителя

// Примеры классов

// class Comment{ // Используется Pascal Case
//      constructor(text){ // метода 
//          this.text = text;
//          this.votesQty = 0; // Начальное количесво голос у каждого комментария 0
//      }
//      upvote(){ // метода
//         this.votesQty += 1;     
//     }
// }

// this будет ссылаться на конкретный экземпляр класса

// Как создать экземпляр

// const firstComment = new Comment("First comment");
// console.log(firstComment); // Comment {text: 'First comment', votesQty: 0}text: "First comment"votesQty: 0[[Prototype]]: Object

// Развёрнутый вид
// Comment {text: 'First comment', votesQty: 0}
// text: "First comment"
// votesQty: 0
// [[Prototype]]: Object
// constructor: 
// class Comment
// upvote: ƒ upvote()
// [[Prototype]]: Object
// Тут появился метод upvote, как унаследованный у класса

// Наследование по цепочке
// console.log(firstComment.); // Отображаются все свойства, text, votesQty и методы родителся constructor, upvote, а также свойства объекта по типу isPrototypeOf, так как изначально объект - глобальный класс js

// Как проверить на принадлежность к классу
// Это можно сделать с помощью instanceof

// class Comment{ 
//     constructor(text){ 
//         this.text = text;
//         this.votesQty = 0; 
//     }

//     upvote(){ 
//         this.votesQty += 1;
//     }
// }

// const firstComment = new Comment("First comment");

// console.log(firstComment instanceof Comment); // true
// console.log(firstComment instanceof Object); // true
// console.log(firstComment instanceof Array); // false

// Вызов метода

// class Comment{ 
//     constructor(text){ 
//         this.text = text;
//         this.votesQty = 0; 
//     }

//     upvote(){ 
//         this.votesQty += 1;
//     }
// }

// const firstComment = new Comment("First comment");

// firstComment.upvote();
// console.log(firstComment.votesQty); // 1
// firstComment.upvote();
// console.log(firstComment.votesQty); // 2

// Проверка принадлежности свойств экземпляру объекта

// class Comment{ 
//     constructor(text){ 
//         this.text = text;
//         this.votesQty = 0; 
//     }
    
//     upvote(){ 
//         this.votesQty += 1;
//     }
// }

// const firstComment = new Comment("First commnet");

// firstComment.hasOwnProperty("text"); // true 
// firstComment.hasOwnProperty("votesQty"); // true
// firstComment.hasOwnProperty("upvote"); // false // это не собственный метода, а наследственный 
// firstComment.hasOwnProperty("hasOwnProperty"); // false

// Создание нескольких экземпляров

// class Comment{ 
//     constructor(text){ 
//         this.text = text;
//         this.votesQty = 0; 
//     }
    
//     upvote(){ 
//         this.votesQty += 1;
//     }
// }

// У каждого будут собственные свойства text и votesQty

// const firstComment = new Comment("First comment"); 
// const secondComment = new Comment("Second comment");
// const thirsComment = new Comment("Third comment");

// Статические методы

// class Comment{ 
//     constructor(text){ 
//         this.text = text;
//         this.votesQty = 0; 
//     }
    
//     upvote(){ 
//         this.votesQty += 1;
//     }

//     static mergeComment(first, second){
//         return `${first} ${second}`;
//     }
// }

// console.log(Comment.mergeComment("First text ", "Second text")); // First text Second text

// Статические свойства не наследуются экземплярами, но доступны как методы объекта

// const newComment = new Comment("Commnet");
// console.log(newComment); // [[Prototype]] : Object
                            // constructor : class Comment
                            // upvote : ƒ upvote()

// Как мы видим mergeComment`ом экземпляр не обладает

// Расширение других классов

// class NumbersArray extends Array{ // будут доступны все методы массива
//     sum(){
//         return this.reduce((el, acc) => acc += el, 0);
//     }
// }

// Здесь мы расширяем дефолтный класс Array с помощью extends, и метод теперь достпен всем массивам, которые создаются используя NumbersArray. 
// Здесь конструктор не нужен, так как родительский конструктор вызовиться автоматически 

// const myArray = new NumbersArray(2, 3 , 4);

// console.log(myArray); // NumbersArray(3) [2, 3, 4]
// myArray.sum(); // метод доступен, так как мы использовали не new Array, a new NUmbersArray

// Цепочка этого прототипа
// Object ==> Array ==> NumbersArray ==> myArray

// Что такое прототип
// Прототип - это механизм, с помощью которого объекты JavaScript наследуют свойства друг от друга.

// class Comment{ 
//     constructor(text){ 
//         this.text = text;
//         this.votesQty = 0; 
//     }
        
//     upvote(){ 
//         this.votesQty += 1;
//     }
// }

// const firstComment = new Comment("First commnet");

// Скрытое свойство __proto__

// console.log(Comment.prototype === firstComment.__proto__); // true
// console.log(Comment.prototype); // {constructor: ƒ, upvote: ƒ}
                                    // constructor : class Comment
                                    // upvote : ƒ upvote()
                                    // [[Prototype]] : Object

// Строки и числа ведут себя как объекты

// const myName = "Pargev";
// myName.toUpperCase(); // PARGEV // Мы использовали свойство строки toYpperCase

// const mySecondName = new String("Hacatran"); // Мы создали говый экземпляр класса строка

// console.log(mySecondName); // String {'Hacatran'}
                                // 0: "H"
                                // 1: "a"
                                // 2: "c"
                                // 3: "a"
                                // 4: "t"
                                // 5: "r"
                                // 6: "a"
                                // 7: "n"
                                // length: 8
                                // [[Prototype]]: String
                                // [[PrimitiveValue]]: "Hacatran"

// У переменной даже приимитивного значения строка ведёт себя как экземпляр объекта строка

// Промисы

// Промисы позволяют обрабатывать отложенные во времени события
// Промис - обещание предоставить результат позже
// Промис может вернуть ошибку, если результат предоставить невозможно

// У промиса есть 3 состояни

// 1. Ожидание
// 2. Исполнен
// 3. Отклонён 

// Создание промиса
// Промис - объект
// Синтаксис промиса

// const myPromise = new Promise((resolve, reject) =>{ // обязательно 2 параметра-функции
//     /**
//      * Выполнение асинхронных действий
//      * 
//      * Внутри этой функции можно в результате вызвать одну из функций resolve или reject
//      */
// }); // Будет состояние ожидания

// Когда вызывается resolve, то промис исполнен. Если reject промис является откланённым

// Получение результата промиса

// myPromise
//     .then(value =>{
//         /**
//          * Действия вв случаи успешного ответа
//          * Value - значение, переданное в вызове функции resolve внутри промиса
//          */
//     })
//     .catch(error =>{
//         /**
//          * Действия в случаи откланения промиса
//          * Error -  значение, переданной в вызове функции reject внутри промиса
//          */
//     })

// Получение данных  с помощью fetch api 

// fetch("https://jsonplaceholder.typicode.com/todos") // Сервис для получения данных
//     .then(response => response.json()) // Получаем ответ и присваем его в значение параметра и используем метод json, который возвращает промис // так как json возвращает промис, то мы вызываем ещё один then
//     .then(json => console.log(json)) // значением для параметра будет массив объектов
//     .catch(error => console.error(error)); // cetch если один из промис откланился

// Далее работа в понели разработчика на https://jsonplaceholder.typicode.com/, так как нужна непустая страница.

// fetch("https://jsonplaceholder.typicode.com/todos") // Можно дописать /1, чтобы получить конкретый элемент из бд. Здесь с индексом 1
//     .then(response =>{
//         console.log(response);
//         return response.json();
//     })
//     .then(json => console.log(json))
//     .catch(error => console.error(error))

// Содной стороны, если запустить код в node.js, то мы не должны получить ответ, но в Node в 18 версии завезли fetch, поэтому всё работает 

// fetch("https://jsonplaceholder.typicode.com/todos") 
//     .then(response => response.json()) 
//     .then(json => console.log(json)) 
//     .catch(error => console.error(error));

// Если выполнить с выключенным интернетом, это можжно ссимулироватьв панели разработчика, томы получим сначало // GET https://jsonplaceholder.typicode.com/todos/55 net::ERR_INTERNET_DISCONNECTED, потом // VM102:4 TypeError: Failed to fetch

// Промисы пример

// Упрощение

// const getData = (url) =>
//     new Promise((resolve, reject) =>
//     fetch(url) 
//         .then(response => response.json()) 
//         .then(json => resolve(json)) // Вызываем функцию и передаём ей json
//         .catch(error => reject(error)) // Вызыываем функцию и передаём ей ошибку
//     )

// getData("https://jsonplaceholder.typicode.com/todos")
//     .then(data => console.log(data))
//     .catch(error => console.log(error.message));

// Async/await
// Async/await - специальный синтаксис для упрощения работы с промисами
// Асинхронная функция - функция, которая всегда возвращает промис
// Синтаксис Async/await

// async function asyncFn(){
    // Всегда возвращает промис
// }

// ||

// const asyncFn = async () =>{
    // Всегда возвращает промис
// }

// Пример

// const asyncFn = async () =>{
//     return "Success!"; // Сначала вернёт промис, потом вернётся строка
// }

// asyncFn(); // Promise {<fulfilled>: 'Success!'}
            // [[Prototype]] : Promise
            // [[PromiseState]] : "fulfilled"
            // [[PromiseResult]] : "Success!"

// Продолжение примера

// const asyncFn = async () =>{
//     return "Success!"; 
// }

// asyncFn()
//     .then(value => console.log(value)); // Success!

//Пример 2 

// const asyncFn = async () =>{
//     throw new Error("there was an error!");
// }

// asyncFn()
//     .then(value => console.log(value))
//     .catch(error => console.log(error))
    // Error: there was an error!
    // at asyncFn (<anonymous>:2:11)
    // at <anonymous>:5:1
    // Promise {<fulfilled>: undefined}

// Await

// const asyncFn = async () =>{
//     await Promise
// }

// asyncFn();

// Ожидание рузультата await 

// const timerPromise = () => 
//     new Promise((resolve, reject) =>
//         setTimeout(() => resolve(), 2000));

// const asyncFn = async () =>{
//     console.log("Timer start");
//     await timerPromise();
//     console.log("Timer ended"); 
// }

// asyncFn();

// Продлжение

// const timerPromise = () => 
//     new Promise((resolve, reject) =>
//         setTimeout(() => resolve(), 2000));

// const asyncFn = async () =>{
//     console.log("Timer start");
//     const startTime = performance.now();
//     await timerPromise();
//     const endTime = performance.now();
//     console.log("Timer ended", endTime - startTime); 
// }

// asyncFn(); // Timer start
              // Promise {<pending>}
              // Timer ended 2401

// Переход с промисов на async/await

const getData = async (url) =>{
    const res = await fetch(url);
    const json = await res.json();
    return json;
}

const url = "https://jsonplaceholder.typicode.com/todos";
// const data = await getData(url); // Если интернет отключен, то мы получим Uncaught TypeError: Failed to fetchat getData (<anonymous>:2:23)at <anonymous>

// Решение проблемы try catch

try{
    const data = await getData(url);
    console.log(data);
}catch(error){
    console.log(error);
}