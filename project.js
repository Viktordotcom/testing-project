function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1, string.length)

}

function reverseString(string) {
    return string.split('').reverse().join('')
}

function makeCalculator(num1, num2){
    const calculator = {
        add: ()=> {return Number(num1) + Number(num2)},
        subtract: ()=> {return Number(num1) - Number(num2)},
        divide: ()=> {return Number(num1) / Number(num2)},
        multiply: ()=> {return Number(num1) * Number(num2)},
    }
    return calculator
}

function caesar(str, shift) {
    let decryptedStr = ''
    let numberOfLetters = 26;

    if (shift < 0) {
        shift = 26 + (shift % 26);
    }

    for(let i = 0; i<str.length;i++){
        let code = str[i].charCodeAt()

        // if UpperCase
        if(code >= 65 && code <= 90){
          decryptedStr += String.fromCharCode((code+ shift - 65) % numberOfLetters + 65)
        }
        // if LowerCase
        else if(code >= 97 && code <= 122){
          decryptedStr += String.fromCharCode((code+ shift - 97) % numberOfLetters + 97)
        }
        else {
          decryptedStr += String.fromCharCode(str.charCodeAt(i))
        }
    }
    return decryptedStr
}

function analyze(array) {

        let sortedArray = array.sort((a, b) => {
            if(a>b) return 1;
            else{ return -1}
        })
    
        const findAverage = array.reduce((a,b) => {
            return a+b/array.length
        }, 0)


    return {
        average: findAverage,
        min: sortedArray[0],
        max: sortedArray[sortedArray.length-1],
        length: sortedArray.length,

    }
}

export { capitalize, reverseString, makeCalculator, caesar, analyze }