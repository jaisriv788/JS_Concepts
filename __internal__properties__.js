let obj = {
  name: "jai",
  age: 23,
  email: "jaisrivastava@788@gmail.com",
};

const property = Object.getOwnPropertyDescriptor(obj, "name");
const properties = Object.getOwnPropertyDescriptors(obj);
// console.log(property,properties)

//by defalut all the properties of a key of an object is set to true

//First property
Object.defineProperty(obj, "age", {
  writable: false, //on setting this to false it will not allow any overlapping of the value on this key only
  enumerable: true,
  configurable: true,
});

//! NOT ALLOWED
obj.age = 20;

// console.log(obj.age);

//Second property
Object.defineProperty(obj, "age", {
  writable: true,
  enumerable: false, //on setting this to false it will not allow any kind of looping over this key only
  configurable: true,
});

//! NOT ALLOWED
for (let i in obj) {
  console.log(`${i} : ${obj[`${i}`]}`);
}

//Third property
Object.defineProperty(obj, "age", {
  writable: true,
  enumerable: true,
  configurable: false /*on setting this to false it will not allow to any properties
   further and will not allow to delete any key or change rest of the properties*/,
});

//! NOT ALLOWED
delete obj.age;
console.log(obj);

//! NOT ALLOWED
//   Object.defineProperty(obj, "age", {
//     writable: true,
//     enumerable: false,
//     configurable: false,
//   });

console.log(Object.getOwnPropertyDescriptor(obj, "age"));
