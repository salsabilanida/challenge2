function getSplitName(personName) {
    if (typeof personName != "string") {
        return "ERROR : Invalid name format";
    }
    else if (typeof personName == "string") {
        const name = personName.split(" ");
        const x = {};
        if (name.length == 3) {
            x.firstName = name[0];
            x.middleName = name[1];
            x.lastName = name[2];
        }
        else if (name.length == 2) {
            x.firstName = name.shift();
            x.middleName = null;
            x.lastName = name.shift();
        }
        else if (name.length == 1) {
            x.firstName = name[0];
            x.middleName = null;
            x.lastName = null;
        }
        else if (name.length >= 4) {
            return "Error: This function is only for 3 characters name";
        }
        else {
            return "Error";
        }
        return x;
    }
}

console.log(getSplitName("Aldi Daniela Pranata"));
console.log(getSplitName("Dwi Kuncoro"));
console.log(getSplitName("Aurora"));
console.log(getSplitName("Aurora Aureliya Sukma Darma"));
console.log(getSplitName(0));