function User(username, password) {
  this.username = username;
  this.password = password;
  this.detail = function () {
    console.log(
      `${this.username} is your username and ${this.password} is your password`
    );
  };
}

function NewUser(username, password) {
  this.username = username;
  this.password = password;
}

//setting prototype of the User function(Constructor function)
User.prototype.sum = function (a, b) {
  return a + b;
};

NewUser.prototype.detailSub = function(){
  console.log(`Hello ${this.username} here is your ${this.password}`)
}

//creating prototype to the entire Object object
Object.prototype.multiply = function (...num) {
  return num.reduce((acc, curr) => {
    return acc * curr;
  }, 1);
};

//creating prototype of an array to take the array as input on which protype is used
Array.prototype.even = function () {
  return this.filter((num) => num % 2 === 0);
};

Array.prototype.odd = function () {
    return this.filter((num) => num % 2 !== 0);
  };
  
//creating prototype of  string
String.prototype.trueLength = function(){
  return this.trim().length
}

//creating new user/defining arrayand methods
const user1 = new User("jaisrivastava788@gmail.com", "Jai@9450");
const user2 = new NewUser("jaisrivastava845@gmail.com", "jai9450631389");
const sum = user1.sum(2, 3);
const arr = [12,45,22,75,24,3,8,24]
const str = "  jai srivastava    "

// Result
user1.detail();
user2.detailSub()

console.log(sum);
console.log(arr.even())
console.log(arr.odd())
console.log(str.trueLength())

console.table([])