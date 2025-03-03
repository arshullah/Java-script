// ARRAYS IN JAVASCRIPT

// let marks = [97,66,76,54,89];
// console.log(marks);
// console.log(marks.length); // property


// let heroes = ["prophet Muhammad", "abu bakar","Umar","usman","Ali","Hasan","Husain"]
// console.log(heroes);
// console.log(heroes.length );
// console.log(heroes[6]);


//ARRAY IN LOOP
// let languages = ["Javascript","html",'css',"Ruby","Java","Python","c++","react","mongoDB","MySQL"]
// for (let index = 0; index < languages.length; index++) {
//     console.log(languages[index]);
// }


//for of loop mostly used in array compare than for in 
// for (let programming of languages) {
//     console.log(programming);
    
// }




// <--------------------------------------->
// let cities = ["Delhi","'Lucknow","Mumbai","Noida","Punjab","kanpur"];
// for (const city of cities) {
//     console.log(city.toUpperCase());
    


//<---------------------------------------------------->
// For given array with the marks of student -> [85,97,44,37,76,60]
//find the average marks of the entire class.

// let mark = [ 85,97,44,37,76,60];
// let sum = 0;

// for (const val of mark) {
//    sum = sum + val;
    
// }
// let avg = sum / mark.length;
// console.log(avg ,'avg marks of the class');




//practice question

// let marks =[66,78,45,67,44]
//  let add = 0;

//  for(let i = 1; i<= 5; i++){
//     add = add + mark[i];
//  }
// console.log(add);




//for a given array with prices of 5 items --> [250,645,300,900,50,]
//All items have an offers of 10% off on them >change the array to store final price after applying offer.

// let items = [250,645,300,900,50];

// let i = 0;
// for(let price of items){
//    // console.log(`value at index ${i} = ${price}`);
//    let offer = price /10;
//    items[i] = items[i] - offer
//    console.log(`value after offer = ${items[i]}`);
   
//    i++;
// } 


//by for loop
// let items = [250,645,300,900,50]
// for(let i = 0; i<items.length; i++){
//    let offer = items[i] / 10;
// items[i] = items[i] - offer
// }
// console.log(items);





//ARRAY METHODS 

// let food = ["potato","apple","mangoes","litchi","tomato"]
// food.pop()
// let deletedItem = food.pop();
// console.log(food );
// console.log(deletedItem);


// let item = ["potato","apple","mangoes","litchi","tomato"]
// console.log(item);
// console.log(item.toString());


//concat method
// let bollywood_heroes =['salman','shahraukh','aamir','imran','nawazuddin'];
// let marvel_heroes =['thor','batman','superman','spiderman','hulk'];
// let indian_heroes  = ['shaktimaan','baalveer','sakkalakkaboomboom','krish']
// let heroes = bollywood_heroes.concat(marvel_heroes,indian_heroes)

// console.log(heroes);



//unshift() Method

// let array = ['arshullah','irfan','bhaijaan','mohsin'];
// array.unshift("arsh")
// console.log(array);




//Shift () method
// let array =[1,3,4,8,12,6]
// let arrays = array.shift();
// console.log(array);




// slice method

// let animal = ['monket','lion','tiger','fox','rat','elephant'];
// console.log(animal);
// console.log(animal.slice(1,3));




//SPLICE () METHOD

// let array =[1,2,3,4,5,6,7,8,9];
// console.log(array);
// let arrays = array.splice(3,6,12,14)
// console.log(array);



// create an array and stores companys --> "Bloomberg","microsoft","uber","google","IBM","netflix"
// remove the first element in the array
// remove uber and ola in array
//amazon add at the end

// let companies = ['Bloomberg','Microsoft','Uber','Google','IBM','netflix']
// let array = companies.shift();
// let arrays = companies.splice(1,"1","ola")
// let new_array = companies.push("amazon")
// console.log(companies);


