// const panelText = document.querySelector('.panel').innerText;
// console.log(panelText);
//  document.querySelector('.panel').innerText = 'New text';
//  document.querySelector('.input').value='enter';

// document.querySelector('.button')?.addEventListener('click', function(){
//     const input = document.querySelector('.input').value;
//     if (!input) {
//         return;
//     }
//     document.querySelector('.panel').innerText = input;
//     document.querySelector('.input').value = '';
// });

// console.log(document.body);
// console.log(document.body.parentElement);
// console.log(document.previousSibling);
// console.log(document.body.nextElementSibling);
// console.log(document.body.children);

// навигация по DOM-дереву

// document.querySelector('.button')?.addEventListener('click', function(e) {
//     console.log(e);

// });

// const wrapperElement = document.querySelector('.wrapper');
// console.log(' wrapperElement:', wrapperElement);

// const listElement = wrapperElement?.querySelector('.li');
// console.log('listElement:', listElement);

// console.dir(document.querySelector('.button'));

// console.log(document.querySelectorAll('.one')[1].innerText);
// console.log(document.querySelectorAll('.one'));
///////////////////////////////////////////////////

// localStorage.setItem('token', 'sdfg');
// console.log(localStorage.getItem('token'));
// const t1 = localStorage.getItem('token');
// console.log(typeof t1);
// localStorage.clear;

/////////////////////////////////////////////////
// const obj = JSON.parse('{"a": 1}');
// console.log(obj);
// console.log(obj.a);
// const str = JSON.stringify(obj);
// console.log(str);

// type User = {
//   name:string,
//   age:number,
//   isActive:boolean,
//   email?:string
// };

// const user:User = {
//   name: "Alice",
//   age: 25,
//   isActive: true,
// };
// console.log(user);

// const user1 = JSON.stringify(user);
// console.log(user1);

/////////////////////////////////////////////////////////  DOM
// const title = document.querySelector('h1');

// // // Изменить текст
// // title.textContent = 'Новый заголовок';

// Изменить HTML (можно вставить теги)
// title.innerHTML = 'Заголовок с <span>акцентом</span>';

///////////////////////////////////////////////////////////   создание элемента
// let div = document.createElement('div');                                            //Сначала создаётся пустой элемент <div>.
// div.className = "alert";
// div.innerHTML = "<strong>Всем привет!</strong> Вы прочитали важное сообщение.";
// document.body.append(div);
// Ему присваивается класс alert.
// Внутри элемента формируется HTML-содержимое с полужирным текстом.
// Элемент добавляется в конец тела документа, что делает его видимым на странице.

/////////////////////////////////////////////
// меняем атрибуты через методы объекта
// > Инкапсулируем работу с DOM в объект с методами.

// TODO: метод setTitle(text: string) — меняет текст заголовка
// TODO: метод setDescription(text: string) — меняет текст описания
// TODO: метод highlight() — добавляет класс "highlighted"
// TODO: метод reset() — убирает класс "highlighted", сбрасывает тексты

// const card = {
//   el: document.getElementById("card")!,
//   titleEl: document.getElementById("card-title")!,
//   descEl: document.getElementById("card-desc")!
// };

////////////////////////////////////////   блоки функций -is  -has

// function isEmpty(string): boolean{
//   if (string.lenght === 0) { return true };
//   return false;
// }
// console.log(isEmpty('lk;'));

// function isNegative(number): boolean {
//   if (number < 0) { return true };
//   return false;
// }
// console.log(isNegative(89));

// function isEven(number): boolean{
//   if (number % 2 === 0) { return true };
//   return false;
// }
// console.log(isEven(9));

// function isLong(string): boolean{
//   if (string.lenght > 100) { return true };
//   return false;
// }
// console.log(isLong('sdfggggg'));

//////////////////////// проверка наличия текс. содержимого в элементе

// function hasText(element: HTMLElement): boolean {
//   const textContent = element.textContent;
//   return textContent !== null && textContent.trim() !== '';
// }

