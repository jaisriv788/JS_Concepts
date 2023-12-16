const user = {
    username:"jaisrivastava788@gmail.com",
    password:"jai@9450"
}

const isLoggedin= {
    login:true,
    logout:false
}

const present = {
    confirmation:true
}

const admin = {
    username:"JaiSrivastava",
    password:"ag231",
    __proto__:user
}

user.__proto__ = isLoggedin

Object.setPrototypeOf(isLoggedin,present)

console.log(isLoggedin.username)

//The inheritance is followed as admin>user>isLoggedin>present
//the upper object can access the prototype of the lowe ones
//but it is not possibel to access the reverse way 
//if the tree contains 2 or more prototype with the same name then we hve to access it by DOM 
//using __proto__ as many times as the prototype is written deep with in the chain

