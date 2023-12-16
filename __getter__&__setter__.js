class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }
    set setEmail(val){
        this.email = val
    }
    get getEmail(){
        return this.email.toLowerCase()
    }
    set setPassword(val){
        this.password = val
    }
    get getPassword(){
        return this.password.toUpperCase()
    }
}

const hitesh = new User("jaiSRIVastava788@gmail.com", "abc")

console.table([hitesh.getEmail,hitesh.getPassword])