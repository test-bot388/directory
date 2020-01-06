var mark, john, markHeight, johnHeight, markMass, johnMass;
markHeight = 1.7;
johnHeight = 1.8;
markMass = 100;
johnMass = 110;
var markBMI = markHeight / (markMass * markMass);
var johnBMI = johnHeight / (johnMass * johnMass);

console.log("Mark's BMI is" + " " + markBMI)
console.log("John's BMI is" + " " + johnBMI)
var markGreaterBMI = markBMI - johnBMI >= 0;
console.log("Does Mark have a greater BMI than John?" + markGreaterBMI)