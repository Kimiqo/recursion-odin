function fibRec(num){
    if(num < 2) return num;
    return (fibRec(num-1)+fibRec(num-2));
}
 
function fib(num){
    if (num == 0){
        return [];
    }else if(num == 1){
        return [0];
    }else{
        let arr = [0,1];
        for (let index = 2; index < num; index++) {
            arr[index] = arr[index-1] + arr[index-2];
        }
        return arr;
    }
}

console.log(fibRec(8));
console.log(fib(8));

function mergeSort(init_arr) {
    if (init_arr.length <= 1) {
        return init_arr;
    }
    
    // Divide the init_array into two halves
    const mid = Math.floor(init_arr.length / 2);
    const left = init_arr.slice(0, mid);
    const right = init_arr.slice(mid);
    
    // Recursively sort both halves
    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);
    
    // Merge the sorted halves
    return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
    let sortedinit_array = [];
    let i = 0, j = 0;
    
    // Merge the two halves while comparing elements
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            sortedinit_array.push(left[i]);
            i++;
        } else {
            sortedinit_array.push(right[j]);
            j++;
        }
    }
    
    // Concatenate the remaining elements
    return sortedinit_array.concat(left.slice(i)).concat(right.slice(j));
}

// Example usage:
const init_array = [38, 27, 16, 43, 3, 9, 82, 10];
const sortedinit_array = mergeSort(init_array);
console.log(sortedinit_array);  // Output: [3, 9, 10, 16, 27, 38, 43, 82]
