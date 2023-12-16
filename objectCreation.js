//Method 1(Normal Method)
const Obj1 = {
  username: "Jai1",
  password: "123",
  hello: function () {
    console.log("Hello World this is a normal Object");
  },
};
console.log(Obj1);
console.log(Obj1.hello());

//Method 2 (Using Object)
const Obj2 = new Object();
Obj2.username = "Jai2";
Obj2.password = "243";
Obj2.hello = function () {
  console.log("Hello World this is a Object object");
};
console.log(Obj2);
console.log(Obj2.hello());

//Method 3 (Constructor Function Method)
//Note -> It is dynamic in nature
function UserFunction(username, password, hello) {
  this.username = username;
  this.password = password;
  this.hello = hello;
}
const Obj3 = new UserFunction("Jai3", "345", () => {
  console.log("Hello World this is a constructor function");
});
console.log(Obj3);
console.log(Obj3.hello());

//Method 4 (Creating object using class)
class UserClass {
  constructor(username, password) {
      (this.username = username),
      (this.password = password),
      (this.hello = function () {
        console.log("Hello World this is class object");
      });
  }
}
const Obj4 = new UserClass("Jai4", "456");
console.log(Obj4);
console.log(Obj4.hello());

//Method 5 
//while using this method by default the value of the Obj5 is always NULL
const Obj5 = Object.create()
Obj5.name = "Jai5"
Obj5.password = "567"
Obj5.hello = function(){
  console.log("Hello World this is class objet")
}

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/
