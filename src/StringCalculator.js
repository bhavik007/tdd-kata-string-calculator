const { identifyDelimiter, identifyNegativeNumbers } = require("./utils");


class StringCalculator {
    add(input) {

        // value with blank string
        if (!input) return 0;

        // value with only number in string
        if (!isNaN(input)) {
            return parseInt(input)
        }

        // identify all the delimiters and prepare string 
        const {delimiter, numberString} = identifyDelimiter(input);

        const numList = numberString.split(delimiter);
        
        // Negative numbers
        let negativeNumbers = identifyNegativeNumbers(numList);
        if (negativeNumbers.length > 0) {
            return "negative numbers not allowed " + negativeNumbers.toString();
        }

        // Sum of all the numbers
        let sum = numList.reduce((prev, curr) => prev + parseInt(curr), 0)

        return sum;
    }
}

module.exports = { StringCalculator };