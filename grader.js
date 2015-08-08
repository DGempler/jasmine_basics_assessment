module.exports = {

/*Letter Grader

Write a function letterGrader which takes a test score and returns the equivalent letter grade.

A: 90-100
B: 80-99
C: 70-79
D: 60-69
F: 0-59
letterGrader(98);
//=> 'A'
Bonus: Add '+' and '-' grades. So a 98 is actually a A+ and an 80 is a B-*/


//working
letterGrader: function (n) {
	/*not working
	if (Number.isNaN(parseInt(n))) {
		throw new TypeError();
	}
	or this one
	if (Number.isNaN(parseInt(n))) {
		return new TypeError("]Input is not a number");
	}
	*/
	var gradeArray = [["A+", 100], ["A", 97], ["A-", 92], ["B+", 89], ["B", 87], ["B-", 82], 
	["C+", 79], ["C", 77], ["C-", 72], ["D+", 69], ["D", 67], ["D-", 62], ["F", 59]];
	var letterGrade;
	for (var i = 0; i < gradeArray.length; i++) {
		if (n <= gradeArray[i][1]) {
			letterGrade = gradeArray[i][0];
		}
	}
	return letterGrade; 
},

//isNaN(parseInt(false)); use this to check & prevent true/false from turning into a number

/*Average

Write a function 'averageScore` which takes an array of test scores and returns the average score.

averageScore([90, 95, 87, 60]);
//=> 83

*/


averageScore: function(array) {
	/*if (typeof array !== typeof []) {
		throw new TypeError();
	}*/
	var tally = 0;
	
	array.forEach(function(value) {
		tally += value;
	});
	
	return tally / array.length;
},


//I need to actually throw a type error (in certain cases) in order for the throw type error test to come back positive
//But I wasn't able to make it match the TypeError thrown result from the test

/*Median

Write a function medianScore which takes an array of test scores and calculates the median score. The median is the middle value. If there are an even number of scores, calculate the average of the middle two scores.

medianScore([52,80,80,86,94])
//=> 80*/

medianScore: function(array) {
	sortedArray = array.sort(function(a, b) {
  return a - b;
    });
	if (sortedArray.length % 2 === 0) {
		return (sortedArray[sortedArray.length/2 -1] + sortedArray[sortedArray.length/2])/2;
	}
	else {
		return sortedArray[Math.floor(sortedArray.length/2)];
	}
},






/*Mode

Write a function modeScore which takes an array of test scores and calculates the mode score. 
The mode is the value that appears most often.

modeScore([82, 92, 75, 91, 92, 89, 95, 100, 86])
//=> 92*/

modeScore: function(array) {
	var output = {};
	var resultKey = 0;
	var resultValue = 0;

	for (var i = 0; i < array.length; i++) {
		if (output[array[i]] !== undefined) {
			output[array[i]]++;
		}
		else {
			output[array[i]] = 1;
		}

	}
	(function sort() {
		for (var i = 0; i < Object.keys(output).length; i++) {
			if (output[Object.keys(output)[i]]>resultKey) {
				resultKey = output[Object.keys(output)[i]];
				resultValue = (Object.keys(output)[i]);
			}
		}
	})();
	return Number.parseInt(resultValue);
},

}