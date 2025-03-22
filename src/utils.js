const identifyDelimiter = (input) => {
    if (input.startsWith("//") && input.indexOf("\n") > -1) {
        const newLineIndex = input.indexOf("\n");
        const delimiter = input.substring(2, newLineIndex);
        
        return delimiter;
    }
    if (input.indexOf('\n')) {
        return '\n'
    }

    return ',';
}

const identifyNegativeNumbers = (numberList) => {
    let numberListLength = numberList.length;
    let negativeNumbers = [];
    for (let i = 0; i < numberListLength; i++) {
        if (parseInt(numberList[i]) < 0) negativeNumbers.push(parseInt(numberList[i]))
    }
    return negativeNumbers;
}

module.exports = {identifyDelimiter, identifyNegativeNumbers}