
function removeDuplicates(arr){
    const copy =[];
    for(const item of arr){
        if(copy.includes(item)===false){
            copy.push(item)
        }
    }
    return copy;
}

console.log(removeDuplicates([5, 3, 5, 2, 3, 9, 2, 7]));