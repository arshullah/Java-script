const URL = "https://dogapi.dog/api/v2/breeds";
const factPara = document.querySelector("#fact")



// ye async await se hua hai 

const getFacts = async () => {
    console.log("getting data.....");
    let response = await fetch(URL);
    console.log(response);// JSON format
    let data = await response.json();
    console.log(data);
};



// Ab promimse chianing se krege 
// function getFacts(){
//     fetch(URL)
//     .then((response)=>{
//      return response.json();      /// yaha pe ham ftech kr he hai aur json me data convert kr rhe h 
//     })
//     .then((data)=>{           // yha data milega
//         console.log(data);
        
//     });
// }