// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
  return drivers.slice(0, 2);
};
const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(-2);
};
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
