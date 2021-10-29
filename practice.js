//Step 3
//Unique Characters

function uniqueCharacters(string){
    string = string.toLowerCase()
    for(let i = 0; i < string.length; i++) {
        for(let j = i + 1; j < string.length; j++) {
            if(string[i] === string[j]) {
                return false
            }
        }
    }
    return true
}

console.log(uniqueCharacters('Water'))

//Runtime ~ 0.014 seconds