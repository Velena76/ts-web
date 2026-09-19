// ///////////////15.03
// // //`document` это объект как бы представляет структуру HTML
// // //?? не понятно почему '.btn'
// // const button = document.querySelector('.btn')


// import { count, log } from "console";

// // function handleClick(): void {
// //     console.log('click');

// // }
// // if (button !== null) {

// //     //?? непонятно как устанавливается функция обработчик
// //     //?? непонятно про target(цель события)
// //     // button.addEventListener('click', handleClick);
// //     button.addEventListener('click', (event: Event) => {
// //         console.log('click');
// //         console.log(event.target);
// //         console.dir(event.target);

// //     });

// // }


// ///////////16/03

// // const button = document.querySelector('.btn');
// // const buttonTwo = document.querySelector('.btnTwo');
// // function handleClick():void {
// //     console.log('click2');
// // }
// // if (button!==null && buttonTwo!==null) {
// //     button.addEventListener('click',handleClick);
// //     buttonTwo.addEventListener('click',handleClick);
// // }


// /////////////////
// //как подвесить слушателя на несколько элементов

// // const buttons = document.querySelectorAll('.btn');

// // function onClick(): void {
// //     console.log('clicked');
// // }

// // buttons.forEach(button => {
// //     button.addEventListener('click',onClick);
// // })
// ////////////////

// // const buttons = document.querySelectorAll('.btn');

// // type digit = '1' | '2'
// // type s = `_${digit}++`;

// // const str: s = `_1++`

// // ??? изучить indexed access
// // type twoArgFromAddEventListener = Parameters<Element['addEventListener']>[1];
// // type blaBla = twoArgFromAddEventListener;


// // // const onClick = (event: Event) => {
// // const onClick: EventListener = (event) =>
// //     // console.log(event.target!.dataset);
// //     console.log((event.target as any)!.dataset);
// // }

// // buttons.forEach(button => {
// //     button.addEventListener('click', onClick);
// // })

// // const firstDiv= document.querySelector('#first-level')
// // const secondDiv= document.querySelector('#second-level')
// // const thirdDiv= document.querySelector('#third-level')


// ////////////////////////////////////////////////17.03
// let count = 0;
// function external(){
//     count = count+1;
//     const innercount = count;
//     const externalVar = 'Я - внешняя функция';

//  return   function internal(){
//         const internalVar = 'Я - внутренняя функция';
//         console.log('internalVar >', internalVar);
//         console.log('innercount',innercount);
//     }
//     // internal();
// }
// external();
// const internal = external();
// console.log(external()());
// setTimeout(()=>{
//     console.log(internal());

// },5000)

// function extern() {
//     const externalVar = 'Я - внешняя функция';

//      function intern() {
//         const internalVar = 'Я - внутренняя функция';
//         console.log('internalVar >', internalVar);
//         console.log('externalVar >',externalVar );
//     }
//     return intern();
// }
// const internalFn =  extern();


// function createAdress(sample:string) {
//     const address = sample.toUpperCase();
//     return function (name:string) {
//         return `${address} ${name}`;
//     }
// }

// const addressGrazhdanin = createAdress('Гражданин');
// const addressGrazhdanca = createAdress('Гражданка');

// console.log(addressGrazhdanin('Василий'));
// console.log(addressGrazhdanca('Алeксандра'));



////////////////////////////////////////18.03
// const header = document.createElement('h1');
// header.textContent = 'DOM (Document Object Model)';
// console.log(header);
// const ul = `
// <ul>
// <li>один</li>
// <li>два</li>
// <li>три</li>
// </ul>
// // `;
// const img = document.createElement('img');
// img.src = 'https://picsum.photos/240';
// img.width = 240;
// img.classList.add('super');
// img.alt = 'Super Man';

// console.log(img);
/////////////////////////////////////////19/03
// let nameOne = 'vasily';
// let nameTwo = nameOne;
// nameOne = 'stas';
// console.log(nameOne);
// console.log(nameTwo);
// let age = 100;
// let ageTwo = 15;
// age = 25;
// console.log(age);
// console.log(ageTwo);

//копирование массивов
//
// const students = ['Ann', 'Jan','Mary', 'Pavel'];
// const group:string[] = students.concat();
// console.log(students);

