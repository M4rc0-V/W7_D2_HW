//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype


// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 


function Person(name, age){
        this.name = name;
        this.age = age;
    
        this.printInfo = function(){
            return `${this.name} is ${this.age} years old!!!`
        }
        this.addAge = function(){
            this.age += 1
        }
}

const Connor = new Person("Connor", 40)
const Caleb = new Person("Caleb",25)
console.log(Caleb.printInfo())
Caleb.addAge("Caleb")
Caleb.addAge("Caleb")
Caleb.addAge("Caleb")
console.log(Caleb.printInfo())
console.log(Connor.printInfo())