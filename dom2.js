let div = document.querySelector("div");
console.log(div);

let id = div.getAttribute("id")
console.log(id);
let att = div.getAttribute("game");
console.log(att);

let para = document.querySelector("p");
console.log(para.setAttribute("class","newClass"));

 let dev = document.querySelector("div")
 console.log(dev);
 div.style.backgroundColor = "";
 
let newbtn = document.createElement("button");
newbtn.innerText= "click me";
console.log(newbtn);
 let dib = document.querySelector("div");
 div.after(newbtn);


 let newHeading = document.createElement("h1");
 newHeading.innerText= "<i>hi,Iam a new heading!</i>";
 
 let body = document.querySelector("body").prepend(newHeading);

 let parah = document.querySelector("p");
 parah.remove();






// QUESTION

let newBtn = document.createElement("button");
newBtn.innerText = "Click me!"
newBtn.style.backgroundColor = "red";
newBtn.style.color = "white";

 let selectBdy = document.querySelector("body").prepend(newBtn);


 // question 2
 let paragraph = document.querySelector("p");
 