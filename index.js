// Code your solution in this file!
let drivers = ["Amy", "John", "Joy", "Joshua"];
function returnFirstTwoDrivers(drivers) {
  return drivers.slice(0, 2);
}
function returnLastTwoDrivers(drivers) {
  return drivers.slice(-2);
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
const createFareMultiplier = function (multiply) {
  return function (num) {
    return num * multiply;
  };
};
const fareDoubler = function (num1) {
  return num1 * 2;
};
const fareTripler = function (num) {
  return num * 3;
};
const selectDifferentDrivers = function (arrayOfDrivers, selectorFunction) {
  return selectorFunction(arrayOfDrivers);
};
