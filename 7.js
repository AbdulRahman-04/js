// Objects:

/*
  in javascript, Objects are kings.
  if you understand objects then you have understood javascript.

  in javascript everything is almost Object
  in Javascript, objects are collections of key value pairs that represent real world entities or
  complex data structures.

  they are one of the core data structures in javascript and are used extensively in both frontend 
  and backend devolopment.

*/

// basicc object syntax:

let person = {
    fname : "Abdul",
    age: 20,
    isAlive: true,
    phone: 8186978069,
    office: {
        phone: 9898989898,
        email: "lesnarcena72@gmail.com",
        area: {
              location: "hyderabad",
              zip: 500062
        }
    }
}

// console.log(person);


// adding key value pairs to an object


// object name.keyname = "value" , number
// person.lname = "rahman";
// console.log(person);

// person.course = "CFI- Full Stack";
// console.log(person);

// person.height = 160;
// console.log(person);

// person.engineering = "ece";
// console.log(person);

// person.rollno = 49;
// console.log(person);

// updating in objects
// object name.keyname = "value" , number

// person.age = 21;
// console.log(person);

// person.fname = "Syed Abdul";
// console.log(person);

// person.lname = "Rahman";
// console.log(person);

// person.phone = 8686813770;
// console.log(person);


// Accessing objects 
// we are accessing nested object elements like office and area key values
// console.log(person.office.email);
// console.log(person.office.phone, person.office.email);
// console.log(person.office.area.location, person.office.area.zip);

// updating nested key values in objects:
// person.office.area.location = "Gacchibowli";
// console.log(person);

// console.log(person.office.email);
// person.office.email = "ab81869@gmail.com";
// console.log(person.office.email);

// person.office.area.zip = 500002;
// console.log(person.office.area.zip);

// adding new key values in existing nested object
// person.office.area.country = "India";
// console.log(person.office.area);

// person.office.location = "Hyderabad";
// console.log(person.office);

// person.office.employeeno = 312;
// console.log(person.office);


// Deleting key value pairs in js

// syntax
// delete objectname.key;

// delete person.office.area.location;
// console.log(person.office.area);

// delete person.office.area.country;
// console.log(person.office.area);

// delete person.age;
// console.log(person);











