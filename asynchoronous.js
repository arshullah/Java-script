// setTimeout(() => {
// console.log("ARSHULLAH");

// }, 2000);


//call backs
function sum(a, b) {
    console.log(a + b);

}


function calculator(a, b, sumCallback) {
    sumCallback(a, b);
}

calculator(1, 2, (a, b) => {
    console.log(a + b);
    
});



// const hello = () => {
    //     console.log("hello");
    
    // }
    // setTimeout(hello,3000);
    
    
    
    
    
    
    /// ye hamne callbak hell ke liye samja hai  
    /// nesting condition
    
    // let age = 19;
    // if (age >= 18) {
        //     if (age >= 60) {
            
//         console.log("senior");
//     }
//     else {
    //         console.log("middle");
    
    //     }
    // }
    // else {
        //     console.log("child");
        
        // }
        
// /// nested loop

// for (let i = 0; i < 5; i++) {
//     let str = "";
//     for (let j = 0; j < 5; j++) {
//         str = str + j;

//     }
//     console.log(i, str);
// }


///async await 

async function hello (){
    console.log("hello");
    
}

function api(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
         console.log("weather data");
        resolve(200);
     },2000);
    });
}

async function getWeatherData(){
    await api (); //1st call
    await api ();//2nd call
}


function getData(dataId){
 return new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log("data", dataId);
        resolve("success");
    }, 2000);
 });

}

//isme async awail use krna 
async function getAlladata(){
    console.log("getting data1......");
    await getData(1);
    console.log("getting data2......");
    await getData(2);
    console.log("getting data3......");
    await getData(3);
    console.log("getting data4......");
    await getData(4);
    console.log("getting data5......");
    await getData(5);
    console.log("getting data6......");
    await getData(6);
    console.log("getting data7......");
    await getData(7);
}

//isko IIFE banayege 

// (async function (){
//     console.log("getting data1......");
//     await getData(1);
//     console.log("getting data2......");
//     await getData(2);
//     console.log("getting data3......");
//     await getData(3);
//     console.log("getting data4......");
//     await getData(4);
//     console.log("getting data5......");
//     await getData(5);
//     console.log("getting data6......");
//     await getData(6);
//     console.log("getting data7......");
//     await getData(7);
// })();
    
    //promise chain 
    getData(1).then((res)=>{
return getData(2);
})
.then((res)=>{
    console.log(res);
    
})



//call back hell


getData(1, () => {
        console.log("getting data2.....");
    
        getData(2, () => {
                console.log("getting data3.....");
        
                getData(3, () => {
                        console.log("getting data4.....");
            
                        getData(4);
                    });
                });
            });
            
            
            //data1
            //data1
            //data1
            
            
            
            
            ////Promise
            
            
//             const getPromise = () => {
//                 return new Promise((resolve,reject) => {
//         console.log("I am promise");
//         // resolve("success");
//         reject("some error occured");
//     });
// }

// let promise = getPromise();      //agar resolve hoga toh .then use hoga 
// promise.then((res)=>{
//     console.log("promise fullfilled",res);
    
// });


// promise.catch((err)=>{
//     console.log("rejected",err);
    
// });






//promise chain

// function asyncFunc1() {
//     return new Promise((resolve,reject)=>{
//      setTimeout(()=>{
//         console.log(" data1");
//        resolve("success") 
//      },4000)
//     });
// }
// function asyncFunc2() {
//     return new Promise((resolve,reject)=>{
//      setTimeout(()=>{
//         console.log(" data2");
//        resolve("success") 
//      },4000)
//     });
// }

// console.log("fetching data1");

// let promise1 = asyncFunc1();
// promise1.then((res)=>{
//     console.log("fetching data 2...");
//     let promise2 = asyncFunc2();
//     promise2.then((res)=>{

        
//     })
// });

