//Loops:

// FOR Loop:
// for is a keyword
// for is an entry controlled loop

// for (let i = 0; i <= 6; i++){
//     console.log(i);
// }

// working of for loop:

// 1. initialisation
// 2. condition
// 3.code block
// 4.increment/decrement
// 5.condition
// 6.code block
// 7.increment/decrement
// 8.condition

// for (let i = 0; i <= 5; i++){
//     console.log("hello", i);
// }

// for(i = 1; i<=10; i++){
//     console.log(`2 X ${i} = ${i*2}`);
// }

// for(i = 1; i <=1000; i++){
//     console.log(`5 X ${i} = ${i*5}`, i);
// }

// for(i = 1; i<=20; i++){
//     console.log(`6 X ${i} = ${i*6}`, i);
// }

// let i = 1;
// for(i; i<=5; i++){
//     console.log("hi");
// }

// while loop:

// syntax:

// declaration
// while(condition){
//      code block to be executed
//      increment/decrement
// }

// let j = 2;
// while(j <=6){
//     console.log(j);
//     j++
// }

// let m = 1;
// while (m <=10){
//     console.log(m*2);
//     m++
// }

// let n =1;
// while(n<=20){
//     console.log(`3 X ${n} = ${n*5}`);
//     n++
// }

// let k = 11;
// while(k<=20){
//     console.log(`11 x ${k} = ${k*11}` );
//     k++
// }

// Do while loop:

// do while is a keyword
// do while is an exit controlled loop
// do while is a loop which is used to iterate the code multiple times
// in do while the while condition is checked at the end of the loop should have to be true
// and it should have semi colon at the end

// syntax:

//  declaration
//  do {
//    //code block to be executed
//    Incremnent/Decrement
//    }
//  while(condition);

// let i = 0;
// do {
//     console.log(i);
//     i++;
// }
// while(i<=15);

// let ab = 1;
// do {
//     console.log(`ab x ${ab} = ${ab*4}`);
//     ab++
// }
// while(ab<=10);

// let A = 1;
// do {
//     console.log(`8 x ${A} = ${A*8}`);
//     A++
// }
// while(A<=10);

// let jp = 1;
// do{
//     console.log(`3 x ${jp} = ${jp*3}`);
//     jp++
// }
// while(jp<=10)

// let i = 1;
// do{
//     console.log(`${i} x ${i} = ${i**i}`);
//     i++
// }
// while(i<=10)

// let j = 1;
// do{
//     console.log(`${j} = ${j**j}`);
//     j++
// }
// while(j<=5)

// in summary:
//  --> for and while are entry controlled loops
//  --> do while is an exit controlled loop, ensuring at least one execution of loop block

// break, continue and switch:

/*
   Break: the break statement is used to terminate the loop or switch statement. when break is
   encountered, the loop or switch ends immediately, and control is pasesed to the next statement after the
   loop or switch 

   let tablename = 2;
  let startfrom = 1;
  let endtill = 10;
  for(startfrom; startfrom<=endtill; startfrom++){
    console.log(`${tablename} x ${startfrom} = ${tablename*startfrom}`);
    if(startfrom == 7){
        break;
    }
  }

   let tablename = 2;
   let startfrom = 1;
   let endtill = 10;
   while(startfrom<=endtill){
    console.log(`${tablename} x ${startfrom} = ${tablename * startfrom}`);
    if(startfrom == 8){
        break;
       
    }
    startfrom++
   }


   Continue statement: the continue statement skips the current iteration of a loop and moves to the next iteration.
   unlike break, it doesnt terminates the loop. it just skips the rest of the code inside the loop for that 
   particular iteration.

   for (let i=0; i<6; i++){
    if(i === 2 ){
        console.log("skipping", i);
        continue; //it skips the specific defined condition. here it is skipping 2 but continues from 3
    }
    console.log("value of i", i)
   }
 
   Switch statememnt: the swtich statement evaluates an expression and matches it with one of the multiple cases.
   each case represents a potential match, and the assosiated code block runs if the ex[ression matches.
   if no cases match, an optional default block  let color = "blue"
   
   
   let rating = 5;
 switch(rating) {
    case 1:
        console.log("very poor");
        break;
        case 2:
            console.log("poor");
            break;
            case 3:
                console.log("average");
                break;
                case 4:
                    console.log("great");
                    break
                    case 5:
                        console.log("very good");
                        break;
                        default:
                            console.log("invcalid");
                             
 }

 let daynumber = 3
 switch(daynumber){
    case 1:
        console.log("sunday");
        break;
        case 2:
            console.log("monday");
            break;
            case 3:
                console.log("tuesday");
                break;
                case 4:
                    console.log("wednesday");
                    break;
                    case 5:
                        console.log("thursday");
                        break;
                        case 6:
                            console.log("friday");
                            break;
                            case 7:
                                console.log("saturday");
                                break;
                                default:
                                    console.log("invalid week number");
 }


   */

 