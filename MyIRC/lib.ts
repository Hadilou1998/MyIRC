
function addToArray(tab:string[], value:string){
    tab.push(value);
}


function removeToArray(tab:string[], value:string){
    const start = tab.indexOf(value);
    tab.splice(start, 1);
    // return tab;
}


function checkArray(tab:string[], value:string){
    if(tab.includes(value)){
        return true;
    } else {
        return false;
    }
}

function printArray(tab:string[]){
    tab.forEach(element => {
        console.log(element);
    });
}


export default {addToArray, removeToArray, checkArray, printArray}


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

