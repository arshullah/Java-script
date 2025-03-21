// creating object in javaScript.

const student = {
   Fullname : "Arshullah",
   marks :  "75",
printMarks : function(){
 console.log(this.marks);  // this ka matlb usse object ki baat ho rhi hai jaise isme example ke tor pe student.marks
    
}
};



// creating prototypes object.
const employee = {
    calcuTax(){
        console.log("tax rate is 10%");

    },
    //  calcuTax2 : function (){
    //     console.log("tax rate is 10%");
        
    //  }
     // both method are for creating function
};



const KaranArjun = {
    salary: 50000,
    calcuTax(){
        console.log("tax rate is 30%");
        
    }
};


//when i access any object function , method and poperties then we use this process
KaranArjun.__proto__ = employee; 
