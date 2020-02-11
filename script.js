



/**********
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


********/


/******

var john;
var johngame1 = 89;
var johngame2 = 120;
var johngame3 = 103;

var mike;
var mikegame1 = 116;
var mikegame2 = 94;
var mikegame3 = 123;

var mary;
var marygame1 = 97;
var marygame2 = 134;
var marygame3 = 135;

var johnaverage = (johngame1 + johngame2 + johngame3) / 3;
var mikeaverage = (mikegame1 + mikegame2 + mikegame3) / 3;
var maryaverage = (marygame1 + marygame2 + marygame3) / 3;

console.log(johnaverage)
console.log(mikeaverage)
console.log(maryaverage)

if (johnaverage > mikeaverage && maryaverage) {
    console.log('John had the highest average with ' + johnaverage)
}
else if (mikeaverage > johnaverage && maryaverage) {
    console.log('Mike had the highest average with ' + mikeaverage)
}
else if (maryaverage > johnaverage && mikeaverage) {
    console.log('Mary had the highest average with ' + maryaverage)
}
else console.log('John, Mike, and Mary tied in average scores')

******/

var john = {
    height:2.6,
    fullName:" John Smith",
    weight: "160",
    isMarried: "false",
    bills: [128, 48, 268, 180, 42],
    calcTips: function(){
        this.tips = [];
        this.finalValues = [];

        for (var i = 0; i < this.bills.length; i++)
        {
            // determine percentage based on tipping rules
            var percentage;
            var bill = this.bills[i];

            if (bill < 50) {
                percentage = 0.2
            } else if (bill >= 50 && < 200) {
                percentage = 0.15
            } else {
                percentage = 0.1
            }

            //add results to corresponding arrays
            this.tips[i] = bill * percentage
        }
    }
}