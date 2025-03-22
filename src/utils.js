const identifyDelimiter = (input) => {
    if (input.startsWith("//") && input.indexOf("\n") > -1) {
        const newLineIndex = input.indexOf("\n");
        const delimiter = input.substring(2, newLineIndex);


        let matches = delimiter.match(/(?<=\[)[^\]]+(?=\])/g);
        let escapedDelimiter = matches.join('|');

        const numberString = input.substring(newLineIndex + 1);
        
        return { delimiter: new RegExp(escapedDelimiter), numberString };
    }

    return {delimiter: /,|\n/, numberString: input};
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