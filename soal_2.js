const checkTypeNumber = (givenNumber) => {
    if(typeof givenNumber == "number"){
        if (givenNumber % 2 == 0) {
            return "GENAP"
        }
        else if (givenNumber % 2 == 1) {
            return "GANJIL"
        }
    }
    else if (typeof givenNumber == "string") {
        return "Error: Invalid data type"
    }
    else if (givenNumber == null) {
        return "Error: Bro where is the parameter?"
    }
    else {
        return "Error: Invalid data type"
    }
}

console.log(checkTypeNumber(10));
console.log(checkTypeNumber(3));
console.log(checkTypeNumber("3"));
console.log(checkTypeNumber({}));
console.log(checkTypeNumber([]));
console.log(checkTypeNumber());


exports.checkTypeNumber = checkTypeNumber;