//Creating class with methods and ability to create predfined objects

class User {
  //constructor function is always called
  constructor(username, password) {
    (this.username = username), 
    (this.password = password)
  }

  // its a method it is only executed when called
  details() {
    console.log(`username - ${this.username}. password - ${this.password}`);
  }
}

//creating user instance
const user1 = new User("jaisrivastava", "Jai@9450");

//using methods of the class
user1.details();

//using inheritance to inherit the user class to another class named admin

class Admin extends User {
  constructor(username, password, isAdmin) {
    //suer keyword  is same as call in the constructor function
    //it takes the argument of the inherited class
    super(username, password);
    this.id = Admin.id(),
    this.isAdmin = isAdmin;
  }

  detail() {
    console.log(
      `user ${this.username} with password ${this.password} is ${
        this.isAdmin ? "Admin" : "not a Admin"
      }`
    );
  }
  static id() {
    return Math.round(Math.random() * 500);
  }
}

//creating instances of the Admin class
const admin = new Admin("Jai", "12345", true);
const notAdmin = new Admin("akshay", "67890", false);

console.table([admin, notAdmin]);

//using methods
admin.detail();
notAdmin.detail();

/*here Admin class can access the methods of the User class but User class cannot 
access the methods or the datils of the Admin class like below*/

//here Admin instances are using the method of the User
admin.details();
notAdmin.details();

//! user1.detail()    {it will give an error the will tell detail function is not present}
