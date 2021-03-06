/**************************************************
 Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 
 **************************************************/


var massMark = 78; //kg
var heightMark = 1.70; //mts

var massJohn = 90;
var heightJohn = 1.80;

var markBMI = massMark / (heightMark*heightMark);
var johnBMI = massJohn / (heightJohn*heightJohn);

var greaterBMI = markBMI > johnBMI;

console.log(markBMI);
console.log(johnBMI);
console.log("it's mark's BMI greater than John's BMI? "+greaterBMI);