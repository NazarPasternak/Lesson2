
//1. створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// const strArr = ['Nazar', 'Kolya','Ivan', 'Alla' , 'Troyanda'];
// console.log(strArr);
// - з 5 значень стрічкового, числового та булевого типу
// const mixArr = ['Nazar', 7,'Ivan', 'Alla' , true];
// console.log(mixArr);
//5. та вивести його в консоль

//7. Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// let emptyArr = [];
// emptyArr[0] = false;
// emptyArr[1] = 17;
// emptyArr[2] = 'Dima';
// emptyArr[3] = {name: 'Vasy ', age : 23};
// emptyArr[4] = ()=>{console.log('Hello World')};
// emptyArr[5] = NaN;
// console.log(emptyArr);

//9. За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// for (let i = 0; i < 10; i = 0) {
//     document.write('<div>Text try now</div>');
// }

//10. Had problems with that... - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// for (let i = 0; i < 10; i = 0){
//     document.write('<div>Text : '+1+'</div>');
//     document.write(`<div>Text : ${i}</div>`);
// }

//11. За допомогою циклу while вивести в документ 20 блоків h1
// c довільним текстом всередині.
// let i = 0;
// while (i < 20){
//     document.write('<h1>Something inside</h1>');
//     i++
// }

//12.  За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// let i = 0;
// while (i < 20){
//     // document.write('<h1>Something inside : ${i}</h1>');
//     document.write(`<h1>Text : ${i}</h1>`);
//     i++
// }

//14. Створити масив з 10 числових елементів. Вивести в консоль всі
// його елементи в циклі.
// const strArr = [2, 5, 77, 65, 78, 96, ];
// for (let i = 0; i < strArr.length; i++){
//     console.log(strArr[i]);
// }
// OR
// let of gives variable indexes!!!
// const strArr = [2, 5, 77, 65, 78, 96, ];
// for (const number in strArr){
//     console.log(number);
// }
//
// - Створити масив з 10 строкрових елементів. Вивести в
// консоль всі його елементи в циклі.
// const strArr = ['Nazar', 'Kolya','Ivan', 'Alla' , 'Troyanda'];
// for (let i = 0; i < strArr.length; i++){
//     console.log(strArr[i]);
// }

//16. Створити масив з 10 елементів будь-якого типу.
// Вивести в консоль всі його елементи в циклі.
// the same!!!
// emptyArray.forEach(i=>{console.log(i);});

//17. Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// 18. Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
//19. Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// let emptyArr = [];
// emptyArr[0] = false;
// emptyArr[1] = 17;
// emptyArr[2] = 'Dima';
// emptyArr[3] = {name: 'Vasy ', age : 23};
// emptyArr[4] = ()=>{console.log('Hello World')};
// emptyArr[5] = NaN;
// console.log(emptyArr);
//<<boolean>>
// for (let i = 0; i < emptyArr.length; i++){
//     if(typeof emptyArr[i] === 'boolean'){
//     console.log(emptyArr[i])
//     }
// }
//<<number>>
// for (let i = 0; i < emptyArr.length; i++){
//     if(typeof emptyArr[i] === 'number'){
//     console.log(emptyArr[i])
//     }
// }
//<<string>>
// for (let i = 0; i < emptyArr.length; i++){
//     if(typeof emptyArr[i] === 'string'){
//     console.log(emptyArr[i])
//     }
// }

//21. Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// let emptyArr = [];
// emptyArr[0] = false;
// emptyArr[1] = 17;
// emptyArr[2] = 'Dima';
// emptyArr[3] = {name: 'Vasy ', age : 23};
// emptyArr[4] = ()=>{console.log('Hello World')};
// emptyArr[5] = NaN;
// console.log(emptyArr);
//
// for (let i = 0; i < emptyArr.length; i++){
//     console.log(emptyArr[i]);
// }

//22. Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 10; i++){
//     console.log('step: ',i);
//     document.write(('step: ',i));
// }

//23. Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i++){
//     console.log('step:',i);
//     document.write(`step: ${i} <br>`);
// }

