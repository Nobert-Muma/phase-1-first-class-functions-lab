// Code your solution in this file!
const returnFirstTwoDrivers = (drivers) => drivers.slice(0, 2);
const returnLastTwoDrivers = (drivers) => drivers.slice(-2);
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
const createFareMultiplier = (multiplier) => (fare) => fare * multiplier;
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);
const selectDifferentDrivers = (drivers, selectionFunction) => 
  selectionFunction(drivers);
const driverList = ['Antonia', 'Nuru', 'Amari', 'Mo'];
console.log(returnFirstTwoDrivers(driverList)); 
console.log(returnLastTwoDrivers(driverList)); 
console.log(selectingDrivers(driverList, returnFirstTwoDrivers)); 
console.log(selectingDrivers(driverList, returnLastTwoDrivers));  
const initialFare = 100;
console.log(fareDoubler(initialFare)); 
console.log(fareTripler(initialFare));
