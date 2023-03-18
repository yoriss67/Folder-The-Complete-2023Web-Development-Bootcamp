<!-- 2022/08/09から -->

<!-- 118 -->
function getMilk() {
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");
}

function getMilk(bottles⭐) {
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");
  console.log("buy" + bottles⭐ + "bottles of milk");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");
}

<
!--120 -->

function lifeInWeeks(age) {

  var yearsRemaining = 90 - age;
  var days = yearsRemaining * 365
  var weeks = yearsRemaining * 52
  var days = yearsRemaining * 12

  console.log("You have" + x + "days,"
    y + "weeks, and" + z + "months left.");
}

lifeInWeeks(19)


// 121

function getMilk(money) {
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");

  // var numberOfBottles = (Math.floor(money / 1.5));

  console.log("buy" + calcBottles(money, 1.5) + "bottles of milk");


  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");

  return money % 1.5; //remainder of this division
}


// getMilk(5);  //$1.5  5/1.5 = 3 bottles

function calcBottles(startingMoney, costPerBottle) {

  var numberOfBottles = Math.floor(startingMoney / costPerBottle);

  return numberOfBottles;

}

function calcChanges(startingAmount, costPerBottle) {
  var change = startingAmount % costPerBottle;
  return change;
}

getMilk(5);


console.log("Hello Master, here is your " + getMilk(10, 3) + "change.");



// 122 BMI Calculator Challenge

//Create your function below this line.
//The first parameter should be the weight and the second should be the height.

function bmiCalculator(weight, height) {

  var bmi = weight / (height * height);
  // return bmi; これ間違ってた
  /* a */
  return Math.round(bmi);

}

console.log(Math.round(bmiCalculator));

console.log("Your BMI is" + bmiCalculator + ".");


/* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:

var bmi = bmiCalculator(65, 1.8); 

bmi should equal 20 when it's rounded to the nearest whole number.

*/

var bmi = bmiCalculator(47, 1.6);
console.log(bmi);


// 学んだ

Math.pow()

Math.round()

// 125
Math.random() //()にはminかmax

Math.floor() //round down　　//()には引数＝数値が入る


var n = Math.random();
n = n * 6;
n = Math.floor(n) + 1;
console.log(n);

// これでdice roll = pseudo random number generator

// love calculator challenge🔥

/*・two prompts that ask for the names of the two people
 ・calculate a random number that is a percentage. between 1 and 100
 ・alert telling them what is their love score.

*/

var name = prompt("What is your name ?");

var name2 = prompt("What is the other's name ?");


var loveScore = Math.random();

loveScore = loveScore * 100;

// これでintegerにする　　//+1で100までにする
loveScore = Math.floor(loveScore) + 1;

console.log(loveScore);

alert("Your love score is" + loveScore);

// 127

if (loveScore > 70) {
  alert("Your love score is" + loveScore + "%" + "You love each other like Kanye loves Kanye");
} else {
  alert("Your love score is" + loveScore + "%");
}

if (a === b) {
  console.log("yes");
} else {
  console.log("no");
}

// 128 BMI Calculator Advanced (IF/ELSE)🔥

/*BMI <18.5,   the output should be: "Your BMI is <bmi>, so you are underweight."

BMI 18.5-24.9, the output should be "Your BMI is <bmi>, so you have a normal weight."

BMI >24.9,     the output should be "Your BMI is <bmi>, so you are overweight."  */



// function bmiCalculator (weight, height) {
if (bmi < 18.5) {
  alert("Your BMI is" + bmi + ", so you are underweight.");
}

if (bmi <= 18.5 >= 24.9) {
  alert("Your BMI is" + bmi + ", so you have a normal weight.");
}

if (bmi > 24.9) {
  alert("Your BMI is" + bmi + ", so you are overweight.");
}


//    return /*interpretation*/;
// }

// 👩‍🎓答え