// const button = document.querySelector('.btn') as HTMLElement;
// console.log(hasText(button)); // true или false

/////////////////////////////////////////////////     проверка наличия атрибута у элемента
// function hasAttribute(element:HTMLElement, attribute:string) {// через функцию
//   if (element.hasAttribute(attribute)) {
//     return true;
//     return false;
//   }
// }
// const elem = document.querySelector('#btn');
// console.log(hasAttribute(elem, 'class'));

// console.log(elem?.hasAttribute('class'));//есть специальный метод

// console.log(document.querySelector('#btn')?.hasAttribute('class'));

////////////////////////////////////////////////
// console.log(document.querySelector('#btn')?.hasAttribute('class'));// или так

//////////////////////////////////////////////  проверяем что элемент не содержит данный класс
// function isVisible(element:HTMLElement) {
//   if (!element.classList.contains('hidden')) {
//     return true;
//   }
// };
// const elem = document.querySelector('#btn');
// console.log(isVisible(elem));

///////////////////////////////////////////////// проверяем отмечен ли чекбокс
// function isChecked(element:HTMLInputElement):boolean {
//    return element.checked
// }
// const input = document.querySelector('.input');
// console.log(isChecked(input));

/////////////////////////////////////////////
// function hasError(element:HTMLElement) {
//   if (element.classList.contains('panel')) {
//     return true;
//   }
//   return false;

// };
// const elem = document.querySelector('#btn');
// console.log(hasError(elem));

/////////////////////////////////////////////    проверяем задизейблена ли кнопка
// function isDisabled(button: HTMLButtonElement) {
//   return button.disabled;// disable - это св-во, уже имеет тип boolean, if можно не писать
// }
// const but = document.querySelector('.btn');
// console.log(isDisabled(but));

//////////////////////////////////////////////
// function getLanght(str:string): number{
//   if (str ==='') {
//     return 0;
//   }
//   return str.length;
// }

/////////////////////////////////////////
// function getFirstShar(str:string) {
//   if (str === "") {
//     return 0;
//   }
//   return str.charAt(0);
// }
// console.log(getFirstShar(""));

//////////////////////////////////////
// function getTextOf(selector:string) {
//   const el = document.querySelector(selector);
//   if (!el) {
//     return 'не найдено';
//   }
//   return (el.textContent ?? '');
// }
// console.log(getTextOf('.input'));

//////////////////////////////////////////////
// function getValueOf(selector:string) {
//   const b = document.querySelector(selector);
//   if (!b || !(b instanceof HTMLInputElement)) {
//     return null;
//   }
//   return b.value ?? '';
// }
// console.log(getValueOf('.input'));

///////////////////////////////////////////
// function findById(id:string):HTMLElement|null{
//  return  document.getElementById(id);
// }
// console.log(findById('card'));

/////////////////////////////////////////////
// function setText(selector: string, text: string): void {
//   const element = document.querySelector(selector);
//   if (!element) { return };
//   element.textContent = text;
// }
// setText('.btn', 'sdg');

//////////////////////////////////////////
//  function setValue(selector:string): string{
//   const element = document.querySelector(selector);
//    if (!element) { return };
//   const input = element as HTMLInputElement;
//   return input.value ?? '';
// }
// console.log(getValueOf('.input'));

/////////////////////////////////////////////////////////////////////// добавляем класс к элементу
// function hideElement(selector: string) {
//   const element = document.querySelector(selector);
//   if (!element) return ;
//   element.classList.add('hidden');
// }
// hideElement('#card');

///////////////////////////////////////////////////////// удаляем класс из элемента
// function showElement(selector:string) {
//    const element = document.querySelector(selector);
//   if (!element) return ;
//   element.classList.remove('hidden');
// }
// showElement('#card');

////////////////////////////////////////////////////// добавили класс
// function setActive(selector, isActive) {
//     const element = document.querySelector(selector);
//     if (!element) return;
//     element.classList.toggle('active', isActive);
// }
// setActive('.btn', true);

