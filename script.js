
class User {
    constructor(name, surname){
        this.name = name;
        this.surname = surname
    }
    print(){
        console.log(`Имя - ${this.name}; Фамилия - ${this.surname}`);
    }
}

// let user = new User('Mukhamet', 'Misirov')

class Student extends User{
    #password
    constructor(name, surname, username, password){
        super(name, surname)
        this.username = username
        this.#password = password
    }
    print(password){
    
    if (password === this.#password){
        console.log(`Имя - ${this.name}; Фамилия - ${this.surname}`);
    }
}
}

let use2 =new Student('Mukhamet', 'Misirov', 'Maga', '1234')

use2.print('1234')
// console.log(use2);



