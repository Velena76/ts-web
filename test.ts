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

// const user2 = `name:${user.name}, age:${user.age}, isActive:${user.isActive}, email:${'alisa@.ru'}`;
// console.log(user2);
//////////////////////////////// доступ к свойствам объекта
// interface Product {
//     title:string,
//     price: number,
//     inStock: boolean
// };

// const product:Product = {
//   title: "Laptop",
//   price: 999,
//   inStock: true,
// };

// console.log(product.title);//Laptop

// const key = "price";
// console.log(product[key]);//999

// product.inStock = false;
// console.log(product.inStock);//false

// /////////////////////////////////////оператор опциональной цепочки
// type Config = {
//   theme?: {
//     color?: string;
//   };
// };

// const config: Config = {
//     theme: {

//     }
// };
// console.log(config.theme?.color);//undefined

// const color='' ; // ...
// console.log(color); // undefined — не ошибка

// // TODO: безопасно получи city, если нет — верни "Неизвестно" через ??
// type User = { address?: { city?: string } };
// const u: User = { address: {} };

// // const city = u.address?.city;
// // console.log(city);//undefined

// const city = u.address?.city??'неизвестно';
// console.log(city);//неизвестно

////////////////////////////////////////// оператор нулевого слияния

// const settings = {
//   fontSize: 0,
//   username: "",
//   theme: null,
// };

// const fontSize = settings.fontSize || 16;
// console.log(fontSize);//16

// const theme = settings.theme ?? 'light';
// console.log(theme);//light
//////////////////////////////////////

// const stats = {
//   clicks: 42,
//   views: 1200,
//   likes: 88,
// };

// const ul = document.querySelector("ul");

// Object.entries(stats).forEach(([key, value]) => {
//     const li = document.createElement("li");
//     li.textContent = `${key}: ${value}`;
//     ul?.appendChild(li);
// });

/////////////////////////// деструктуризация объекта и свойства
// const order = {
//   id: 101,
//   customer: "Ivan",
//   total: 4500,
//   paid: false,
// };

// const {id, customer, total } = order;//деструкт-я об-та
// console.log(total);//4500

// const {paid:isPaid} = order;//деструкт-я св-ва об-та
// console.log(isPaid);//false

////////////////////////////////////////////////////////
// type Profile = {
//  itName: string;
//   bio?: string;
//   followers?: number;
// };

// const profile: Profile = { itName: "Maria" };

// // TODO: деструктурируй name, bio (дефолт: "Нет описания"), followers (дефолт: 0)
// const {itName, bio='нет описания',followers = 0 } = profile;
// console.log(itName,bio, followers);

/////////////////////////////////////////////////// копиров-е об-в
// const original = {
//   x: 1,
//   y: 2,
//   label: "point"
//    };

// // TODO: создай копию объекта через spread
// // TODO: измени label в копии на "copy"
// // TODO: убедись что original.label не изменился
// const copy = {...original};
// console.log(copy);
// console.log(original);

// copy.label='copy';
// console.log(copy);
// console.log(original);

/////////////////////////////////////////////// слияние об-в
// const defaults = { color: "blue", size: "M", visible: true };
// const overrides = { color: "red", size: "XL" };

// // TODO: слей defaults и overrides в один объект
// // TODO: какой color и size будет в результате?

// const merged ={...defaults,...overrides}; //
// console.log(merged);//color: "red", size: "XL",visible: true// при одинаковых свойствах побеждает второй вар-т

// TODO: создай обновлённый объект не мутируя base
// const base = { role: "user", active: true, score: 0 };
// const update = { active: false, score: 100 };
// const newBase = {...update, ...base};
// console.log(newBase);
// console.log(base);

//////////////////////////////////////////// DOM
// const btn = document.getElementById("btn")!;
// console.log(btn);

// console.log("id:", btn.id);
// console.log("className:", btn.className);
// console.log("textContent:", btn.textContent);

// btn.textContent = 'нажми меня';

// TODO: прочитай и выведи в консоль: id, className, textContent
// TODO: измени textContent на "Нажми меня"

// ////////////////////////////////////////////////////////   DOM
// type Card = {
//   title: string;
//   description: string;
//   color: string;
// };

// const cards: Card[] = [
//   { title: "TypeScript", description: "Типизированный JS", color: "#3178c6" },
//   { title: "React", description: "UI библиотека", color: "#61dafb" },
//   { title: "Node.js", description: "JS на сервере", color: "#68a063" },
// ];

// // Проходим по массиву карточек и для каждой создаём элемент
// cards.forEach(card => {
//   // Создаём контейнер для карточки
//   const cardElement = document.createElement('div');

