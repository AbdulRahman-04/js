// Object methods:

// common built in object methods
// js provides several built in object methods, available through the global object


let person = {
    fname: "syed",
    age: 20,
    isAlive: true
}

// 1. Object.keys(obj):
// it returns an array of keys (property names) in the object
// console.log(Object.keys(person));

// 2. Object.values(obj):
//  it returns an array of values in the object

// console.log(Object.values(person));

// 3. Object.entries(objectname):
// returns an array of object

// console.log(Object.entries(person));

// 4. Object.assign(objname):
// this returns an object which clones/merges one object into another.

let obj1 = {
    a: 21,
    b: 22
}

let obj2 = {
    c: 23
}
// console.log(Object.assign(obj2,obj1));
// let totalObj = Object.assign(obj1,obj2)
// console.log(totalObj);


// 5. Object.create(objname)
// it is a method which allows us to create a new object with a specified prototype object 
// and optional additional properies. this is particularly useful when you want to establish 
// prototype-based inheritance, allowing one object to inherit properties and methods from another


// let actor = {
//     name: "SALMAN KHAN",
//     age: 57,

// }

// let hero = Object.create(actor);
// console.log(hero.name, hero.age);


// 6. Object.freeze(objname)
// in js object.freeze will freeze your key, value pair or whole object 

// let mall = {
//     area: "Central",
//     city: "Hyderabad"
// }
// mall.city = "bengaluru";
// Object.freeze(mall)
// mall.area = "forward"
// console.log(mall);

//  7. Object.fromentries()
// it takes an input from an array

// let ab = [["ab", "49"], ["ece","yy"] ];
// console.log(Object.fromEntries(ab));


// 8. Object.is(objname)
// in js Object.is checks if two values are same values or not just like (===)

// let a = "10";
// let b = "10";
// console.log(Object.is(a,b));

// let a = 10;
// let b = 11;
// console.log(Object.is("hey", "hey"));

// 9. isFrozen(objname):
// to check if the object is freeze or not

// let student = {
//     name: "rahman",
//     age: 20
// }

// Object.freeze(student);
// student.city = "hyderabad";
// console.log(student);




// console.log(Object.isFrozen(student));



// 10. Object.toString()
// toString() converts the number into binary, octal and hexa values only

// let number = 64;
// let check = number.toString(16);
// console.log(check);

// function conversion(number, convert){
    
//     return console.log(number.toString(convert));
    
// }
// conversion(12, 2);

// console.log(new Date()); 
// this gives current date and time in ISO 8601 format example given below:
// 2024-11-08T05:01:32.215Z
// YYYY-MM-DD T HH:mm:ss.sssz

// console.log(new Date().toString());



// 11. Objext.seal(objname):
// in js, you can update the key, value pairs in object using Object.seal but can't update 
// any changes to trhe object

// let hello = {
//     fname : "hey",
//     age:30
// }

// Object.seal(hello);
// hello.fname = "yooo";

// hello.isAlive = true;
// console.log(hello);

// Objetct.isSealed(objname):
// it checks if your object is sealed or not


// let hello = {
//     fname : "hey",
//     age:30
// }

// Object.seal(hello);
// hello.fname = "yooo";

// console.log(Object.isSealed(hello));






