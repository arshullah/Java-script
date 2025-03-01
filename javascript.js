// Arithimetic Operators

// let a = 5; 
// let b =2;
// // let c = a+b; Another method
// console.log("a = ",a,"& b = ", b );
// // // console.log("a+b =", a+b);
// // // console.log("a-b =", a-b);
// // // console.log("a*b =", a*b);
// // // console.log("a/b =", a/b);
// // // console.log("a%b =", a%b);
// // // console.log("a**b =", a**b);

// // Unary Operator
// console.log("a++ = ", a++);//5 because ye baad me value chanage krta hai means new line se
// // console.log("++a = ", ++a);
// console.log("a = ",  a);


// asignment Operator

// let a = 5;
// let b = 2;

// a += 4;  //a=a+4
// console.log('a = ', a);



// Comparsion operator
//  ye hame boolean me output deta hai just like true and false

// let a = 5;
// let b = 3;

// console.log("a>b", a>b);
  
//Logical operator

// let a = 6;
// let b = 5;
// console.log("!(a<b) =", !(a===6))



        //   CONDITIONAL STATEMENTS

        // What is IF statement?

        // let age = 18;

        // let mode ="dark";
        // let color;

        // if (mode === "dark") {
        //     color = "black";
        // }
        // else{
        //     color  = "white";
        // }
        
        // console.log(color);
        

        // if (age >= 18) {
        //     console.log("you can vote");
            
        // }

        // if (age < 18) {
        //     console.log("you cannot vote");
            
        // }


        //What is IF-ELSE STATEMENT?

    //     let age = 25;

    //     if (age >=18) {
    //         console.log("vote");
            
    //     } else {
    //         console.log("not vote");
            
    //     }

    //     //ODD or EVEN NUMBER CHECKING
         
    //     let num = 10;
    //         if (num%2 === 0) {
    //             console.log(num ,"is even");
                
    //         } else {
    //             console.log(num ,"is odd");
                
    //         }


    //         // What is ELSE IF statement?
    //         // it checks multiple condition 


    //         let mode = "dark";

    //         if (mode === "dark") {
    //            color = "black";
    //         }
    //          else if (mode === "blue"){
    //             color = "blue";
    //          }
    //          else if (mode === "Pink"){
    //             color = "Pink";
    //          }
    //          else{
    //             color = "white";
    //          }
    //          console.log(color);



    //          // one case : only write if statement. it is a wrost case

    //         //  if (mode === "dark") console.log(mode);


    //         //ternary operator

    //         let ageGroup = 25;
    //         ageGroup >= 18 ? console.log("adult") : console.log("not adult");


    //         //what is switch statements?
    //         let fruit = "banana"
    //     switch (fruit) {
    //         case "mango":
    //             console.log("mango are 500 rupee kg");
                
    //             break;
    //          case "Orange":
    //             case "Apple":
    //                 console.log("Orange and Apple are 300kg");
                    
    //                 break;
    //         default:
    //             console.log("sorry not present any fruit");
                
    //     }

    //     // question --> Get user to a number using prompt('Enter a number:") .
    //     // check if the number is multiple of 5 or not
    
    // //  let digit = prompt("Enter a Digit ")
    // //  if (digit % 5 === 0) {
    // //     console.log(digit, "is a multiple of five");
        
    // //  } 
    // //  else{
    // //     console.log(digit ,"is not a multiple of five");
        
    // //  }






    // //  Write a code which can gives grade to student according thier scores
    // //80-100,A
    // //70-89,B
    // //60-69,C
    // //50-59,D
    // //0-49,F    
    
    
    // // let scores = 51;
    // // let scores = prompt("enter your scores (0-100)")
    // // let grade;
    // // if (scores >= 80 && scores <= 100) {
    // //     grade = "A";
    // // }
    // // else if (scores >= 70 && scores <=89) {
    // //     grade ="B";
        
    // // }
    // // else if (scores >= 60 && scores <=69) {
    // //    grade = "C";
        
    // // }
    // // else if (scores >= 50 && scores <= 59) {
    // //     grade = "D";
        
    // // }
    // // else if(scores >=0 && scores <= 49) 
    // // {
    // //     grade = "F";
        
    // // }
    // // console.log("According to the scores your grade is :", grade);
    
   
    
// LOOPS -- loop are used to execute a peice of code again again

//  jaise hai koi cheez baar print krani hai ya to more than one time print krani hai tab ham loop ka use krte hai.
 

for(let i = 1; i>=10 ; i++){
    console.log("i =", i);
    
}

// callculate the sum of 1 to n number ? 

let add = 0;
// let n = 5; //optional
for(let i = 1; i<=5; i++ ){
    add = add + i;
}
console.log("add = ", add);


// WHILE loop

// let i = 20;
// while (i <= 10) {
//     console.log("i =", i);
//     i++;
// }



// DO-WHILE LOOP --> THIS ATLEAST ONE TIME EXECUTE
// 


//FOR OF LOOP --> Special Type of loop help iterate to some datatypes  string aur array me use mostly.

// let str = "javascript";
// let size = 0;
// for (let i of str) {
//     console.log("i =",i);
//     size++;
// }
// console.log("size = " ,size);




// // FOR- IN LOOP --> MAINLY USED TO OBJECT AND OBJECT KI KEY VALUE CALCULATE KRTA HAI

// let student ={
//     name: "Arshullah",
//     age :20,
//     cgpa:7.5,
//     isPass: true
// };
// for(let key in student){
//     console.log("key=",key, "value = ", student[key]);
    
// }




// Print all the even number 0 to n?

// for(let i=0; i<= 100; i++){
//     if (i % 2!==0) {  // even number logic
//         console.log(i);
        
//     }
// }


// create a game where you start with any random game number .ask the user to keepguesssing the number yuntill the user entire correct.

// let gameNum = 35;
// let userNum = prompt("guess the number");
// console.log(userNum);

// while(userNum != gameNum){ // yaha game play hoga
// userNum = prompt("you entered wrong number guess again ");
// }
// console.log("congratulation , you enter the Right number");
