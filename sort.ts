///////////////////////////////////////////////////////////////////// сортировка пузырьком
// const ar = [4, 2, 57, 23, 8];
// console.log(ar);

// let isSorted = false;//флаг,для понимания,закончились ли сортировки

// while (!isSorted) {
//     isSorted = true;//в начале кажд. прохода считаем,что массив отсортирован
//     for (let i = 1; i < ar.length; i++) {
//         if (ar[i] < ar[i - 1]) {
//             let t = ar[i];//меняем местами эл-ты с помощью временной переменной
//             ar[i] = ar[i - 1];
//             ar[i - 1] = t;
//             isSorted = false;// были перестановки,массив не отсортирован,нужен еще проход
//         }
//     }
//     console.log(ar);
// }
// console.log(ar);

////////////////////////////// второй вариант с двумя for

// const arr = [5, 2, 56, 14, 7];
// console.log('исходный массив', arr);

// for (let i = 0; i < arr.length-1; i++) {         //количество проходов, i-номер текущего прохода по массиву
//     for (let j = 0; j < arr.length - 1 - i; j++){//сравнение соседних элементов, j-индес текущего эл-та(с ним сравниваем соседа справа)
//         if (arr[j] > arr[j + 1]) {
//             const t = arr[j];
//             arr[j] = arr[j + 1];
//             arr[j + 1] = t;
//         }
//     }
//     console.log(`после прохода ${i+1}:`, arr);

// }
// console.log('итоговый массив',arr);

////////////////////////////////////////////////////////////// сортировка вставками

// const ar = [3, 1, 5, 2];
// console.log('исходный массив',ar);

// for (let i = 1; i < ar.length; i++) {
//     let current = ar[i];
//     let j = i;
//     while (j>0 && ar[j-1] > current) {
//         ar[j] = ar[j - 1];
//         j--;
//     }
//     ar[j] = current;
// }
// console.log(ar);

///////////////////////////////////////////////////////// алгоритм решето Эратосфена(работа с простыми числами)

// function countPrimes(max: number):number {
//     if (max < 2) return 0;

//     const isPrime = new Array<boolean>(max).fill(true);
//     isPrime[0] = false;
//     isPrime[1] = false;

//     for (let i = 2; i * i < max; i++) {
//         if (isPrime[i]) {
//             for (let j = i * i; j < max; j += i) {
//                 isPrime[j] = false;
//             }
//         }
//     }

//     let count = 0;                  //считаем количество простых чисел
//     for (let i = 2; i<max; i++) {
//         if (isPrime[i]) {
//             count++;
//         }
//     }
//     return count;
// }
// console.log(countPrimes(30));

//////////////////////////////////////////////////////////проверяем простое ли число

// function isPrime(n: number) {
//     if (n < 2) {
//         return false;
//     }
//     for (let i = 2; i * i < n; i++) {
//         if (n % i === 0) {     //если это условие выполн-ся , то число не простое(составное)
//             return false;
//         }
//     }
//     return true;
// }
// console.log(isPrime(17));


////////////////////////////////////////////////////////бинарный поиск по массиву, возможен только по упорядоченному

// function findNumber(arr:number[], target:number) {
//     let start = 0;
//     let end = arr.length - 1;
//     while (start<=end) {
//         const mid =Math.floor(( start + end) / 2);//каждый раз делим массив на две части и начинаем сравнивать от середины
//         if (arr[mid]===target) {
//             return mid;
//         }
//         else if (arr[mid] < target) {
//             start = mid + 1;
//         }
//         else  {
//             end = mid - 1;
//         }

//     }
//     return null;
// }
// const arr = [3, 13, 56, 34, 7, 2];
// console.log(findNumber(arr, 13));


////////////////////////////////////////////////// сортировка подсчетом(только для целых чисел), требует много памяти

// function countingSort(arr) {
//     if (arr.length === 0) return arr;

//     const min = Math.min(...arr);// мин-е значение
//     const max = Math.max(...arr);
//     const range = max - min + 1;// размер диапазона значений


//     const count = new Array(range).fill(0);//хранит, cколько раз встретилось каждое ч-ло
//     for (let i = 0; i < arr.length; i++) {
//         const index = arr[i]-min;
//         count[index]++;
//     }

//     let outputIndex = 0;
//     for (let i = 0; i < count.length; i++) {
//         while (count[i] > 0){
//             arr[outputIndex] = i + min;
//             outputIndex++;
//             count[i]--;
//         }
//     }
//     return arr;
// }

// const data = [4, 2, 2, 5, 7, 1, 7];
// console.log(countingSort(data));



/////////////////////////////////////////////////сортировка слиянием
// function mergeSort(arr:number[]):number[] {
//     if (arr.length <= 1) {
//         return arr;
//     }
//     const mid = Math.floor(arr.length / 2);

//     const left = arr.slice(0, mid);
//     const right =arr.slice(mid);

//     const sortedLeft = mergeSort(left);
//     const sortedRight = mergeSort(right);

//     return merge(sortedLeft, sortedRight);
// }

//     function merge(left:number[], right:number[]) {
//         let result: number[] = [];
//         let leftIndex = 0;
//         let rightIndex = 0;

//         while (leftIndex < left.length && rightIndex < right.length) {
//             if (left[leftIndex] <= right[rightIndex]) {
//                 result.push(left[leftIndex]);
//                 leftIndex++;
//             } else {
//                 result.push(right[rightIndex]);
//                 rightIndex++;
//             }
//         }
//         while (leftIndex < left.length) {
//             result.push(left[leftIndex]);
//             leftIndex++;
//         }
//         while (rightIndex<right.length) {
//             result.push(right[rightIndex]);
//             rightIndex++;
//         }
//         return result;
//     }
//     const a = [4, 2, 78, 34, 56, 1, 3];
//     console.log(mergeSort(a));


/////////////////////////////////////////////////////////////////////

