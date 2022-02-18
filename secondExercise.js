
function fillArrayWithSquares(array){
    let arrayToFill = [];
    for(let i=0; i <= array.length; i++){
        arrayToFill.push(array[i]*array[i]);
    }
    return arrayToFill;
}

function order(array){
    return fillArrayWithSquares(array)
        .sort( 
            function (a,b){ 
                return a - b 
            } 
        );
}

console.log(order([1,3,4,7,6]));