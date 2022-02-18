function arrayChanges(array, max){
    let newArray = [];
    for (let i = 0; i<= array.length - 1; i++){
        let sumPerPart = 0;
        if (array[i] !== max){
            sumPerPart = array[i];
            newArray.push(sumPerPart);
        }
        for (let j = i+1; j <= array.length - 1; j++){
            if (array[i] !== max && array[j] !== max){
                sumPerPart = sumPerPart + array[j];
                newArray.push(sumPerPart);
            }
            
        };
    };
    return newArray.sort( 
        function (a,b){ 
            return a - b 
        } 
    );
};

function minimunChange(array){
    let max = Math.max(...array);
    let changesArray = arrayChanges(array, max);
    console.log(changesArray);
    for(let i = 0; i<= changesArray.length; i++){
        if (    !(changesArray[i] === changesArray[i+1]) &&
                !(changesArray[i] + 1 === changesArray[i+1])
            ){
                return changesArray[i] + 1;
        }
    } 
}


console.log(minimunChange([1,1,2,3,4,9,59]));


