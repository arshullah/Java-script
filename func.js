//CREATE A FUNCTION CALCULATE SUM OF 2 NUMBER

function sum(a, b) {
   console.log(a + b);

}
sum(1, 2);

//RETURN
function sum1(x, y) {
   // x,y is local variable of function--> scope
   s1 = x + y;
   return s1;
}
let val = sum1(4, 5);
console.log(val);

// arrow function
//  normal function tha
function add(a, b) {
   return a + b;
}

//  add wala arrow me dekho
const arrowAdd = (a, b) => {
   console.log(a + b);
}
arrowAdd(3, 5)

function mul(a, b) {
   return a * b;
}

// multiply wla arrow mee dekho 
const arrowmul = (a, b) => {
   console.log(a * b);

}
arrowmul(3, 5)

//arow function print krane ke liye bhi use kia jata 
const printAny = () => {
   console.log("hello!");
}
printAny()


// Create a function using function keyword that takes a string as an argument & returns the number of in the string

function countVowels(str) {
   // "arshullahbhaijaan", count = according to vowel increase COUNT value 
   let count = 0;
   for (const char of str) {
      if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
         count++;
      }
   }
   return count;
}

//same kaam arrow funnction kaaam ho 
const countvow = (str) => {
   let count = 0;
   for (const char of str) {
      if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
         count++;
      }
   }
   return count;
}

// FOREACH LOOP IN ARRAYS
let array = ["delhi", "mumbai", "raipur", "lucknow"];
array.forEach((val, idx, array) => {
   console.log(val.toUpperCase(), idx, array);

});

//for a give array of number , print the square each value of using the for each loop

let arr = [2, 3, 4, 5, 6, 7];
arr.forEach((Number) => {
   console.log(Number * Number);

})


//map method 
let num = [23, 45, 21, 41]
let newArrr = num.map((val) => {
   return val * val;
});
console.log(newArrr);



//filter method  


//for eve number 
// let box = [1,2,3,4,5,6];
// let newBox = box.filter((nums)=>{
//    return nums % 2 === 0;
// });
// console.log(newBox);


// for odd number
let box = [1, 2, 3, 4, 5, 6];
let newBox = box.filter((nums) => {
   return nums % 2 !== 0;
});
console.log(newBox);


// Reduce method in javasxcript
let newwArr = [12, 34, 432, 453, 232, 35, 544, 56, 50];
const output = newwArr.reduce((result, current) => {
   return result > current ? result : current;

});
console.log(output);




// we are given array of marks of student . filter out of the marks of student that scored 90+.

let marks = [91, 92, 54, 67, 89, 99, 97];
let filtermarks = marks.filter((num) => {
   return num > 90;
});
console.log(filtermarks);



// Take a number n as an input form user . Create an array of numbers form 1 to n.
//use the reduce method to calculate sun of all number in the array.
//use the reduce method to calculate product of all number in the arry.
let n = prompt("enter a any number :");
let digitarray = [];
for (let i = 0; i <= n; i++) {
   digitarray[i] = i;//1,2,3,4 index value store hogi
}
console.log(digitarray);

let sumOfUser = digitarray.reduce((previous, current) => {
   return previous + current;
});
console.log(sumOfUser);

let factorial = digitarray.reduce((previous, current) => {
   return previous*current;
});
console.log(factorial);