function bmiCalculator(weight, height) {

  var bmi = weight / Math.pow(height, 2);
  var interpretation = "";

  if (bmi < 18.5) {
    interpretation = "Your BMI is " + bmi + ", so you are underweight.";
  } else if (bmi < 24.9) {
    interpretation = "Your BMI is " + bmi + ", so you have a normal weight.";
  } else {
    interpretation = "Your BMI is " + bmi + ", so you are overweight.";
  }

  return interpretation;
}

// leapYear Challenge

function isLeap(year) {

  /**************Don't change the code above****************/

  //Write your code here.    

  var leapYear =

    var interpretation = "";


  if (year / 4) {

  } else {
    console.log(year);
  }






  return year;


  if (year === true) {
    console.log("Leap year");
  } else {
    console.log(year);
  }


  /**************Don't change the code below****************/

}

// 👩‍🎓👩

function isLeap(year) {

  /**************Don't change the code above****************/

  //Write your code here.    

  if (year % 4 === 0) {

    if (year % 100 === 0) {

      if (year % 400 === 0) {
        return "Leap year";
      } else {
        return "Not leap year."
      }
    } else {
      return "Leap year";
    }

  } else {
    return "Not leap year.";
  }


  /**************Don't change the code below****************/

}

// 132

"Angela"
"Jack"
"Pam"
"James"
"Lara"
"Jason"

var guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"];

console.log(guestList.length);

console.log(guestList[0]);

prompt("What is your name?");

if (prompt.includes(guestList)) {
  return "Welcome!"
} else {
  return "Sorry, maybe next time."
}

// 学んだ
foods.length();
var foods = [🥚, 🌮, 🍿, 🍟, 🧇];

foods.includes();
var foods = [🥚, 🌮, 🍿, 🍟, 🧇];


foods.push();

foods.pop;

// 👩‍🎓答え

var guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"];

var guestName = prompt("What is your name?");

guestList.includes(guestName);

if (guestName) {
  alert("Welcome!");
} else {
  alert("Sorry, maybe next time...")
}


// 132

/* snipetts

var output = [];

output.push(1);
< 1
*/

// 1ずつ増える

var output = [];

// 👩‍🎓
var count = 1;

function fizzBuzz() {

  // 👩‍🎓
  output.push(count);
  count++; /*=1増える*/


  console.log(output);
}

// 3 で割れるならFizz  5 で割れるならBuzz

function fizzBuzz() {

  output.push(count);
  count++; /*=1増える*/

  if (count / 3) {
    console.log("Fizz");
  } else if (count / 5) {
    console.log("Buzz");

  }

}

// 👩‍🎓

var output = [];

var count = 1;

function fizzBuzz {

  //  Write here 

  if (count % 3 === 0 && count % 5 === 0) {
    output.push("FizzBuzz");

  } else if (count % 3 === 0) {
    output.push("Fizz");

  } else if (count % 5 === 0) {
    output.push("Buzz");

  } else {
    output.push(count);
  }

  count++;

  console.log(output);

}


// Who's Buying Lunch? Code Challenge
// The last person is never be picked

function whosPaying(names) {

  /******Don't change the code above*******/

  //Write your code here.

  var names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];

  var names = Math.random();



  names.length(3);



  /******Don't change the code below*******/
}


//👩‍🎓

function whosPaying(names) {

  /******Don't change the code above*******/

  //Write your code here.

  // 長さがわからないから[0-4]ではなく
  var numberOfPeople = names.length;
  var randomPeoplePosition = Math.floor(Math.random() * numberOfPeople); //🤔0-0.9999 0-4.99999
  var randomPerson = names[randomPersonPosition];

  return randomPerson + "is gonna buy lunch today";

}

// 134

// 学んだ

while loops
while (sth is true) {
  //Do sth
}

// 99 Bottles Challenge   🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔


function song99Bottles() {
 
  var numberOfBottles = 99;
 
  while (numberOfBottles >= 1) {
 
   
      console.log(numberOfBottles + "bottles  of beer on the wall," + numberOfBottles + "bottles of beer. Take one down and pass it around," +
        (numberOfBottles - 1) + " bottles of beer on the wall.");
    
    numberOfBottles--;
 
  }
 
  if (numberOfBottles === 1) {
    console.log(numberOfBottles + "1 bottle of beer on the wall, 1 bottle of beer. Take one down and pass it around, no bottles of beer on the wall.");
     
  } else { 
    console.log("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer.");
 
  }
 
}


