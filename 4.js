/*
 Functions: it is a block of code which performs specific task

 there are two types of functions
 1. Built in function
 2. user defined functions


 -->Builtin functions:
   -String functions
   -Array functions
   -Math functions
   -Date functions
   -Number functions
   -JSON Functions
   -Console Functions


   -->user defined functions
   
   Declaring a Functions

   syntax:

   function  nameOfFucntion()
   {
   }

   //calling the function
   nameOfFunction()

   e.g:
   //declaring the function
   function box()
   {
   }
 
   //calling the function
   box()

   Important points of functions
   1. A function is declared using the function keyword
   2. Always use camelcase while declaring function name
   3. the body of function is written in code block{}
   4. functions are reusable
   5. functions are the fundamentals block of javascript
   6.functions is a group of code designed to perform specific task
   7.javascript functions can be called anywhere in your program

*/

//declaring the function
// function sayHello(){
//     console.log("hello world");
// } 

// calling the function
// sayHello()
// sayHello()
// sayHello()

// types of user defined functions
// 1. Simple Functions
// 2. Function parameters
// 3. Function with return
// 4. Function Expression
// 5. Arrow Function
// 6.Anonymus Function
// 7.iife

/* 1.Simple functions

   Def:it is a basic function that performs actions and doesn't return a value
   e.g: 
   function greet(){
   console.lo("hello world")
   }  

   greet(); -->output: hello world

 */

/*
  2. Function parameters: in this type of function,
  --> you pass parameters to the function, which are used within the function
  --> the function performs an action but it doesn't give anything back when its done.
  --> without a return statement, the function will implicitly return the undefined.




  function sayHi(lastName){
    console.log(`hi ${lastName}`);
}

sayHi("Rahman");


function sumNum(num1, num2){
    console.log(num1 + num2);
}

sumNum(3,6);

function subNum(n1, n2){
    console.log(n1-n2);
}

subNum(15, 5);

function mulNum( N1, N2){
    console.log(N1*N2);
} 
mulNum(2, 10);

function divNum(number1, number2){
    console.log(number1/number2);
}
divNum(6,2);

function greet(name){
 console.log(`Hello ${name} !`) //using template literals(``)
}

greet("Abdul Rahman")

here,name is a parameter so we can pass any name when we call greet.
greet("ab rahman") prints "hello ab rahman" to the console but doesn't returns any value
this function is used for its side effect(printing to the console) not for producing a value.

e.g:
function table(num){
    for(let i=1; i<=10; i++){
        console.log(`${num} x ${i} = ${num * i}`);  
    }
}

table(8)
table(9)
table(7)

function areaOfRectangle(length, breadth){
    console.log(`${length*breadth}`);
}

areaOfRectangle(6, 6);

function areaOfTriangle(breadth, height){
    console.log(1/2*breadth*height);
}

areaOfTriangle(3,4)

function areaOfSquare(a){
    console.log(a**a);
}

areaOfSquare(3)


   3. Function with Return: 
*/

// function addNumbers(a,b){
//     let total = a+b;
// //     console.log(total);
// // }

// addNumbers(4,4)
// let finalSum = addNumbers(4,4);
// console.log(finalSum);


// function sum(num1, num2){
//     return num1+num2;
// }

// let totalsum = sum(4,5)
// console.log(totalsum);

//  key point:

//  return: if you need to get a value back from the function, use return. this lets the function provide 
//  a specific result that can be saved or used.

// no return: if you just want the function to do something(like log or alert) and dont need a result, dont 
//  use return

// function without return:
// function sumNumbers(x,y){
//     let total = x + y;
//     console.log(total);
// }

// // sumNumbers(2,3);
// let totalsum = sumNumbers(2,3);
// console.log(totalsum);


// function with return:
// function addNumbers(a,b){
//     let total = a+b;
//     return total;
// }

// let totalSum = addNumbers(2,4)
// console.log(totalSum);



// Function Expression: in js functions can be defined as expressions


// syntax: 

// let sayHello = function(){
//     console.log("hello");
// }
// sayHello()

// let sayHello1 = function(num1, num2){
//     return num1+num2;
// }
// let result = sayHello1(2,5)
// console.log(result*3);

// ARROW Functions: 
// --> it was introduced in es6 
// --> arrow functions allow us to write shorter function syntax


/* 
  Before arrow functions
  function sayhello(){
    console.log("hey")
  }
  
  sayhello()
  

  let sayHello() = function(){
   console.log("hello")
  }
   sayHello();
   */


//    Arrow Functions:
 
// let sayHello = () => 
// {
//   console.log("heyy")    
// }

// sayHello()
// // arrow functions are declared just like function expression but removes function keyword and just write ()
// and add "=>" after () and write the code block in {}

// if your code block is just of one line then just write it without curly braces. e.g:

// let sumNumbers = (a, b) => a+b;
// console.log((2,3));

// function sumNum(c,d) {
//     return c+d;
// }
// sumNum(2,4);
// console.log(sumNum(2,4));