//   // Устанавливаем стили
//   cardElement.style.backgroundColor = card.color;
//   cardElement.style.padding = '20px';
//   cardElement.style.margin = '10px';
//   cardElement.style.borderRadius = '8px';
//   cardElement.style.color = 'white'; // Цвет текста — белый для лучшей читаемости
//   cardElement.style.fontFamily = 'Arial, sans-serif';

//   // Создаём элемент для заголовка
//   const titleElement = document.createElement('h3');
//   titleElement.textContent = card.title;
//   titleElement.style.marginBottom = '10px';
//   titleElement.style.fontSize = '18px';

//   // Создаём элемент для описания
//   const descriptionElement = document.createElement('p');
//   descriptionElement.textContent = card.description;
//   descriptionElement.style.fontSize = '14px';
//   descriptionElement.style.margin = '0';

//   // Добавляем заголовок и описание в контейнер карточки
//   cardElement.appendChild(titleElement);
//   cardElement.appendChild(descriptionElement);

//   // Добавляем карточку в тело документа
//   document.body.appendChild(cardElement);
// });

// на странице появятся 3 цветные карточки
//  код, который создаёт div для каждой карточки, устанавливает фон и добавляет элементы в document.body
///////////////////////////////////////////////////  DOM
// создаем новый элемент на странице
// const div = document.createElement("div");
// div.textContent = "Hello";
// div.className = "card";
// document.body.appendChild(div);
// // или современный вариант:
// document.body.append(div); // принимает несколько аргументов и строки

////////////////////////////////////////////////////   DOM
// TODO: используй this чтобы изменить текст нажатой кнопки на "Нажато!"
//                                                // TODO: добавь класс "active" через this
// const buttons = document.querySelectorAll(".btn");
// buttons.forEach(function(btn) {
//   btn.addEventListener("click", function() {
//     this.textContent = "Нажато!";
//     this.classList.add("active");
//   });
// });
// Почему здесь нельзя использовать стрелочную функцию?
// контекст this определяется в момент вызова,   в стрелочной ф-ии он не имеет собственного контекста
///////////////////////////////////////////////////
// TODO: опиши тип Product с полями: id (number), name (string), price (number), inStock (boolean)
// type Product = {
//   id:number,
//   name:string,
//   price:number,
//   inStock:boolean
// };

//                                    // TODO: создай объект этого типа
// const laptop: Product = {
//     id:345,
//   name:'acer',
//   price:25000,
//   inStock:false
// };

////////////////////////////////////////
// TODO: безопасно выведи author через ?.
// TODO: создай две статьи — одну с автором, одну без
// type Article = {
//   title: string;
//   content: string;
//   author?: string;
//   publishedAt?: Date;
// };

// const article1: Article = {
//     title: 'Массивы и кртежи',
//   content: 'Типизация массивов',
//   author: 'Максим Габов',
//   publishedAt:new Date ('2025-01-23'),
// };

// const article2: Article = {
//     title: 'Тест-дизайн',
//   content: 'Практическое руководство для начинающих',
//   publishedAt:new Date ('2023-12-24'),
// };

// console.log ('Автор:', article1.author);

// const author1=article2?.author??'Автор не указан';
// console.log(author1);//Автор не указан

/////////////////////////////////////////
// TODO: измени label — это должно работать
// TODO: попробуй изменить x — что скажет TypeScript?
// type Point = {
//   readonly x: number;
//   readonly y: number;
//   label: string;
// };

// const p: Point = { x: 10, y: 20, label: "A" };

// p.x = 5;
// p.label = "B";
// console.log(p);
///////////////////////////////////////
// TODO: создай объект Person с вложенным Address
// TODO: деструктурируй city из address одной строкой

// type Address = {
//   city: string;
//   street: string;
//   zip?: string;
// };

// type Person = {
//   name: string;
//   age: number;
//   address: Address;
// };

// const person: Person = {
//      name: 'Max',
//      age: 23,
//      address:{
//         city: 'Paris',
//         street: 'Champs-Elysees',
//         zip: 'jklhh',
//      },
// };
// const {city:city1} = person.address;
// console.log(city1);//Paris

// const {city} = person.address;// если константа будет одноименная с извлекаемым свойством

/////////////////////////////////////
// Подсказка: (box.style as any)[key] = value
// TODO: примени все стили из объекта к box через Object.entries
// const box = document.querySelector(".box")!;
// console.log(box);

// const styles = {
//   backgroundColor: "coral",
//   width: "200px",
//   height: "200px",
//   borderRadius: "8px",
// };

