/*Bind it is used to pass on a function decalared inside a class to the other function 
along with the this. Below is the example using DOM to use as the line 10 says  ----->
call the funciton clickHandeler of the samne call(which is indicated by this keyword) 
and then bind(.bind) that function with all the declaration made within this keyword or
in other words pass on all the data object to the function.*/


//With the bind() method, an object can borrow a method from another object.

// class React {
//     constructor() {
//       this.lib = "React";
//       this.server = "https://localhost:3000";
//       document
//         .querySelector("button")
//         .addEventListener("click", this.clickHandeler.bind(this));
//     }

//     clickHandeler() {
//       console.log(`your port is running on ${this.server}`);
//     }
//   }
//   const page = new React();

//ABOVE CODE IS ASSOCIATED WITH (bind.html) FILE

/*Below is the declaration of the class */

  class User{
    constructor(username,password){
        //when ever the method is static the function is called using the the name of the class instead of this as in line 29 and 32
        this.id = User.id()
        this.username = username,
        this.password = password,
        this.binds = User.result.bind(this)
        //as in case of a normal method this keyword is used only
        this.message = this.msg.bind(this)
    }
    //static method to generate id
    static id(){
       return Math.ceil(Math.random()*100)
    }
    //static method to return this
    static result(){
        return this
    }
    // normal method to call method
    msg(){
        return `hello ${this.username}`
    }
}

const user1 = new User("jai","password")
console.log(user1.binds())

/*Below is the case in which we are binding one object to another */
const obj1 = {
  fName: "jai",
  lName: "Srivastava",
  fullName: function () {
    console.log(`${this.fName} ${this.lName}`);
  },
};

const obj2 = {
  fName: "Devyanshi",
  lName: "Mishra",
};


//we have to store the vriable to get the value otherwise it will go to default(this's value)
const fullName = obj1.fullName.bind(obj2);
console.log(fullName())
// or we can immidiately execute it 
obj1.fullName.bind(obj2)()