////////////////////////////////////////////////// прибавляем число к текущему тексту
// function updateCounter(selector:string, number:number) {
//   const element = document.querySelector(selector);
//   if (!element) { return 'no' };
//   const count = +(element.textContent);
//   const count1 = count + number;
//   element.textContent = count1;
// }
// updateCounter('.panel', 34);

//////////////////////////////////////////////    добавили атрибут в элемент
// function setAttribute(selector:string, name: string, value: string) {
//   const el = document.querySelector(selector);
//   el?.setAttribute(name, value);
// }
// setAttribute('.panel', 'hidden', 'display:non');

/////////////////////////////////////////////// меняем текст и восстанавливаем видимость
// function showMessage(selector:string, message: string) {
//   const elem = document.querySelector(selector);
//   if (!elem) return;
//   elem.textContent = message;
//   elem.classList.remove('hidden');
// }
// showMessage('.panel', 'dssss');

////////////////////////////////////////////
// function removeSpace(text:string) {
//   if (text.length === 0) return 'нет строки';
//   return text.trim();
// }
// console.log(removeSpace(''));

///////////////////////////////////////////
// function calculatePrice(price:number, sale: number):number {
//   if (price <= 0) { return 0; }
//   if (sale < 0 || sale > 100) {
//     return price;
//   }
//  return price * (1 - sale / 100);
// }
// console.log(calculatePrice(100,50));

////////////////////////////////////////
// function addClass(selector:string, className:string) {
//   const element = document.querySelector(selector);
//   if (!element) return;
//   element.classList.add(className);
// }
// addClass('#notification', 'stiky');

////////////////////////////////////
// function removeClass(selector:string, className:string) {
//   const element = document.querySelector(selector);
//   if (!element) return;
//   element.classList.remove(className);
// }
// removeClass('#notification', 'stiky');

///////////////////////////////////// вычисляем площадь прямоугольника

// function calculateSquare(opts: { width: number, height:number}) {
//   if (opts.height <= 0 || opts.width <= 0) {
//     return 0;
//   }
//   return opts.height * opts.width;
// }

// console.log(calculateSquare({width:9, height:8}));

////////////////////////////////////////
// function addSuffix(text:string, suffix:string) {
//   if (!text || !suffix) return;
//   return text + suffix;
// }
// console.log(addSuffix('sdf', 'jk'));

/////////////////////////////////////// удаляем все дочерние узлы элемента
// function removeElement(selector:string) {
//   const el = document.querySelector(selector);
//   if (!el) return;
//    el.innerHTML = '';
// }
// console.log(removeElement('.one'));

// ///////////////////////////////////////
// function calculatePrice(opts:{price:number, quantity: number, tax: number}) {
//   if (opts.price <= 0 || opts.quantity <= 0) return 0;
//   return opts.price * opts.quantity * (1 + opts.tax);
// }
// console.log(calculatePrice({ price: 23, quantity: 2, tax: 0.14 }));

// /////////////////////////////////////добавляем класс и меняем текст
// function addClass(selector:string, opts:{text: string, className: string}) {
//   const elem = document.querySelector(selector);
//   if (!elem) return;
//   elem.textContent = opts.text;
//   elem.classList.add(opts.className);
// }
// console.log(addClass('.btn', {text:'hello',className: 'text'}));

////////////////////////////////////////// пустая ли строка
// function checkLength(str: string): boolean {
//  return str.length === 0;
// }
// console.log(checkLength('asd'));

// ////////////////////////////////////////проверка валидности эмейла
// function validateEmail(email:string) {
//   return email.includes('@') && email.includes('.');
// }
// console.log(validateEmail('medoshina@ya.ru'));

//////////////////////////////////////// переключаем класс
// function toggleClass(selector:string, className:string) {
//   const element = document.querySelector(selector);
//   if (!element) return false;
//   element.classList.toggle(className);
//   return element.classList.contains(className);
// }
// console.log(toggleClass('#btn', 'primary'));