// Object.entries(styles).forEach(([property, value]) => {
//   box.style[property] = value;
// });

////////////////////////////////
// TODO: создай новый объект где все цены увеличены на 10%
//                          // Подсказка: Object.fromEntries(Object.entries(...).map(...))
// const prices = { apple: 100, banana: 50, cherry: 200 };
// const newPrices = Object.fromEntries(
//   Object.entries(prices).map(([key, value]) => [
//     key,
//     value*1.1 // увеличение на 10 %
//   ])
// );

// console.log(newPrices);

//////////////////////////////////
// TODO: создай новый объект только с товарами у которых количество > 0
// const inventory = { apples: 10, bananas: 0, cherries: 5, dates: 0 };

// const newInventory = Object.fromEntries(
//   Object.entries(inventory).filter(([key,value]) => value>0 )
// );
// console.log(newInventory);

//////////////////////////////////
// TODO: проверь есть ли поле "port" через Object.keys
// TODO: выведи количество полей в объекте
// const config = {
//   host: "localhost",
//   port: 3000,
//   debug: true,
//   version: "1.0.0",
// };

// console.log(Object.keys(config).length);//4

// const hasPort = Object.keys(config).includes('port');
// console.log(hasPort);//true

/////////////////////////////////////
// TODO: найди средний балл
// TODO: найди максимальный балл через Object.values и Math.max
// const scores: Record<string, number> = {
//   Alice: 95,
//   Bob: 78,
//   Carol: 88,
//   Dave: 91,
// };

// const max = Math.max(...Object.values(scores));
//  console.log(max);//95

//  const average = Object.values(scores).reduce((a, b) => a + b, 0) / Object.keys(scores).length;
// console.log(average); // 88

//////////////////////////////////   Record
// TODO: создай объект типа Record<string, Status> с 3 пользователями
// TODO: напиши функцию getStatus(users: Record<string, Status>, name: string): Status | undefined
// type Status = "active" | "inactive" | "banned";

// const users: Record<string, Status> ={  //создаем об-т с тремя пользователями
//     Alice:'active',
//     Bob:'inactive',
//     Carol:'banned'
// };

// function getStatus(users: Record<string, Status>, name: string): Status | undefined {
//   return users[name];
// };                                   //ф-я для получения статуса пользователя

// console.log(getStatus(users,'Alice'));

/////////////////////////////////////
// TODO: создай функцию которая принимает массив задач [{name, priority}]
// и возвращает Record<Priority, string[]> — задачи сгруппированные по приоритету
// type Priority = "low" | "medium" | "high";

// type Task = {
//   name: string;
//   priority: Priority;
// };

// function groupTasksByPriority(tasks: Task[]): Record<Priority, string[]> {
//   // Инициализируем результат с пустыми массивами для каждого приоритета
//   const result: Record<Priority, string[]> = {
//     low: [],
//     medium: [],
//     high: []
//   };

//   // Проходим по всем задачам и добавляем их в соответствующую группу
//   tasks.forEach(task => {
//     result[task.priority].push(task.name);
//   });

//   return result;
// };
// // Тестовые данные
// const tasks: Task[] = [
//   { name: "Сделать презентацию", priority: "high" },
//   { name: "Ответить на письма", priority: "medium" },
//   { name: "Полить цветы", priority: "low" },
//   { name: "Подготовить отчёт", priority: "high" },
//   { name: "Проверить код", priority: "medium" },
//   { name: "Заказать канцелярию", priority: "low" }
// ];

// // Вызов функции
// const groupedTasks = groupTasksByPriority(tasks);

// console.log(groupedTasks);

/////////////////////////////////////    HTML
// HTML: <input id="name" /><input id="email" /><button id="submit">
// TODO: по клику на кнопку собери значения инпутов в объект { name: "...", email: "..." }
// const fields = ["name", "email"] as const;

// document.getElementById("submit")!.addEventListener("click", () => {
//   const data: Record<string, string> = {};
//   // TODO: ...
// });

//   Ничего не понятно! Разобраться!

///////////////////////////////////
// const a = { x: 1 };
// const b = { x: 1 };
// const c = a;

//                            // TODO: что выведет каждый console.log и почему?
// console.log(a === b); // false, a и b ссылаются на разные об-ты
// console.log(a === c); // true, a и c ссылаются на один и тот же объ-т
// console.log(JSON.stringify(a) === JSON.stringify(b)); // true, полученные строки будут равны

/////////////////////////////////
// TODO: скопируй через spread — измени address.city в копии
// TODO: проверь изменился ли original.address.city (спойлер: да)
// TODO: теперь скопируй через structuredClone — повтори эксперимент
// const original = {
//   name: "Alice",
//   address: { city: "Moscow", zip: "101000" },
// };

