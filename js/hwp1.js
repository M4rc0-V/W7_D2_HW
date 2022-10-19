//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

for(let key in person3){
    if(person3[key] instanceof Object){            // Checks if value is an Object(Array or Dict)
        if(person3[key][0] instanceof Object){     // Checks if  first value is an Object(Array or Dict)
            for(let key2 in person3[key][0]){      // loops through the Array
                console.log(person3[key][0][key2]) // takes care of shakes
            }
        }else{
            for(let key3 in person3[key]){         // if first value is not another Object just loop through the value
                console.log(person3[key][key3])    // takes care of pizza and ice cream
            }
        }
    }else{                                         // if the value is not an object it must be a string
        console.log(person3[key])                  // takes care of tacos and burgers
    }
}



