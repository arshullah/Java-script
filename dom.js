// let button = document.getElementById("myid"); //h1 value return krta hai isiliye ham ise ek variable me store krte hai
// console.log(button);
  
// let headings = document.getElementsByClassName("myClass");
// console.dir(headings);
// console.log(headings);

// let para = document.getElementsByTagName("p"); 
// console.dir(para);

// let firstelement =document.querySelector("p"); //usse matching first element dedega
// console.dir(firstelement);

// let allElement = document.querySelectorAll("p"); // sare ,matching element return krta hai
// console.dir(allElement)


// let firstclass =document.querySelector(".myClass");
// console.dir(firstclass);
// let allclass = document.querySelectorAll(".myClass")
// console.dir(allclass)



// <--------------------------------------------------------------------------------------------------->
// properties for getting vlaue and changing values

// document.querySelector("div").children

// let div = document.querySelector("div");
// console.dir(div);

// let heading = document.querySelector("h1");





//<-------------------------------------------------------------------------------------------------------->
// create a h2 heading element with text--> "hello javascript" . append from " apna college student"to this using js?
let h2 = document.querySelector("h2");
console.dir(h2.innerText);

h2.innerText =h2.innerText +"from apna college student"



// <--------------------------------------------------------------------------------------------></->
// new question 

let divs = document.querySelectorAll(".box");
idx = 0;
for(div of divs ){
    div.innerText = `new unique text ${idx}`;
    idx++;
}

// divs[0].innerText = "new value unique"
// divs[1].innerText = "new value two unique"
// divs[2].innerText = "new value three unique"
