/* USECASE1 ---> when a constructor function in call in another constructor 
function then after invoking the function inside it will not execute
so to execute it we use call method and to store it in the parent function 
we pass this of the parent function to the child function so that the 
value must me stored inside the parent function  */

//With the call() method, you can write a method that can be used on different objects.

function Name(username) {
  this.username = username;
}

function User(username, password, gender) {
  Name.call(this, username);
  this.password = password;
  this.gender = gender;
}

const user1 = new User("Jai Srivastava", "password", "male");
// console.log(user1);

/*USERCASE2 it is used to pass arguments without any parameter
to be initialized storing it into this*/

function message() {
  console.log(`${this.username} is from functional object`);
}

const obj = {
  message: function () {
    console.log(`${this.username} is from normal object`);
  },
};

const obj2 = {
  username: "jaisrivastava788",
};

message.call(obj2);
obj.message.call(obj2)

/* so the basic understading of the call method is that it is used to call a function 
with n number of arguments and some time with this while begin inside the function to 
pass its reference  */
