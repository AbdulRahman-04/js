// Arrays: it is a collection of elements or items.

// array starts from 0th index

let fruits = ["apple", "mango", "banana", "orange"]
// index         0        1        2          3

// console.log(fruits[0]);

let storage = ["hi", "hello", 10, "50", true, undefined, null, {fname: "rahman", age: 20}, [10,20]]
//               0       1     2    3     4       5        6       7                          8
// console.log(storage[8][1]);

// updating

// storage[9] = 4555;
// console.log(storage);
 

storage[10] = true;
console.log(storage);

// updating values in arrays
storage[1] = 34;
console.log(storage);

storage[6] = 0;
storage[5] = 12;
storage[7] = {
    lname: "SAR"
}
console.log(storage);


// deleting index values in arrays
delete storage[4];
console.log(storage);


// task:
// 

