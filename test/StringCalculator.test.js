const { StringCalculator } = require('../src/StringCalculator');

describe('TDD Kata String Calculator', () => {
    let calculator;

    beforeEach(() => {
        calculator = new StringCalculator();
    })

    test("should return 0 for empty string", () => {
        expect(calculator.add("")).toBe(0);
      });

      test("should return the same value if it's a valid digit as a string", () => {
        expect(calculator.add("17")).toBe(17);
        expect(calculator.add("7")).toBe(7);
      });

      test("should return the sum of comma(,) seprated numbers", () => {
        expect(calculator.add("1,7")).toBe(8);
        expect(calculator.add("9,8")).toBe(17);
        expect(calculator.add("1,2,3")).toBe(6);
      });

      test("should return the sum of comma(,) seprated numbers and handle trailing space", () => {
        expect(calculator.add("1 ,2 ,3")).toBe(6);
      });

      test("should return the sum of the numbers which seprated with new line(\n)", () => {
        expect(calculator.add("1\n7")).toBe(8);
        expect(calculator.add("9\n8")).toBe(17);
        expect(calculator.add("1\n2,3")).toBe(6);
      });

      test("should return the sum of the numbers with multiple delimiters", () => {
        expect(calculator.add("//[;][,]\n1;2,3")).toBe(6); 
        expect(calculator.add("//[;][,]\n1;2,3")).toBe(6); 
        expect(calculator.add("//[;;][,,]\n1;;7")).toBe(8);
        expect(calculator.add("//[;;][,,]\n9;;7,,7")).toBe(23);
      });


      test("should return the negative numbers not allowed with all the negative numbers", () => {
        expect(calculator.add("1, -1, -17")).toBe("negative numbers not allowed -1,-17");
      });

});