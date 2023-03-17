const { checkTypeNumber } = require("./soal_2");

function checkEmail(email) {
    let regex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    let rgx = /^([a-z0-9_\.-]+)$/;

    if (email == null) {
        return "Error: null"
    }
    else if (typeof email == "number") {
        return "Error: Invalid data type"
    }
    else if (rgx.test(email)) {
        return "Error: Invalid email format"
    }
    else if (regex.test(email)) {
        return "VALID"
    }
    else {
        return "INVALID"
    }
}

console.log(checkEmail("apranata@binar.co.id"));
console.log(checkEmail("apranata@binar.com"));
console.log(checkEmail("apranata@binar"));
console.log(checkEmail("apranata"));
console.log(checkTypeNumber(checkEmail(3322)));
console.log(checkEmail());