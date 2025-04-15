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

let age = 19;
if (age >= 18) {
    if (age >= 60) {

        console.log("senior");
    }
    else {
        console.log("middle");

    }
}
else {
    console.log("child");

}

/// nested loop

for (let i = 0; i < 5; i++) {
    let str = "";
    for (let j = 0; j < 5; j++) {
        str = str + j;

    }
    console.log(i, str);
}



//call back hell

function getData(dataId, getNextData)
//2second
{
    setTimeout(() => {
        console.log("data", dataId);
        if (getNextData) {
            getNextData();

        }
    }, 2000);

}

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