//24. Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i =+ 2){
//     console.log('step:',i);
//     document.write(`step: ${i} <br>`);
// }

//25. Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let i = 0; i < 100; i++){
//     if (i %2 ===0){
//        console.log('step :',i);
//         document.write(`step: ${i} <br>`);
//     }
// }

//26. Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for (let i = 0; i <100; i++){
//     if (i !== 0){
//         console.log('step :',i);
//         document.write(`step: ${i} <br>`);
//     }
// }

// 1:00:00


//27. Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)
// const type_Count = 59;
// let s = 0;
// let min = 0;
// let hour = 0;
//
// for (let i = 0; i <= 23 && hour !== 3 && min !== 21 ; i++){
//     console.log('hours : ', hour++);
//     for (let i = 0; i <= type_Count && hour !== 3 && min !== 21   ; i++) {
//         console.log('min : ', min++);
//         for (let i = 0; i <= type_Count; i++) {
//             console.log('seconds : ', s++);
//         }
//         s=0;
//     }
//     min=0;
// }
//

//28.  Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)

// ..........................WORK IN AUDIENCE............................

// 37. Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.
// let array = ['a', 'b', 'c'];
// for (let i = 1; i <= 3; i++){
//     array.push(i);
// }
// console.log(array);

// 38.Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].
// let array = [1, 2, 3];
//     array.pop();
//     array.pop();
//     array.pop();
//     array.unshift(1)
//     array.unshift(2)
//     array.unshift(3);
// console.log(array);
// better solution - array.Reverse
// let array = [1, 2, 3];
// let newArray = array.reverse();
// console.log(newArray);

// 39. Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.
// let array = [1, 2, 3];
// for (let i = 3; i <= 6; i++){
//     array.push(i)
// }
// console.log(array);
// or as a monkey will do it!!!
// let array = [1, 2, 3];
//     array.push(4);
//     array.push(5);
//     array.push(6);
// console.log(array);

// 40. WOW it was tricky!!!Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.
// let array = [1, 2, 3];
// for (let i = 6; i >= 4; i--){
//     array.unshift(i)
// }
// console.log(array);

// 41. Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()
// const arr = ['js', 'css', 'jq'];
// console.log(arr);
// const first = arr.shift();
// console.log('first', first);
// console.log ('arr', arr);
// <<more simple variant below>>
// const arr = ['js', 'css', 'jq'];
// const first = arr.shift('js');
// console.log(first);

// 42. Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()
// const arr = ['js', 'css', 'jq'];
// console.log(arr);
// const last = arr.pop();
// console.log('last', last);
// console.log('arr', arr);

// 43. Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [4, 5].
// let str = [1, 2, 3, 4, 5];
// str.shift();
// str.shift();
// str.shift();
// console.log(str);
// <<OR>>
//     with function slice
// let numbers = [1, 2, 3, 4, 5, 7, 8, 9];
// console.log(numbers.slice(3,5));

// 44.Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [1,2].
// let numbers = [1, 2, 3, 4, 5, 7, 8, 9];
// console.log(numbers.slice(0, 2));

// 45. Дан масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 4, 5] with function splice
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8,];
// numbers.splice('1',2);
// console.log(numbers);

//     Підказка. Необхідно стерти елементи, зберегти їх кудись.
//     Дописати букви і після букв повернути стерті цифри
// 47. Дан масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
//     Підказка. Працюйте по принципу задачі вище.
// const numbers = [1, 2, 3, 4, 5];
// numbers.splice('1','4','a', 'b', 2, 3, 4, 'c', 5, 'e');
// console.log(numbers);
// <<splice>>> zroshennya!!!

// 49. Done.Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
// let arr = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = 0; i < arr.length; i++) {
//     if(i%2 === 0){
//         console.log(arr[i]) ;
//     }
// }

// 50. - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив.
// За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший
// let arr = [2,17,13,6,22,31,45,66,100,-18];
// let newArr = [];
// for (let i = 0; i < arr.length; i++){
//     newArr.push(arr[i])
// }
// console.log(newArr);

