const User = {
    _email: 'h@hc.com',
    _password: "abc",


    get email1(){
        return this._email.toUpperCase()
    },

    set email1(value){
        this._email = value
    }
}

const tea = Object.create(User)
console.log(tea.email1);