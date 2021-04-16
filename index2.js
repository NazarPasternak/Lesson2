//............Types of data...........
// let str = 'String';
// let boolean = true/false;
// let num = 22;
// let und = undefined;
// let nul = 'null';
// let obj = {};
// let symb = Symbol('');
// let bI = BigInt('9999999999999999909999999999999999999')

// ....................MASSIVS [] and  OBJECTS {}...............................


//.....................MASSIVE [].........................
// let arr = [22, 'Hello', false, 17, 'true', 'TEST'];
// console.log(arr);
// console.log(arr[1], arr[2]);
// console.log(arr[4]);
///
// we change variable 1 with a new data
// arr[1] = ("Feb-2021");
// console.log(arr);

// we change variable 6 with a new data
// arr [6] = 6789;

// we add new variable 99
// arr [99] = '67'

// console.log(arr);
// console.log(arr[10]);

// down line shows the number prolongation
// console.log(arr.length);

// arr.length = 0;
// arr = [];

// let arr = [22, [0, 2, 5.59 ,0], 'Ira', 'Dima']
// console.log(arr)

// console.log(arr[1] [2]);

// let a = [2, 8, 5, 9];

// this command a.push in massive writes all data at the end
// a.push(8, 88, 8, 8);

// console.log(a);
// a.push('Test')
// a.push('xxx');
//
// this command a.unshift in massive writes all data at the front.
// a.unshift('Victor');
// a.unshift('Anna');
// console.log(a);
//
// let delete something at the end of line
// let number = a.pop();
// a.pop();
// a.pop();
//
// let delete something from the beginning of the string
// a.shift();

//if we want to delete some data and save that information we
// add number
// let a = [2, 8, 5, 9];
// let number = a.pop();
// console.log(number);

// let a = [2, 8, 5, 9];
// console.log(a);
// let number = a.pop();
// console.log(a);
// console.log(number);

// ..............OBJECTS..............{} !!! 38:00
// let user = {
//     name: 'Viktor',
//     age: 25,
//     car: true,
//     jobs: ['Developer', 'Techer'],
//     mainJob: {title: 'Middle Node.js',
//         company: {
//             name: 'Inoxoft'
//         }
//     }
// }
// console.log(user.name);
// console.log(user.jobs[0]);
// console.log(user.mainJob.company.name);
// console.log(user.girl);
//
// user.car = 'Chevrolet';
// user.girl = 'Karina';
// user.phone = 'Samsung';
// //if I want to delete some information (it works only with object, with massive forget!!!) 53:00
// delete user.mainJob;
//
// console.log(user);


//Remember keys of values!!!
// this gives by the first key of VLOGENOSTI
// let keys = Object.keys(user);
//this gives array of values (masuv)
// let values = Object.values(user);
// console.log(keys);
// console.log(values);

// ........................CYCLE FOR.....
// let arr = ['Television', 'Bulb', 'Remote Control', 'Notebook',];
//previous example is not useful thing thats why,we use cycles
// remember {block of vukonnnya}
// for (let i = 0; i < arr.length; i = i + 1) {
    // i  = this is the starting point!
    // i  = calculate u until!
    // i = ++  what to do if one iteration is finished - add 1 to variable i!
    // i++ === i = i + 1
    // console.log('xxx', i);
    // alert('Hello, I ha  ve :' + arr[i]);
    //we have to change i to not change often code
    // console.log('Hello, I have :' + arr[i]);
// }
// we need to alert
// alert('Hello I have:' + arr[0]);
// alert('Hello I have:' + arr[1]);
// alert('Hello I have:' + arr[2]);

//...........................CYCLE WHILE.....................
let arr = ['Television', 'Bulb', 'Remote Control', 'Notebook'];

let i = 0;

while (i < arr.length){
    if (i !== 1){
        console.log(arr[i]);
    }
} i++

// while (i < arr.length) {
//     if (i === 1) {
//         i++
//     } else
//     console.log(arr[i]);
//     i++
// }


// .................for of.......... znachennya and for massive []
// it gives all data on from 0 - till end
// in this case csenario we continue exept bulb
// let arr = ['Television', 'Bulb', 'Remote Control', 'Notebook'];
// for (let item of arr){
//     if (item === 'Bulb') {
//         continue;
//     }
//     console.log(item);
//     console.log('_____________________');
// }

// in this case csenario we stop before bulb
// let arr = ['Television', 'Bulb', 'Remote Control', 'Notebook'];
// for (let item of arr){
//     if (item === 'Bulb') {
//         break;
//     }
//     console.log(item);
// }

//.......................for in ..............for massive and objects..{} and []
// this is the cicle used to OBJECT;is "loged' - 1,2,3,4, indexes
//Remember (user, name, age, car, jobs, mainjobs: are keys!
// as well (Viktor, 25, true, develope-teahcer,title) are variable!

// let user = {
//     name: 'Viktor',
//     age: 25,
//     car: true,
//     jobs: ['Developer', 'Techer'],
//     mainJob: {title: 'Middle Node.js',
//         company: {
//             name: 'Inoxoft'
//         }
//     }
//
// for (let item in user){
//     console.log(item);
//     console.log('______________');
// }


//we added item: 1, so got user.item........
// let user = {
//     name: 'Viktor',
//     age: 25,
//     car: true,
//     jobs: ['Developer', 'Techer'],
//     mainJob: {title: 'Middle Node.js'}
// }
// for (let item in user){
//     console.log(item);
//     console.log(user[item]);
//     console.log('______________');
// }

// let arr = [];
// for (i = 0; i < 50;){
//     if (arr[i]%2 ===0){
//         console.log(arr[i]);
//     }
// }

const arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
for (let i = 0; i < arr.length; i = 0){
    if (arr[i]%2 === 0){
        console.log(arr[i])
    }
}





