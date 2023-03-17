function isValidPassword(password) {
    let regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,}$/;
    
    if (password == null) {
        return "Error: null"
    }
    else if (typeof password != "string") {
        return "Error: Invalid password format"
    }
    else if (regex.test(password)) {
        return "true"
    }
    else {
        return "false"
    }
}

console.log(isValidPassword("Meong2021"));
console.log(isValidPassword("meong2021"));
console.log(isValidPassword("@eong"));
console.log(isValidPassword("Meong2"));
console.log(isValidPassword(0));
console.log(isValidPassword());