// const group2:string[] = [...students];
// console.log(group2);

// const group3 = Array.from(students);
// console.log(group3);

////////////////////////// копирование объектов

// const person = {
// name: 'Peter',
// age: 30
// };

//  const person2 = Object.assign({}, person,{age: 26, height: 145} );// копия с измененным возрастом и добавили рост
// const person2 = Object.assign( person,{age: 26, height: 145} );// возраст поменялся и в исходном объекте
// console.log(person);
// console.log(person2);


// const person3 = {...person};
// console.log(person3);




///////////////////////////////////////20.03
//////////мтеоды массивов
// interface Peopl {name: string, year: number};
// interface Comments {text: string, id: number};

// const people: Peopl []=[
//     {name: 'Станислав', year: 2000},
//     {name: 'Василий', year: 1986},
//     {name: 'Александр', year: 1990},
//     {name: 'Владимир', year: 2009},
// ];

// const comments: Comments[] = [
//     {text: ' Отличный пост', id: 523423},
//     {text: ' Мне нравится', id: 823423},
//     {text: ' Продолжай в том же духе', id: 2039842},
//     {text: ' Все плохо', id: 123523},
//     {text: ' Нормально', id: 542328},
// ];

// const isSixteen = people.some(person => new Date().getFullYear() - person.year >= 16);// проверили, что хотя бы одному человеку исполнилось 16 лет
// console.log(isSixteen);


// const everySixteen = people.every(person => new Date().getFullYear() - person.year >= 16);//проверили, что каждому исполнилось 16 лет
// console.log(everySixteen);


// const commentId = comments.find(comment =>comment.id === 823423);// найти комментарий с номером id 823423
// console.log(commentId);


// const commentIndex = comments.findIndex(comment => comment.id === 123523);// находим индекс нужного коммента
// console.log(commentIndex);//3
// comments.splice(commentIndex,1);// удаляем элемент из массива
// console.log(comments);


/////////////////////////21/03
////////работа с массивами
// interface Presidents { first: string, last: string, born: number, died: number };

// const presidents: Presidents[] = [
//     { first: 'George', last: 'Washington', born: 1732, died: 1799 },
//     { first: 'John', last: 'Adams', born: 1735, died: 1826 },
//     { first: 'Ronald', last: 'Reagan', born: 1911, died: 2004 },
//     { first: 'Gerald', last: 'Ford', born: 1913, died: 2006 },
//     { first: 'Richard', last: 'Nixon', born: 1913, died: 1994 },
//     { first: 'Kohn F.', last: 'Kennedy', born: 1917, died: 1963 },
//     { first: 'Harry S.', last: 'Truman', born: 1884, died: 1972 },
//     { first: 'Grover', last: 'Cleveland', born: 1837, died: 1908 },
//     { first: 'Chester A.', last: 'Arthur', born: 1829, died: 1886 },
//     { first: 'Abraham', last: 'Lincoln', born: 1809, died: 1865 },
//     { first: 'Franklin', last: 'Pierce', born: 1804, died: 1869 },
//     { first: 'Lyndon B.', last: 'Johnson', born: 1908, died: 1973 },
//     { first: 'Dwight D.', last: 'Eisenhower', born: 1890, died: 1969 },
// ];


// const writers = ['Василий, Жуковский', 'Александр, Грибоедов', 'Александр, Пушкин', 'Владимир, Даль',
//     'Николай, Языков', 'Федор, Тютчев', 'Николай, Гоголь', 'Алексей, Кольцов', 'Александр, Герцен',
//     'Иван, Гончаров', 'Михаил, Лермонтов', 'Петр, Ершов', 'Алексей, Толстой', 'Даниил, Заточник',
//     'Александр, Радищев', 'Евгений, Баратынский', 'Петр, Вяземский', 'Александр, Бестужев-Марлинский', ',',
//     'Михаил, Загоскин', 'Сергей, Аксаков', 'Владимир, Одоевский', 'Григорий, Данилевский', ',',
//     'Алексей, Писемский', 'Дмитрий, Григорович', 'Яков, Полонский', 'Леонид, Андреев', ',',
//     'Валерий, Брюсов', 'Саша, Черный', 'Юрий, Трифонов', 'Федор, Абрамов', ',',
//     'Дмитрий, Кедрин', 'Василий, Шукшин'
// ];

