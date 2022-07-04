

// SayHello('P324');
// // Function Declarations ==> Hoisting
// function SayHello(groupname) {
//     console.log('Hello ' + groupname);
// }



// SayGoodbye('P324');
// // Function Expressions
// var SayGoodbye = function(groupname) {
//     console.log('Goodbye ' + groupname);
// }
// HOISTING


// ARROW FUNCTIONS

// function Calculate(x,y) {
//     return x * y;
// }

// console.log(Calculate(6,5));


// var Hesabla = function(a,b) {
//     return a * b;
// }
// console.log(Hesabla(4,7));


// ARROW FUNCTIONS
// var Hasil = n => n
// var ShowName = (firstname) => console.log('Hello ' + firstname);

// ShowName('Cingiz')
// console.log(Hasil(8));


// var Person = {
//     ad: "Fexrin",
//     soyad: "Eliyev",
//     yas: 25,
//     tamAd() {
//         return this.ad + " " + this.soyad
//     },
//     tevellud: () => {
//         return new Date().getFullYear()-Person.yas;
//     }
// }

// console.log(Person.tevellud());
// console.log("Username: " + Person.tamAd());


// // map

// var numbers = [5,11,15,22,30];

// var new_arr = numbers.map(x => x*2);

// var new_num = numbers.map(function(x) {
//     return x * 2;
// })

// console.log(new_arr);

// // filter

// var ages = [15,17,25,40,50];

// // for(var i;i<ages.length;i++) {
// //     if(i%2==0) {
// //         console.log(i);
// //     }
// // }

// var elder = ages.filter(x => x%2===0);
// console.log(elder);


// var users = [
//     {id:1,name: "Oruc",age: 55},
//     {id:2,name: "Xelilbey",age: 17},
//     {id:3,name: "Nezrin",age: 18},
//     {id:4,name: "Ismayil",age: 23}
// ]


// var new_users = users.filter(user => user.age >= 18)
// console.log(new_users);


// reduce

// var salary = [1200,2000,2500,1700];

// var new_salary = salary.reduce((x,y) => x+y);
// console.log("Umumi mebleg: " + new_salary + " AZN");



// var arr = [25,10,2,5,9,12]
// arr.sort((x,y) => {
//     return y-x;
// })

// console.log(arr);

// 4,10,18,24
// 18,24
// 42

// var x = arr.map(x => x*2).filter(x => x > 15).reduce((x,y) => x+y)


// // forEach
// arr.forEach(x => console.log(x))


// function Person(firstname,age,job) {
//     this.firstname = firstname;
//     this.age = age;
//     this.job = job;
// }

// var Developer = new Person('Seymur',25,'Front deweloper');
// var Coordinator = new Person('Xelilbey',30,'Student coordinator');
// var Angel = new Person('Seymur',20,'Mentor');

// console.log(Developer.firstname);
// console.log(Coordinator.firstname);
// console.log(Angel.firstname);


// function* generate() {
//     console.log('invoked 1st time');
//     yield 1;
//     console.log('invoked 2nd time');
//     yield 2;
// }

// generate();


// function * fun()
// {
//     yield 10;
//     yield 20;
//     yield 30;   
// }
 
// Calling the Generate Function
// var gen = fun();
// document.write(gen.next().value);
// document.write("<br>");
// document.write(gen.next().value);
// document.write("<br>");
// document.write(gen.next().value);


// setTimeOut
// setInterval

// function Hello() {
//     console.log('Salam');
// }

// setTimeout(() => {
//     Hello();
// }, 5000);


// function ShowTime() {
//     var time = new Date();
//     var h = time.getHours() > 9 ? time.getHours() : "0" + time.getHours()
//     var m = time.getMinutes() > 9 ? time.getMinutes() : "0" + time.getMinutes()
//     var s = time.getSeconds() > 9 ? time.getSeconds() : "0" + time.getSeconds()
//     document.getElementById('time').innerHTML = `${h}:${m}:${s}`
// }

// setInterval(() => {
//     ShowTime()
// }, 1000);


// CALLBACK FUNCTIONS

// console.log('Salam');

// setTimeout(() => {
//     console.log('Hello');
// }, 3000);

// setTimeout(() => {
//     console.log('Goodbye');
// }, 0);

// console.log('Sagol');

// function SayHello(groupname,callback) {
//     console.log('Hello ' + groupname);
//     callback();
// }

// // var ShowInfo = 'Salam';

// function ShowInfo(username,age){
//     console.log('ABC');
// }

// SayHello('P324',ShowInfo);
// ShowInfo('Oruc',25)

// function Change() {
//     var div = document.getElementById('first');
//     div.style.backgroundColor = 'green';
// }

// var btn = document.getElementById('btn');
// btn.ondblclick = function() {
//     var div = document.getElementById('first');
//     div.style.backgroundColor = 'green';
// }


// var Change = function() {
//     var div = document.getElementById('first');
//     div.style.backgroundColor = 'green';
// }

// var Change = () => {
//     var div = document.getElementById('first');
//     div.style.backgroundColor = 'green';
// }


// var box = document.getElementById('first')

// box.onmouseup = function() {
//     this.style.backgroundColor = 'green'
// }

// box.onmousedown = function() {
//     this.style.backgroundColor = 'orange'
// }


// window.oncontextmenu = function(e) {
//     e.preventDefault();
// }


// var loader = document.getElementById('loader')
// var site = document.getElementById('site')


// function Loader() {
//     loader.style.display = 'none'
//     site.style.display = 'block'
// }

// setTimeout(() => {
//     Loader()
// }, 2000);



function Show() {
    var select_value = document.getElementById('slc').value
    var value = document.getElementById('input').value;
    var x = Number(value)
    console.log(select_value);
    document.getElementById('price').innerHTML = value
}