// できた！！！！！1

function song99Bottles() {
 
  var numberOfBottles = 99;
 
  while (numberOfBottles > 1) {
   
      console.log(numberOfBottles + "bottles  of beer on the wall," + numberOfBottles + "bottles of beer. Take one down and pass it around," +
        (numberOfBottles - 1) + " bottles of beer on the wall.");
    
    numberOfBottles--;

 
    if (numberOfBottles === 0) {
      
  console.log("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer.");
    }
    
  }
 
  if (numberOfBottles === 1) {
    console.log(numberOfBottles + " bottle of beer on the wall, 1 bottle of beer. Take one down and pass it around, no bottles of beer on the wall.");
  
  console.log("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer.");
 

  }

}


// 動いた答え
function lyrics() {
  var numberOfBottles = 99;
  while (numberOfBottles >= 1) {
    if (numberOfBottles === 1) {
      console.log(numberOfBottles + " bottle of beer on the wall, " + numberOfBottles + " bottle of beer. Take one down and pass it around, no more bottles of beer on the wall.")
    }
    else {
      console.log(numberOfBottles + " bottles of beer on the wall, " + numberOfBottles + " bottles of beer. Take one down and pass it around, " + numberOfBottles + " bottles of beer on the wall.")
    }
    numberOfBottles--;
  }
console.log("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more. 99 bottles of beer.");
}

lyrics();

// Shahbaj


let numberOfBottles = 99;
 
while (numberOfBottles >= 0) {
    if (numberOfBottles === 0) {
        console.log(`No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.`);
    }
    if (numberOfBottles === 1) {
        console.log(`1 bottle of beer on the wall, 1 bottle of beer.
Take one down and pass it around, no more bottles of beer on the wall.`);
    }
    if (numberOfBottles > 1) {
        console.log(`${numberOfBottles} bottles of beer on the wall, ${numberOfBottles} bottles of beer.
Take one down and pass it around, ${
            numberOfBottles - 1
        } bottles of beer on the wall.`);
    }
 
    numberOfBottles--;
}
 
 

// 134　学んだ

for.loop
for (START; END; CHANGE) {

}




var output = [];

function fizzBuzz() {
    for (var count = 1; count < 101; count++;) {
    
      if (count % 3 === 0 && count % 5 === 0) {
        output.push("FizzBuzz");
    
      } else if (count % 3 === 0) {
        output.push("Fizz");
    
      } else if (count % 5 === 0) {
        output.push("Buzz");
    
      } else {
        output.push(count);
      }
    
    
      console.log(output);
    
}
}

// 137 The Fibonacci Exercise

function fibonacciGenerator (n) {
  //Do NOT change any of the code above 👆
      
      //Write your code here:
      
      var output = [];


      for (var i = 0; i < 10; i ++) {

       if (n === 1) {
        return output
       } else if (n = 2) {
        return output
       }
      
      
      return 
      
      

      }

      //Return an array of fibonacci numbers starting from 0.
      
  //Do NOT change any of the code below 👇
  }
  
  // 👩‍🎓👩‍🎓
  
  function fibonacciGenerator(n) {

    var output = [];

    
    if (n === 1) {
       output = [0];

     } else if (n === 2) {
       output = [0,1];

     } else {
       output = [0,1];

       for (var i = 2; i < n; i++) {
        output.push(output[output.length - 2] + output[output.length - 1]); //[0,1,1]

       }

      }
    
    
   /*   } if (n === output.length) {

     } else {
      output.
     } */
    
    
    return output;
  }

  

  output = fibonacciGenerator(1);
  console.log(output)

  //141

  document.querySelector("input").click();

// check boxがclickされる

//学んだ

getter

setting a property

call a method 
>car.drive();

// 水色はattribute