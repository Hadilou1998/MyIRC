"use strict";
exports.__esModule = true;
function addToArray(tab, value) {
    tab.push(value);
}
function removeToArray(tab, value) {
    var start = tab.indexOf(value);
    tab.splice(start, 1);
    // return tab;
}
function checkArray(tab, value) {
    if (tab.includes(value)) {
        return true;
    }
    else {
        return false;
    }
}
function printArray(tab) {
    tab.forEach(function (element) {
        console.log(element);
    });
}
exports["default"] = { addToArray: addToArray, removeToArray: removeToArray, checkArray: checkArray, printArray: printArray };
// let userConnect = []; 
// userConnect.push('hello');
// userConnect.push('salut');
// // console.log(userConnect.length); 
// // const fruits = [];
// // fruits.push('banana', 'apple', 'peach');
// // console.log(fruits.length); 
// addToArray(userConnect,'yes');
// userConnect.forEach(user => {
//     console.log(user);
// });
// console.log('---------------')
// removeToArray(userConnect,'hello');
// userConnect.forEach(user => {
//     console.log(user);
// });
// console.log('----------------')
// console.log(checkArray(userConnect,'yes'));
