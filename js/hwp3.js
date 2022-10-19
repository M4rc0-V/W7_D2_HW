// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

function checkString(string){
    return new Promise((resolve, reject) => {
        if(string.length >= 10){
            resolve(true)
        }else{
            reject(false)
        }
    })
}



checkString("1234567890").then(()=>{console.log("Big Word")}).catch(()=>{console.log("Small Word")})
checkString("12345").then(()=>{console.log("Big Word")}).catch(()=>{console.log("Small Word")})








