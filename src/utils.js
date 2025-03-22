const identifyDelimiter = (input) => {

    // custom delimiter start with "//" and ends at '\n'
    if (input.startsWith("//") && input.indexOf("\n") > -1) {
        // find index and original string after '\n'
        const newLineIndex = input.indexOf("\n");
        const delimiter = input.substring(2, newLineIndex);


        // extract delimiters from string remove [] 
        let matches = delimiter.match(/(?<=\[)[^\]]+(?=\])/g);
        let escapedDelimiter = matches.join('|');

        const numberString = input.substring(newLineIndex + 1);
        
        return { delimiter: new RegExp(escapedDelimiter), numberString };
    }

    // default delimiter
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