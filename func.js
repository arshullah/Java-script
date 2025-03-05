//CREATE A FUNCTION CALCULATE SUM OF 2 NUMBER

function sum(a,b){
console.log(a+b);

}
sum(1,2);

//RETURN
function sum1(x,y){
    // x,y is local variable of function--> scope
    s1 = x+y;
    return s1;
}
 let val = sum1(4,5);
 console.log(val);

 // arrow function
//  normal function tha
 function add(a,b){
    return a+b;
 }

//  add wala arrow me dekho
const arrowAdd = (a,b)=>{
    console.log(a+b);   
}
arrowAdd(3,5)
  
 function mul(a,b){
    return a*b;
 }

 // multiply wla arrow mee dekho 
 const arrowmul = (a,b) => {
    console.log(a*b);
    
 }
 arrowmul(3,5)

 //arow function print krane ke liye bhi use kia jata 
 const printAny = () =>{
    console.log("hello!");   
 }
printAny()
 

 // Create a function using function keyword that takes a string as an argument & returns the number of in the string

 function countVowels(str){
 // "arshullahbhaijaan", count = according to vowel increase COUNT value 
 let count = 0;
 for(const char of str){
   if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
count++;
   }
 } 
 return count;
 }
 
 //same kaam arrow funnction kaaam ho 
 const countvow = (str)=> {
    let count = 0;
 for(const char of str){
   if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
count++;
   }
 } 
 return count; 
 }

