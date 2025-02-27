// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers = (drivers)=>([drivers[0],drivers[1]])
// alternatively 
// const returnFirstTwoDrivers = (drivers)=>{
//     return [drivers[0],drivers[1]]
// }
//Function to return The last two drivers
const returnLastTwoDrivers= (drivers)=>([drivers[2],drivers[3]])
//This function has returnFirstTwo && LastTwoDrivers as its elements

const selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers];

//create a function that returns a function
function createFareMultiplier(myDestin){
    return  function(amountPaid){
        return myDestin*amountPaid;
    }

}
//A function fareDoubler that returns doublefare
// function fareDoubler(myfare){
//  return myfare*2;
// }
// //A function fareTrippler that tripples fare
// function fareTripler(myfare){
//     return myfare*3;
// }
//The two above functions work and return  DoubleFare and TrippleFare but we can use createFaremultiplier as indicated in Test.js

const fareDoubler = createFareMultiplier(2);
//The above implements first class function and passes an argument directly to CreatFareMultiplier
const fareTripler = createFareMultiplier(3);
 //use arrow functions
//  1) returns the first two drivers when passed returnFirstTwoDrivers() as the second argument
//       2) returns the last two drivers when passed returnLastTwoDrivers() as the second argument
 const selectDifferentDrivers =(arrayOfDrivers,anyTwoDriver)=>anyTwoDriver(arrayOfDrivers);