/////////////////////////////////////// проверка что элемент существует
// function checkElement(selector:string):boolean {
//   return document.querySelector(selector) !== null;
// }
// console.log(checkElement('.one'));

///////////////////////////////////// проверяем длину строки через две переменные
// function validateStrLenght(str:string, lenghtMin:number) {
//   const isNotEmpty = str.length > 0;
//   const lenght = str.length >= lenghtMin;
//   return isNotEmpty && lenght ;
// }
// console.log(validateStrLenght('asjkl', 2));

/////////////////////////////////// переключает класс hidden. Возвращает true если элемент стал видимым (класс убран), false если скрыт или не найден.
// function toggleClass(selector:string) {
//   const element = document.querySelector(selector);
//   if (!element) return false;
//   element.classList.toggle('hidden');
//   return !element.classList.contains('hidden');
// }
// console.log(toggleClass('#card'));

////////////////////////////////////
// function checkClassList(selector: string, className: string) {
//   const el = document.querySelector(selector);
//   if (!el) return false;
//   return el && el.classList.contains(className);
// }
// console.log(checkClassList('#btn', 'primary'));

///////////////////////////////// true если строка не пустая и длина в диапазоне от minLength до maxLength
// function validateString(opts:{value:string, minLength: number, maxLength: number}) {
//     const isNotEmpty = opts.value.length > 0;
//     const isAtLeastMinLength = opts.value.length >= opts.minLength;
//     const isAtMostMaxLength = opts.value.length <= opts.maxLength;
//     return isNotEmpty && isAtLeastMinLength && isAtMostMaxLength;
// }

// console.log(validateString({value:'sdfg',minLength: 4,maxLength: 9}));

///////////////////////////////////////////
// function checkClassList(selector:string) {
//   const elem = document.querySelector(selector);
//   if (!elem) return false;
//   return elem && !elem.classList.contains('hidden');
// }
// console.log(checkClassList('.btn'));

// ////////////////////////////////////////////
// function validateEmail(opts: { email: string, password: string, confirmPassword: string }) {
//   const hasEmail = opts.email.includes('@');
//   const hasPassword = opts.password.length > 7;
//   const isConfirmPassword = opts.password === opts.confirmPassword;
//   return hasEmail && hasPassword && isConfirmPassword;
// }
// console.log(validateEmail({ email: 'sdfg@dfg', password: '34566666', confirmPassword: '34566666' }));

// /////////////////////////////////////////////////////
// Напишите функцию bankAccount которая возвращает объект с методами.
// В объекте должны быть реализованы методы deposit, withdraw и getBalance
// Начальный баланс 0.
// Баланс должен быть определен на уровне функции, чтобы реализовать замыкание.
// function bankAccount() {
//   let balance = 0;
//   return {
//     deposit: function (amount: number) {
//       if (amount <= 0) {
//         throw new Error('Сумма для пополнения должна быть положительной ');
//       }
//       balance += amount;
//       return `Пополнение на ${amount}. Текущий баланс: ${balance}`;
//     },

//     withdraw: function (amount: number) {
//       if (amount <= 0) {
//         throw new Error('сумма для снятия должна быть положительной');
//       }
//       if (amount > balance) {
//         throw new Error('Недостаточно средств на счете');
//       }
//       balance -= amount;
//       return `Снятие ${amount}. Текущий баланс: ${balance}`;
//     },
//     getBalance: function () {
//       return balance;
//     }
//   };
// }

// const myAccount = bankAccount();
// console.log(myAccount.getBalance());

// console.log(myAccount.deposit(100));
// console.log(myAccount.withdraw(60));

//////////////////////////////////////////////////////////////
// function createCounter(): () => number {
//   let count = 1;
//   return () => {
//     return count++;
//   };
// }

// const counter = createCounter();
// console.log(counter()); // 0
// console.log(counter()); // 1
// console.log(counter()); // 2



