//STRING
let identity = "Arshullah";
console.log(identity[8]);



// TEMPLATE LITERAL IN JAVASCRIPT ?

// let obj = {
//     item: "pen",
//     price : 10,
// };
// let output = `the cost of ${obj.item} is ${obj.price} rupees`;
// console.log(output);

// console.log("the cost of", obj.item, "is", obj.price , "rupees");


let specialString = `this is a template literal ${1+3+4}`;
console.log(specialString);

let str ="ARSHULLAH bHAIJAAN"
// str = str.toLowerCase();
console.log(str.trim()); 



// STRING METHOD SLICE
let alpha = "0123456";
console.log(alpha.slice(1,4));

//Concat method in javascript string 

let str1 = "Arsh";
let str2 = "ullah"
let result = str2.concat(str1); /// ek optinal bhi hota hai means str+str2 kaam ho jayega 
console.log(result);



// replace method in javascript string
let str11 ="my name is arshullah iam form maudaha"
let newstr= str11.replace("ullah","khan")
console.log(newstr);



// charAt method ->> ham kisi bhi string ke andar index use krke uska character bta sakte hai
let str12 ="my name is Javascript"
console.log(str12.charAt(4));



//prompt the user to enter their full name .
// Generate a username for them based on the input with @,
//  followed by their fullname and ending with fullname length.

let fullName = prompt("Enter Your Name without spaces");
let username = "@" + fullName + fullName.length
console.log(username);