// полиморфизм(полиморфное поведение) - ad hoc polymorphism
// + - имеет полиморфное поведение
// == и bool операции - не сторогое сравнение имеет также полиморфное поведение
// falsy?


// const born1700 = presidents.filter (p => p.born >= 1700 && p.born < 1800); //отфильтровать президентов, родившихся в 1700-х гг.
// console.log( born1700);


// const firstLast = presidents.map(president => // создали массив, содержащий только имена и фамилии президентов
//      `${president.first} ${president.last}`);
// console.log(firstLast);


// const oldest = presidents.sort((a, b) => {  //Отсортировываем по году рождения в порядке возрастания
//     if (a.born < b.born) return -1;         // В метод sort() передаётся стрелочная функция (a, b) => {...}. Параметры:a — первый элемент пары для сравнения;
//     if (a.born > b.born) return 1;         //b - второй эл. пары. Функция будет вызываться многократно.
//     return 0;                             //Если год рождения a меньше года рождения b ф-я возвращает -1(или любое отрицательное ч-ло) , значит a должен распологаться перед b в итоговом массиве.
// });
// console.log(oldest);
                                    

// const totalYearsOfLife: number = presidents.reduce(           //считает общее кол-во прожитых лет
//   (sum, president) => sum + (president.died - president.born),
//   0
// );
// console.log(totalYearsOfLife);


// const presidentSorted = presidents.sort((a,b)=> {   //отсортировать президентов по количеству прожитых лет
//     const aLived =  a.died - a.born;
//     const bLived = b.died - b.born;
//     if (aLived > bLived) return -1;
//     if (aLived < bLived) return 1;
//     return 0;
// });
// console.log(presidentSorted);


// const sortedWriters = writers.sort((a, b) => { // В sort передается ф-я корпаратор, определяющая логику сравнения эл-в
//   const lastNameA = a.split(', ')[1];          // Разбивает строку на массив по разделителю
//   const lastNameB = b.split(', ')[1];          // Берет второй элемент массива(фамилию)
//   if (lastNameA < lastNameB) return -1;        // Сортирует массив по фамилям в алфавитном порядке
//   if (lastNameA > lastNameB) return 1;
//   return 0;
// });
// console.log(sortedWriters);

//////////////////////////////////////

// const data:string[] = ['truc','car','car','truc','bike','walk','car','van','bike',//считаем сколько раз встречается каждый эл-т в массиве
// 'car','van','car','truc',];               //
// const counts:Record<string, number> = {};//явная типизация в ts,объект где ключи-строки,значения-числа
// for (const item of data) {   //на каждой итерации текущий элемент присваивается переменной item
//     if (counts[item]) {      //проверям существует ли св-во с ключом item в объекте counts
//         counts[item]++;      //если есть, то значение по ключу item увеличивается на 1
//     } else {                 //если нет,в объект counts доб-ся нов.св-во:ключ item,значение 1(первый случай появления элемента)
//         counts[item]=1;
//     }
// };
// console.log(counts);

// const counts:Record<string, number> = data.reduce((acc:Record<string, number>, item: string) => {
//     acc[item] = (acc[item] || 0) + 1;//берется текущее значение аккумулятора или 0 и прибавляем 1
//     return acc;                     //возвращенный аккумулятор становится входным значением для следующей итерации
// }, {});                             //начальное значение аккумулятора - пустой объект
// console.log(counts);

//////////////////////////////////создать массив, содержащий только уникальные значения исходного

// const fruits:string[] = ['apples','bananas','apples','grapes','bananas','peaches',
//     'strawberries','oranges','apricots','bananas'];

// const unigueFruits:string[] = [...new Set(fruits)];//с помощью Set
// console.log(unigueFruits);
    

// function getUniqueValues<T>(array: T[]): T[] {     //с помощью дженерика
//   return [...new Set(array)];
// }
// const uniqueFruits: string[] = getUniqueValues(fruits);
// console.log(uniqueFruits);


////////////////////////////////////25/03
// const auto = {
//     brand: 'Tesla',
//     drive() {
//         // console.log(this);
//         return `Заведем нашу ${this.brand}`;
//     }
// };
// const autoDrive = auto.drive.bind(auto);




