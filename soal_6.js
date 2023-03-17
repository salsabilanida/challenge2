function getAngkaTerbesarKedua(dataNumbers) {
    if (dataNumbers == null) {
        return "Error: null"
    }
    else if (dataNumbers == 0) {
        return "Error: Invalid parameters"
    }
    else {
        let intArray = dataNumbers.map(Number);
        const second = intArray.sort((a, b) => {
            return b - a
        })[1];
        return second;
    }
}

const dataAngka = [9, 4, 7, 7, 4, 3, 2, 2, 8]

console.log(getAngkaTerbesarKedua(dataAngka));
console.log(getAngkaTerbesarKedua(0));
console.log(getAngkaTerbesarKedua());