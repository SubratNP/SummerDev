// // var a = 10;
// // var a = 12;
// // console.log(a);
// // let b = 10;
// // b - 12;
// console.log(b);
// const c = 100;
// console.log(c);

// const { status } = require("express/lib/response");

// let name = "Subrat";
// let cast = "regmi";
// console.log(name + cast);

// let temperature = 30;
// if (temperature > 30) {
//   console.log("It's hot ");
// } else {
//   console.log("It's cold ");
// }

// let israining = true;
// if (israining == true) {
//   console.log("Take an umbrella");
// } else {
//   console.log("No need for an umbrella");
// }

// let n = parseInt(prompt("Enter a number: "));

// let attendance = {
//   name: "Subrat",
//   status: "Present",
//   attendancepercent: 100,
//   class: "web development",
//   batch: "BCY",
// };
// console.log(attendance);

// //2
// let string1 = "Hello";
// let string2 = "World";
// if (string1.length > string2.length) {
//   console.log("String 1 is longer than String 2");
// } else if (string1.length < string2.length) {
//   console.log("String 2 is longer than String 1");
// } else {
//   console.log("EQUAL");
// }

// //3
// let age=18
// if (age >=12 && age <= 18) {
//   console.log("You are teenager");
// }
// else if (age<12){
//     console.log("You are a child");
// }
// else{
//     console.log("You are an adult");
// }

//Number game
number = 17;
while (true) {
  let guess = parseInt(prompt("Guess a number between 1 and 100: "));
  if (guess === number) {
    console.log("Congratulations! You guessed the number.");
    break;
  } else if (guess < number) {
    console.log("low! Try again.");
  } else {
    console.log("high! Try again.");
  }
}
