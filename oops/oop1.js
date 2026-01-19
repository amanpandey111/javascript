//todo : Here we mainly discussed about class, object, constrcutor, method, class variable

//! Let's create a class and object
class superhoer{
    myVal = "Aman Pandey"
    constructor(location){
        console.log("contructor with location :",location);
        this.location = location
    }
    normalFunc(){
        const loc = this.getLocation()
        return {name:this.myVal, loc};
    }
    getLocation(){
        return this.location
    }
}

const hero = new superhoer("Mumbai")
const hero1 = new superhoer("Delhi")

// console.log(hero.getLocation());
// console.log(hero1.getLocation());
// console.log(hero.normalFunc());

console.log(hero.normalFunc());
console.log(hero1.normalFunc());