// 51. Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
// let arr = [2,17,13,6,22,31,45,66,100,-18];
// let newArr = [];
// for (let i = 0; i <arr.length; i++) {
//     newArr[i] = arr[i];
//     console.log(newArr[i]);
// }

// 56. зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
// 1.Done. перебрати його циклом while
// let arr = [2,17,13,6,22,31,45,66,100,-18];
// let i = 0;
// while (i < arr.length) {
//     console.log(arr[i]);
//     i++
// }

//58. 2.Done. перебрати його циклом for
// let arr = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

//59. 3. Done. перебрати циклом while та вивести  числа тільки з непарним індексом
// let arr = [2,17,13,6,22,31,45,66,100,-18];
// let i = 0;
// while (i < arr.length) {
//     if (arr[i]%2===0) {
//         console.log(arr[i]);
//     }
//     i++
// }

// 4. Done. I made some mistake dont know where? перебрати циклом for та вивести  числа тільки з непарним індексом
// let arr = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = 0; i < arr.length; i += 2){
//     if (arr[i] !== 0){
//         console.log(arr[i]);
//     }
// }

// 5. Done .перебрати циклом while та вивести  числа тільки парні  значення
// let arr = [2,17,13,6,22,31,45,66,100,-18];
// let i = 0;
// while (i < arr.length) {
//     if (arr[i]%2===0){
//         console.log(arr[i]);
//     }
//     i++
// }

// 6. Done. перебрати циклом for та вивести  числа тільки парні  значення
// let arr = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = 0; i < arr.length; i++){
//     if (arr[i]%2===0){
//         console.log(arr[i]);
//     }
// }

// 7. Done. замінити кожне число кратне 3 на слово "okten"
// let arr = [2,17,13,6,22,31,45,66,100,-18];
// console.log(arr);
// for (let i = 0; i < arr.length; i++) {
//     if (arr [i] % 3 === 0) {
//       arr[i]= 'Okten'
//     }
// }
// console.log(arr);

// 8. Done. вивести масив в зворотньому порядку.
// let arr = [2,17,13,6,22,31,45,66,100,-18];
// arr.reverse(arr);
// console.log(arr);

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

// 10 WOW! створити пустий масив та :
//68. Заповнити його 50 парними числами за допомоги циклу.
// let arr = [];
// for (let i = 2; i < 100; i += 2){
//   if ( i %2 === 0) {
//       arr.push(i);
//   }
// }
// console.log(arr);

// //69. Заповнити його 50 непарними числами за допомоги циклу.
// let arr = [];
// for (let i = 1; i <100; i += 2){
//    if (i !== 0) {
//        arr.push(i);
//    }
//  }
// console.log(arr);

// -----------------------------------------------------

// 1.створити пустий масив та :

// a. заповнити його 50 парними числами за допомоги циклу.
// let arr = [];
//  for (let i = 2; i < 100; i += 2){
//     if (i % 2 === 0){
//         arr.push(i);
//     }
// }
//   console.log(arr);


// b. заповнити його 50 непарними числами за допомоги циклу.
// let arr = [];
//  for (let i = 1; i < 100; i += 2){
//     if (i !== 0){
//         arr.push(i);
//     }
// }
//   console.log(arr);

// 3. используя Math.random заполнить массив из ???(сколько хотите) элементов.
//  диапазон рандома 8 до 732. (но сначала пробуйте БЕЗ ДИАПАЗОНА!)
// let arr = [];
// for (let i = 0; i < 10; i++){
//     arr[i] = Math.floor((Math.random() * (732 - 8)) + 8);
// }
// console.log('arr');
// console.log(arr);
// // (10[59, 293, 477, 315, 514, 664, 498, 415, 109, 341]   result
//
// //2. вывести на консоль  каждый третий елемент
// for (let i = 2; i <arr.length; i++){
//      console.log(arr[i]);
// }