// // const original1 = {...original};
// // original1.address.city = 'Paris';// изменилось в обоих об-х, т.к. address-ссылка на вложенный об-т а он не скопировался

// const original2 = structuredClone(original);// глубокое копирование

// // console.log(original2);

// original2.address.city= 'Rim';
// console.log(original2);
// console.log(original);

///////////////////////////////////// динамические ключи
// TODO: установи значение по динамическому ключу
// function setValue(obj: Record<string, unknown>, key: string, value: unknown) {
//   obj[key] = value;              //ф-я выполняет присваивание
// };

// const data: Record<string, unknown> = {};
// setValue(data, "username", "Bob");
// setValue(data, "age", 30);
// console.log(data); // { username: "Bob", age: 30 }
// каждый раз вызов ф-ии доб-т новое свойство об-ту

///////////////////////////////////
// TODO: используй "radius" in shape для проверки типа
// TODO: вычисли площадь для каждого случая
// type Shape =
//   | { kind: "circle"; radius: number }
//   | { kind: "rect"; width: number; height: number };

// function area(shape: Shape): number {
//   if('radius'in shape){
//     return Math.PI*shape.radius**2;
//   }else{
//     return shape.width*shape.height;
//   }
// };

// const circle:Shape = {kind:'circle', radius:5};
// const rectangle:Shape = {kind:'rect', width:2, height:6};

// console.log(area(circle));
// console.log(area(rectangle));

// ///////////////////////////////////
//                                    // Тестирование работы калькулятора
// const calculator = {
//   value: 0,

//   add(n: number): void {
//     this.value += n;
//   },

//   reset(): void {
//     this.value = 0;
//   },

//   getValue(): number {
//     return this.value;
//   }
// };

// calculator.add(5);
// calculator.add(3);
// console.log(calculator.getValue()); // 8
// calculator.reset();
// console.log(calculator.getValue()); // 0

////////////////////////////////////////////
// TODO: добавь метод greet() — возвращает "Привет, меня зовут Ivan Petrov, мне 28 лет"
// TODO: добавь метод getFullName() — возвращает "Ivan Petrov"
// const user = {
//   firstName: "Ivan",
//   lastName: "Petrov",
//   age: 28,
//   getFullname(){
//     return`${this.firstName} ${this.lastName}`;
//   },
//   greet(){
//     return`Привет, меня зовут ${this.getFullname()} , мне ${this.age} лет.`;
//   }
// };

// console.log(user.greet());

////////////////////////////////////////////
// TODO: запусти setInterval каждую секунду
// Попробуй сначала обычную функцию — this.seconds сломается
// Потом замени на стрелочную — починится
// const timer = {
//   seconds: 0,
//   start() {
//     setInterval(()=> {
//       this.seconds++; // Что здесь this?
//       console.log(this.seconds);
//     }, 1000);
//   },
// };

// timer.start();

/////////////////////////////////////////
// TODO: вызови logger.log напрямую — работает
// TODO: сохрани в переменную и вызови — this.prefix будет undefined
// TODO: исправь через .bind()
// const logger = {
//   prefix: "[LOG]",
//   log(message: string) {
//     console.log(`${this.prefix} ${message}`);
//   },
// };

// logger.log('test');//прямой вызов

// const logFn = logger.log.bind(logger);//ч-з bind, указывает что this = logger
// logFn("test");     //

////////////////////////////////////////
//                                             // TODO: используй this чтобы изменить текст нажатой кнопки на "Нажато!"
//                                            // TODO: добавь класс "active" через this
//                                            // Почему здесь нельзя использовать стрелочную функцию?
// const buttons = document.querySelectorAll(".btn");
// buttons.forEach(function(btn) {
//   btn.addEventListener("click", function() {
//     this.textContent = "Нажато!";
//     this.classList.add("active");
//   });
// });
// стрелочная функция не имеет собственного контекста вызова, использует глобальный

////////////////////////////////////////////////////////// Геттер через метод
// > Метод может вычислять значение на лету вместо хранения его в поле.
// TODO: реализуй объект cart
// getTotal — сумма price*qty по всем items
// getCount — общее количество товаров
// getSummary — "3 товара на 1500 руб"
// type Cart = {
//   items: { name: string; price: number; qty: number }[];//задаем контракт для объекта корзины покупок
//   getTotal(): number;//
//   getCount(): number;//методы - геттеры
//   getSummary(): string;//
// };