////////////////////////////////////26.03  классы, прототипы
// class Auto {              //создается класс(шаблон) для объектов типа 'автомобиль'
//     brand: string;        //класс определяет какие св-ва у каждщгщ объекта,
//     price: number;        //какие методы(фун-ии) доступны для работы с этими свойствами
//     gas: number;

//     constructor (brand:string, price:number, gas:number) {// конструктор - метод, который вызывается при создании нового объекта
//         this.brand = brand;                               //инициализирует свойства текущего об-та переданными значениями
//         this.price = price;                               //присваивает св-ву price значение параметра price
//         this.gas = gas;                                   //слово this ссылается на создаваемый экземпляр
//     }
//                                  //метод drive моделирует поездку на автомобиле
//     drive(): number | undefined {//объявление метода с типизацией возврата(остаток топлива или поездка невозможна)
//         if (this.gas > 0) {      //проверка наличия топлива
//             const consumption = Math.min(20, this.gas);//расчет расхода топлива
//             this.gas -= consumption; //обновление кол-ва топлива, уменьшает gas на величину расхода
//             return this.gas;         //если топливо было
//         }
//         return undefined;            //если топлива не было
//     }
// }
//  const bmw = new Auto('bmw', 100000, 100);    //создание экземпляров класса
//  const nissan = new Auto('nissan', 40000, 0);
//  console.log(bmw.drive());   //80
//  console.log(nissan.drive());//undefined
 


/////////////////////////////////////04.04 оператор опциональной цепочки ?.
// const auto = {
//     brand: 'Tesla',
//     model: 'ModelX',
//     details: {
//         color: 'red',
//         year: 2021,
//         atStock: true
//     }
// }

// const cars = [auto];

// cars.forEach(car => {
//     console.log(`${car.brand} ${car.details?.year}:color - ${car.details?.color}`);
    
// })

///////////////////////////////06.04функция форматирования цены
// function formatPrice(price:number): string {
//     return `${price.toFixed(2)} руб.`;
// }
// let productPrice: number = 99.5;
// let formattedPrice: string = formatPrice(productPrice);
// console.log(formattedPrice);


// ///////////////////////функция проверки пароля
// function isStrongPassword(password:string):boolean {
//     return password.length>8;
// }
// console.log(isStrongPassword('jkl;dd'));

////////////////////////ф-я конвертирует градусы по цельсию в градусы по фаренгейту
// function celsiusToFahrenheit(celsius:number):number {
//     return (celsius * 9/5) + 32;
// }
// console.log(celsiusToFahrenheit(0));
// console.log(celsiusToFahrenheit(25));
// console.log(celsiusToFahrenheit(34));

//////////////////////// ф-я поиск самого длинного слова в строке
// function findLongestWord(sentence:string): number {
//     const words: string[] = sentence.split(' ');
// const lengths = words.map(word => word.length);// [5, 6, 2]
//     return Math.max(...lengths);
// }
// console.log(findLongestWord('jkkl; sdfgrt hj'));

///////////////////////ф-я для работы с координатами с помощью кортежа
// type Coordinate = [number, number];// кортеж
// function addCoordinates ([x1,y1]: Coordinate, [x2,y2]: Coordinate): Coordinate {// ф-я сложения 2-х координат
// return [x1 + x2, y1+ y2];
// }
// const coord1: Coordinate = [10,26];
// const coord2: Coordinate = [52,15];

// const result = addCoordinates(coord1, coord2);
// console.log(result);
/////////////////////////////////обновление состояния
// type LoadingState = [string, boolean,string?];// кортеж опис-т загрузку дан-х(дан-е,идет ли загрузка,есть ли ошибка)
// function setLoadingState(state: LoadingState): void {
//     const [data, isLoading, error] = state;
//     console.log(`Данные: ${data}`);
//     console.log(`Загружается?: ${isLoading}`);
//     if (error) {
//         console.log(`Ошибка: ${error}`);
//     }
// }

// const state1:LoadingState = ['', true];
// const state2: LoadingState = ['{"user": "Maxim" }', false];
// const state3: LoadingState = ['', false, 'Network Error'];

// setLoadingState(state1);
// setLoadingState(state2);
// setLoadingState(state3);

    