// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers = function() 
{
    return drivers.slice(0,2);
}

const returnLastTwoDrivers = function()
{
    return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(number) {
    return function (fareMultiplier) {
        return fareMultiplier * number
    }
}

const fareDoubler = function(fareMultiplier){
    return createFareMultiplier(2)(fareMultiplier)
}

const fareTripler = function(fareMultiplier){
    return createFareMultiplier(3)(fareMultiplier)
}

function selectDifferentDrivers(arrayOfDrivers, drivers) {
    return drivers(arrayOfDrivers)
}

selectDifferentDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'], returnLastTwoDrivers);
selectDifferentDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'], returnFirstTwoDrivers);