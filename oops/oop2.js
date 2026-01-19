
//! Inheritence
// class SuperHero{
//     name="aman pandey"
//     power='fly'
//     constructor(){
//         console.log('Contrcutor Of Parent');
//     }
//     fightWithVillain(villainName){
//         console.log("Fight With ", villainName);
//     }
// }

// class SilverSurfer extends SuperHero{

// }

// const ss1 = new SilverSurfer()
// console.log(ss1.name);
// console.log(ss1.power);
// console.log(ss1.fightWithVillain("Shivam Dube"));

//! super keyword
// class SuperHero{
//     name="aman pandey"
//     power='fly'
//     constructor(villainName){
//         this.villainName = villainName
//     }
//     fightWithVillain(){
//         console.log("Fight With ",this.villainName);
//     }
// }

// class SilverSurfer extends SuperHero{
//     constructor(){
//         super("spiders")
//     }
//     getDetails(){
//         console.log(this.name);
//         console.log(this.power);
//         console.log(this.villainName);
//     }
//     fightWithVillain(){
//         super.fightWithVillain()
//     }
// }

// const ss1 = new SilverSurfer()
// // console.log(ss1.name);
// // console.log(ss1.power);
// // console.log(ss1.fightWithVillain("Shivam Dube"));

// // ss1.getDetails();

// ss1.fightWithVillain();

//! Abstraction : Anyway we don't any concept to implement it but we can throw an error
// class DeveloperWork{
//     finishWork(){
//         throw new Error("Need To Implement this")
//     }
//     shareUpdate(){

//     }
// }

// class Developer extends DeveloperWork{}
// const dev = new Developer()
// dev.finishWork()

//! Polymorphism
// class SuperHero{

// }
// class SilverSurfer{
//     fly(place){
//         console.log("Flying");
//         if(place){
//             console.log("Flying Above India");
//         }
//     }
// }

// const ss1 = new SilverSurfer()
// ss1.fly()
// ss1.fly("india")

//! Public and Private
class SuperHero{
    #specialPower = "boat"
    // #getSpecialPower(){
    //     console.log("Boat");
    // }

    getSpecialPower(){
        return this.#specialPower
    }
}

const ss1 = new SuperHero()
console.log(ss1.specialPower);
// ss1.getSpecialPower();
console.log(ss1.getSpecialPower());