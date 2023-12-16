function User(email, password,age){
    this._email = email;
    this._password = password
    this._age = age

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })
    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })

    Object.defineProperty(this,'getAge',{
        get: function(){
            return this._age+100
        },
        set: function(val){
            this._age = val
        }
    })

}

const chai = new User("chai@chai.com", "chai",23)

console.log(chai.getAge);