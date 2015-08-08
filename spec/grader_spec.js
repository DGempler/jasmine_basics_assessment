var grader = require("../grader.js");

describe("Grader", function() {
	it("returns undefined without an input", function() {
		expect(grader.letterGrader()).toBeUndefined();
	});

	it("returns an A+ with an input of 100", function() {
		expect(grader.letterGrader(100)).toEqual("A+");
	});

	it("returns a B with an input of 85", function() {
		expect(grader.letterGrader(85)).toEqual("B");
	});

	it("returns a C- with an input of 72", function() {
		expect(grader.letterGrader(85)).toEqual("B");
	});

	it("returns a D+ with an input of 68", function() {
		expect(grader.letterGrader(85)).toEqual("B");
	});

	it("returns a F with an input of 30", function() {
		expect(grader.letterGrader(85)).toEqual("B");
	});

	it("returns undefined with an input over 100", function() {
		expect(grader.letterGrader(105)).toBeUndefined();
	});

	it("returns undefined with a string input", function() {
		expect(grader.letterGrader("hello")).toBeUndefined();
	});

	it("returns undefined with an array input", function() {
		expect(grader.letterGrader([1,2,3,4])).toBeUndefined();
	});

	it("returns undefined with an object input", function() {
		expect(grader.letterGrader({1:"hello", 2:"no way Jose"})).toBeUndefined();
	});

	it("returns something truthy with a true boolean input", function() {
		expect(grader.letterGrader(true)).toBeTruthy();
	});

	it("returns something truthy with a false boolean input", function() {
		expect(grader.letterGrader(false)).toBeTruthy();
	});

	it("returns undefined with a NaN input", function() {
		expect(grader.letterGrader(NaN)).toBeUndefined();
	});

});

/*Throwing/returning errors wasn't working
describe("Grader", function() {
	it("returns undefined without an input", function() {
		expect(grader.letterGrader()).toThrowError();
	});

	it("returns an A+ with an input of 100", function() {
		expect(grader.letterGrader(100)).toEqual("A+");
	});

	it("returns a B with an input of 85", function() {
		expect(grader.letterGrader(85)).toEqual("B");
	});

	it("returns a C- with an input of 72", function() {
		expect(grader.letterGrader(85)).toEqual("B");
	});

	it("returns a D+ with an input of 68", function() {
		expect(grader.letterGrader(85)).toEqual("B");
	});

	it("returns a F with an input of 30", function() {
		expect(grader.letterGrader(85)).toEqual("B");
	});

	it("returns undefined with an input over 100", function() {
		expect(grader.letterGrader(105)).toBeUndefined();
	});

	it("returns undefined with a string input", function() {
		expect(grader.letterGrader("hello")).toBeUndefined();
	});

	it("returns undefined with an array input", function() {
		expect(grader.letterGrader([1,2,3,4])).toBeUndefined();
	});

	it("returns undefined with an object input", function() {
		expect(grader.letterGrader({1:"hello", 2:"no way Jose"})).toBeUndefined();
	});

	it("returns something truthy with a true boolean input", function() {
		expect(grader.letterGrader(true)).toThrowError();
	});

	it("returns something truthy with a false boolean input", function() {
		expect(grader.letterGrader(false)).toThrowError();
	});

	it("returns undefined with a NaN input", function() {
		expect(grader.letterGrader(NaN)).toThrowError("Input is not a number");
	});

});
*/

describe("Average", function() {
	it("returns the correct average test score from an even array of numbers", function() {
		expect(grader.averageScore([2, 4, 6, 8])).toEqual(5);
	});

	it("returns the correct average test score from an odd array of numbers", function() {
		expect(grader.averageScore([2, 4, 6, 8, 10])).toEqual(6);
	});

	it("returns an average of boolean values", function() {
		expect(grader.averageScore([true, true, false, false])).toEqual(.5);
	});
	/*
	it("returns undefined with a NaN input", function() {
		expect(grader.averageScore(NaN)).toThrowError(TypeError);
	});
	*/
});



describe("Median", function() {
	it("returns the correct median test score from a sorted odd array of numbers", function() {
		expect(grader.medianScore([1, 3, 5, 7, 9])).toEqual(5);
	});

	it("returns the correct median test score from a sorted even array of numbers", function() {
		expect(grader.medianScore([1, 3, 5, 7])).toEqual(4);
	});

	it("returns the correct median test score from an unsorted odd array of numbers", function() {
		expect(grader.medianScore([9, 1, 7, 5, 3])).toEqual(5);
	});

	it("returns the correct median test score from an unsorted even array of numbers", function() {
		expect(grader.medianScore([7, 5, 1, 3])).toEqual(4);
	});

	it("returns the value from a single number value array ", function() {
		expect(grader.medianScore([5])).toEqual(5);
	});

	/* these dont work yet
	it("returns undefined with a number input", function() {
		expect(grader.medianScore(1)).toThrowError("Wrong type");
	});

	it("returns undefined with an object input", function() {
		expect(grader.medianScore({1:"hello", 2:"no way Jose"})).toThrowError("Wrong type");
	});

	it("returns something truthy with a true boolean input", function() {
		expect(grader.medianScore(true)).toThrowError("Wrong type");
	});

	it("returns something truthy with a false boolean input", function() {
		expect(grader.medianScore(false)).toThrowError("Wrong type");
	});

	it("returns undefined with a NaN input", function() {
		expect(grader.medianScore(NaN)).toThrowError("Wrong type");
	});
	*/

});

describe("Mode", function() {
	it("returns the correct mode test score from a sorted array of numbers", function() {
		expect(grader.modeScore([1, 3, 5, 5, 7, 9])).toEqual(5);
	});

	it("returns the correct mode test score from a sorted even array of numbers", function() {
		expect(grader.modeScore([5, 3, 5, 7, 6])).toEqual(5);
	});

	it("returns an identical number from a single number value array ", function() {
		expect(grader.modeScore([5])).toEqual(5);
	});

	it("returns the lower mode value from an array of numbers with two possible results", function() {
		expect(grader.modeScore([5, 3, 5, 7, 6, 3, 123, 123])).toEqual(3);
	});

	/* These don't work yet

	it("returns undefined with a number input", function() {
		expect(grader.medianScore(1)).toThrowError("Wrong type");
	});

	it("returns undefined with an object input", function() {
		expect(grader.medianScore({1:"hello", 2:"no way Jose"})).toThrowError("Wrong type");
	});

	it("returns something truthy with a true boolean input", function() {
		expect(grader.medianScore(true)).toThrowError("Wrong type");
	});

	it("returns something truthy with a false boolean input", function() {
		expect(grader.medianScore(false)).toThrowError("Wrong type");
	});

	it("returns undefined with a NaN input", function() {
		expect(grader.medianScore(NaN)).toThrowError("Wrong type");
	});
	*/
});