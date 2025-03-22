const { identifyDelimiter, identifyNegativeNumbers } = require("./utils");


class StringCalculator {
    add(input) {

        if (input.length === 0 && input === "") return 0;

        if (!isNaN(input)) {
            return parseInt(input)
        }


        const {delimiter, numberString} = identifyDelimiter(input);

        
        const numList = numberString.split(delimiter);
        console.log({delimiter, numberString, numList})


        
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