let buttonOne = document.querySelector("#oneid");

// buttonOne.onclick = (evt) => {
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX, evt.clientY); 
// }

buttonOne.addEventListener("click", (e) => {
    console.log("'buuton1 was clicked handler -1 ");
    
    
} );
buttonOne.addEventListener("click", (e) => {
    console.log("'buuton1 was clicked handler-2");
    
    
} );

const hendler3 = (e) => {
    console.log("'buuton1 was clicked handler-3");
    
    
} 
buttonOne.addEventListener("click", (e) => {
    console.log("'buuton1 was clicked handler-4");
    
    
} );

buttonOne.removeEventListener("click", hendler3)

// let box = document.querySelector("div");
// box.onmouseover = (evt) => {
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX, evt.clientY);  
// }



// create a toggle button that changes the screen to dark-mode when clicked & light mode when clicked again?
let modebtn = document.querySelector("#twoid");
let body = document.querySelector("body");

let currentMode = "light";
modebtn.addEventListener("click", ()=> {
    // console.log("I trying to change mode");
    if(currentMode === "light"){
        currentMode= "dark";
        body.classList.add("dark")
        body.classList.remove("light")
    } else{
        currentMode= "light";
        body.classList.add("light");
        body.classList.remove("dark")
    }
    console.log(currentMode);
    
});