// const cart: Cart = {
//   items: [],
//   getTotal(): number {
//     return this.items.reduce((total, item) => total + item.price * item.qty,0 );
//   },
//   getCount(): number {
//     return this.items.reduce((count, item) => count + item.qty, 0);
//   },
//   getSummary(): string {
//     const total = this.getTotal();
//     const count = this.getCount();
//     return `${count} товаров на  ${total} руб`;
//   }
// };

// cart.items = [                                //добавляем товар в корзину
//    { name: 'apple', price: 50, qty: 2},
//    { name: 'banana', price:100, qty:1 },
//    { name: 'orange', price: 300, qty:4 }
// ];

// console.log(cart.getTotal());//1400
// console.log(cart.getCount());//7
// console.log(cart.getSummary());//7 товаров на 1400

// значения не хр-ся в полях, а вычисл-ся при вызове метода
// всегда актуальный результат, даже если items изменился
// можн добавить новые методы- геттеры без изменения стр-ры данных

/////////////////////////////////////////////// стеки
////////////////////////////// методы могут менять состояние, мутировать об-т
// TODO: реализуй стек
// type Stack<T> = {
//   items: T[];
//   push(item: T): void;
//   pop(): T | undefined;
//   peek(): T | undefined;
//   isEmpty(): boolean;
//   size(): number;
// };

// const obj: Stack<number> = {
//   items: [],

//   push(item: number): void {
//     this.items.push(item);
//   },

//   pop(): number | undefined {
//     return this.items.pop();
//   },

//   peek(): number | undefined {
//     if (this.items.length === 0) {
//       return undefined;
//     }
//     return this.items[this.items.length - 1];
//   },

//   isEmpty(): boolean {
//     return this.items.length === 0;
//   },

//   size(): number {
//     return this.items.length;
//   }
// };

// obj.push(1);
// obj.push(2);
// obj.push(3);
// console.log(obj.pop()); // 3
// console.log(obj.peek()); // 2
// console.log(obj.size()); // 2

////////////////////////////////////////// closure
// Приватные данные через замыкание
// > Если данные в объекте — их можно изменить снаружи. Замыкание скрывает данные.

// TODO: реализуй функцию createCounter(initial: number)
// Возвращает объект с методами: increment(), decrement(), reset(), getValue()
// Само значение count НЕ должно быть доступно снаружи напрямую
// function createCounter (initial:number){
//     let count = initial;
//     return {
//         increment() {
//             count++;
//             return this;
//         },
//         decrement() {
//             count--;
//             return this;
//         },
//         reset() {
//             count = initial;
//             return this;
//         },
//         getValue() {
//             return count;
//         }
//     };
// };
// const counter = createCounter(10);
// counter.increment();
// counter.increment();
// console.log(counter.getValue()); // 12

// console.log(counter.count);//undefined т.к об-т, возвращаемый ф-й , не содержит св-ва count

///////////////////////////////////////////
// function getAbsoluteValue(num:number) {
//    if (num < 0) {
//       return num *-1;
//    }
//    return num;
// }
// console.log(getAbsoluteValue(-9));

///////////////////////////////////////
// function getReverseNumber(number:number) {
//    return number.toString().split("").reverse().join("");
// }
// console.log(getReverseNumber(23456));

// /////////////////////////////////////
// function isPalindrome(text: string) {
//    if (text === '') return;
//    return text === text.split("").reverse().join("");
// }
// console.log(isPalindrome('tot'));

///////////////////////////////// выстраивает буквы по алфавиту

// function alphabet_order(str:string) {
//    if (str === '') return;
//    return str.split('').sort().join('');
// }
// console.log(alphabet_order('sjlawj'));

//////////////////////////////////////////// находим самую длинную строку
// function findLongestWord(str) {
//     // Убираем лишние пробелы и разбиваем строку на слова
//     const words = str.trim().split(/\s+/);

//     if (words.length === 0 || words[0] === '') {
//         return ''; // Возвращаем пустую строку, если входных слов нет
//     }

//     let longestWord = words[0];

//     for (let i = 1; i < words.length; i++) {
//         if (words[i].length > longestWord.length) {
//             longestWord = words[i];
//         }
//     }

//     return longestWord;
// }

// // Пример использования:
// console.log(findLongestWord("Привет мир")); // "Привет"
// console.log(findLongestWord("JavaScript — это круто")); // "JavaScript"
// console.log(findLongestWord("  один   два  три   ")); // "один"

//////////////////////////////////////////////////////////////
function greet(name) {
  console.log(`Привет, ${name}!`);
}

function runCallback(cb) {
  cb('Алиса');
}

runCallback(greet); // Выводит на печать: Привет, Алиса!