//3. вывести на консоль  каждый третий елемент
//  но при условии что его значение является парным.
// for (let i = 2; i <arr.length; i++){
//     if(arr[i]%2 === 0){
//         console.log(arr[i])
//     }
// }
//  4. вывести на консоль  каждый третий елемент но при условии что он имеет парное значение и записать их в другой массив.
// let newArr = [];
// for (let i = 2; i <arr.length; i+=3){
//     if (arr[i]%2 === 0){
//         newArr[i] = arr[i];
//     }
// }
// console.log(newArr);
//  5. Вывести каждый елемент массива у которого соседний с права элемент - парный
// let arr = [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ];
// for (i = 0; i <arr.length; i++){
//     if(arr[i+1]%2 === 0){
//         console.log(arr[i])
//     }
// }
// console.log(arr);

// I DONT KNOW HOW TO MAKE THAT EXWRCISE!!! масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. обрахувати середній чек.
let data = [100,250,50,168,120,345,188];
for (let i = 0; i < data.length; i++) {
    averageRevenue = ((averageRevenue + data[i])/data.length);
}
console.log(averageRevenue);

 // let arr = [ 'a', 'b', 'c'];
 // let str = '';
 // for (let i = 0; i < arr.length; i++){
 //     str = str + arr[i];
 // }
 // console.log(str);

// 8 створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
// let arr = [];
// for (let i = 0; i < 10; i++){
//     arr[i] = Math.floor((Math.random() * (732 - 8)) + 8);
// }
// console.log('arr');
// console.log(arr);
// let newArr = [];
// for (let i = 0; i < arr.length; i++) {
//     newArr[i] = arr[i]*5;
// }
// console.log(newArr);


// 4 створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо об'єкт є числом,
//  додати його в інший масив.

// .................................ADDITIONAL.............................

//94. Done. Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// let arr = [ 'a', 'b', 'c'];
// for (let i = 0; i < arr.length; i++){
//     console.log(arr[0]+arr[1]+arr[2]);
// }
// OR DIFFERENT WAY SOLUTION
// let arr = [ 'a', 'b', 'c'];
// let str = '';
// for (let i = 0; i < arr.length; i++){
//     str = str + arr[i];
// }
// console.log(str);


//95.Check extra. Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// let arr = [ 'a', 'b', 'c'];
// i = 0;
// let str = '';
// while (i < arr.length) {
//     str = str + arr[i];
// }
// console.log(str);


//96. Done. Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
// We added to str the (number of for of) REMEMBER THAT PLEASE
// let arr = [ 'a', 'b', 'c'];
// let str = '';
// for (let string of arr){
//     str = str + string
// }
// console.log(str);

//97. Done. Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for in зібрати всі букви в слово.
// let arr = [ 'a', 'b', 'c'];
// let str = '';
// for (let string in arr){
//     str = str + arr[string]
// }
// console.log(str);





































//....................Lesson 3.....3/31/2020.........................
// STRING
// let str = 'HELLO';
// console.log(str[0]);
// console.log(str[1]);

// Letter E is on the index 1.
// let str = 'HELLO ooooo World';
// let indexOf = str.indexOf('W');

// console.log(indexOf);


// let str = 'HELLO ooooo World';
// let number = str.lastIndexOf('o');
// let numberStart = str.indexOf('o');
//
// console.log(number, numberStart);

// 8:50

// let str = 'HELLO';
// console.log(str[1]);
// console.log(str.charAt(1));
//
// console.log(str.charCodeAt(1));
// above is a special code for Java code number!

// .concat - add something to str
// let S  = str.concat('RRRRR');
// let S2 = str + 'RRRRR'
//
// console.log(S);
// console.log(S2);

// /we change one letter 0 - to letter z; 14:00
// let str = 'HELLOOOOO';
// let replace = str.replace('O', 'z');
// let replaceAll = str.replaceAll('O', 'z')
//
// console.log(replace);
// console.log(replaceAll);
//
// let slice = str.slice(4, 8);
//
// console.log(str);
// console.log(slice);




// slice delete some elements
// let str  = 'HELLOO World';
// it has left 2 last elements
// let slice = str.slice(str.length-2, str.length);
// or
// let slice = str.slice(1, 4);

// console.log(str);
// console.log(slice);

// ..........SPLIT.............

