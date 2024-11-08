// Recursion:

/*
Recursion is a process in which a function calls itself directly or indirectly in order
to solve a problem by breaking it down into smaller, sub similar problems. this repeated 
self-calling continues until it reaches a base case, which is a condition where no further
recursion is needed, allowing the function to start  returning values back up through each 
call. in simple terms recursion is when something is defined or done in terms of itself 
until it reaches a stopping point.
*/

// print numbers upto N

// function call(num){
//     if(num < 1 ){
//         return console.log("the recursion ends here");
//     }
//     console.log(num);
//     call(num-1)
// }

// call(5)

// function name(number){
//     if(number == 0){
//         return console.log("the recursion ends here");
        
//     }
//     console.log(number);
//     name(number-1)
    
// }
// name(10)

// function call(num){
//     if(num < 11){
//        return console.log("ends here");
//     }
//     console.log(num);
//     call(--num)
// }

// call(15);

// factorail of 5 using recursion:

function fac(num){
  if(num == 0 || num == 1){
    return 1;
  }
  return num* fac(num-1)
}
console.log(fac(3))



