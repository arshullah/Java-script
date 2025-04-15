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




// classes IN javascript
class ToyotaCar{
        constructor(brand ,mileage){
            console.log("creating new object");
            this.brand = brand;
            this.mileage = mileage;
        }
    start(){
        console.log("start");
        
    }

    stop(){
        console.log("stop");
        
    }
    setBrand(Brand){
       this.Brand = Brand; 
    }
}

//ab ham isme class bhi create kr sakte hai
let fortuner = new ToyotaCar("fortuner", 10);  // constructor invoked hoga 
// fortuner.setBrand("fortuner");

let lexus = new ToyotaCar("lexus", 12);//constructor invoked hoga 
// lexus.setBrand("lexus");





//  Inheritance in javascript  AND --- ye hai ek class ke method ya properties ko dusre class me access kr lete hai
class parent {
    hello(){
        console.log("hello");
        
    }
}

class child extends parent {}
let obj = new child();


// new example foe inheritence 
class Human {
    constructor(name){
        this.species = "homo sapiens";
        this.name = name;

    }
   eat(){
    console.log("eat");
   } 
}

class Engineer extends Human {
    constructor(name){
        super(name); // to invoke parent class constructor
    }
    work(){ 
        super.eat();
        console.log("solve problem, build some thing");
        
    }
}

let arshullahobj = new Engineer("Arshullah");





// you creating websites for your college . create a class Uer with 2 properties ,name & email .
//it ALSO has a method called viewData() that allow user to view website data .
//cretae a new class called admin which inherut from user .
// Add a new method called editdata to dmin its edit website data.


let DATA = "sceret Information";

class user {
    constructor(name,email){
        this.name = name;
        this.email= email;

    }

    viewData(){
        console.log("website data =", DATA);
        
    }
}

class admin extends user {
    constructor(name,email){
        super(name,email);
    }
    editData(){
        DATA = "Some new value ";
    }
}

let student1 = new user("arshullah", "ullaharshulah@gmail.com");
let student2 = new user("faishal", "faishal@gmail.com");


let teacher1 = new user("gaddi", "gaddi@gmail.com");
let teacher2 = new user(",maut", "maut@gmail.com");

let admin1 = new admin("Admin", "admin@gmail.com");