// // let str = 'HELLO ooooo world';
// let allowedNames = 'admin;ivan;olga;ira'
// let allowedArr = allowedNames.split(';');
// console.log(allowedArr);
//
// // let str  = 'HELLO World';
// // !!!Just remeber that distance '_' will separate words/ ('') separate letters
// // let strings = str.split(' ');
// // console.log(strings);

// 26:00 Create a sentence, delete comas) nice
// let strArr = ['Hello', 'feb', 'js','java', 'python'];
// let join = strArr.join(' ');
// console.log(join);

// In cases when we haave an email from capital or small letter
// let com = 'Victor.fzs@gmail.com';
// let com1 = '  victor.fzs@gmail.com';
// // // makes false
// // console.log(com === com1);
// //
// com = com.toUpperCase();
// com1 = com1.toUpperCase();
// // console.log(com, com1);
// // console.log(com === com1);
//
// // method that delete all extra spaces ...trim
// com = com.trim();
// com1 = com1.trim();
//
//
// console.log(com);
// console.log(com1);
// console.log(com === com1);

// let name = 'Harry Potter    ';
// // name = name.replace('', '')
// // name = name.trim()
// console.log(name);


// 40:00 phone starts with +1
// let com = 'Victor.fzs@gmail.com';
// let com1 = '  victor.fzs@g';
// let phone = '+771864+109'

// let b = phone.startsWith('+77')
// let endsWith = phone.endsWith('+380');
// if (!b){
//     alert('Wrong format');
// }
// let number = phone.indexOf('+1');
//
// console.log(number);

// let b = phone.startsWith('+77');
// let endsWith = phone.endsWith('109');
// console.log(b);
// console.log(endsWith);

// .................includes.........................

// let com = 'Victor.fzs@gmail.com';
// let com1 = '  victor.fzs@g';
//  let phone = '+771864+109'
// let b = com.includes('@gmail.com');
// let b2 = com1.includes('@gmail.com');
// let b3 = phone.includes('772');
// console.log(b);
// console.log(b2);
// console.log(b3);




// .....................FUNCTIONS.......................
// Done, mistake was about the <br> skip new line!!!
// function myFunction(WhatIShouldBuy) {
//     document.write(`I need to buy ${WhatIShouldBuy}`);
//     document.write('<br>')
// }
// myFunction('Milk');
// myFunction('Bread');
// myFunction('Beer');
// myFunction(['Whiskey, Vodka, Tekila']);
// myFunction('9 dollars');


// let bank = 99999;
//
// function calculator(sum, usdToUah) {
//     const dollars = sum / usdToUah;
//     console.log(`You have bought $[dollars} dollars`);
//
//     return dollars;
// }

// Lexical Environment
// {
//     let a = 'xxx'
// }
// console.log(a);

// let bank = 100000;
//
// function calculator(Sum, usdToUah=28)  {
//     const dollars = Sum / usdToUah;
//     console.log(`You have bought ${dollars} dollars`);
//
//     return dollars;
// }

// console.log(dollars);

//Fill in data!!!
// let boughtDollars = calculator(50000,27.9 );
//
// console.log(boughtDollars);
//
// boughtDollars = boughtDollars - 1500;
// console.log(boughtDollars);
//
// bank += boughtDollars;
//
// console.log(bank);
// // WOW I did it!!!
//
//
// // 2 pa rt salary
// let newPayDay = calculator(25000, 28.1);
//
// console.log(newPayDay);
// newPayDay = newPayDay - 200;
// // we add bank + newPayDay
// bank += newPayDay;
//
// console.log(bank);



// Hard to Understand!
// function returnTest(user){
//     if (user.Age > 18){
//         return 'Hello'
//     }
// // return stops using of function as a break for example
// }
// let result = returnTest({name:'Dima', age:22})
//
// console.log(result);

// ........Arguments.............
// variable - that created automatically
// function argTest(){
//     console.log(arguments)
//     for (const argument of arguments){
//         console.log(arguments);
//     }
//
// }
//
// argTest(1, 6, 9, 'Hello', 'feb', 2218, 'JS', 'PHP');
































