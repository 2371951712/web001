

// 变量

// //int apple = 20
// var apple = 20;
// var orang = "橘子";
// //es6
// let lenon = "柠檬";
// let banana = 30;
// const pear = 40;
// //在js里面，一切都是对象

// var  apple1 = {}
// console.log(typeof apple1)
// //3q

// var apple2 = Object.create({});

// console.log(typeof apple2 +"apple");

// var apple3 = function bigApple(){
//     console.log("this is apple3");
// }
//     function smallApple(){
//         console.log("this is smallApple");

// }
// var apple4 = function (){
//     console.log("this is apple3 big apple");
// }
// apple4();

// //es6箭头函数

// var apple5 = ()=>{
//     console.log("this is arrow function")
// }
// apple5();
// var apple6 = ()=> console.log("this is arrow function")

// apple6()
// var apple7 = ()=>{
//     return()=>{
//         return()=>{
//         console.log("this is arrow function apple9");
//         }
//     }
// }
// apple7()();
// var apple10 = (x,y)=>{
//     console.log("this is apple10 =="+(x+y));
//     return (x,y)=>{
//         console.log("this is apple11 =="+(x+y))
//     }
// }
// //NaN not a number
// apple10(4,5)(8,9)
// var apple12 = ()=>console.log("10");console.log("13")
// apple12();

// function apple13(){
//     var name ="苹果13";
//     function apple13Son(){
//         console.log("this is apple13 son")
//     }
//     apple13Son()
//     console.log("this is apple13")
//     return{
//         apple13Son1:apple13Son
//     }
// }
// apple13().apple13Son1;

var apple14 = function(){
    console.log("this is apple 14...")
   
    return 200;
}()
console.log(apple14);
// apple14();