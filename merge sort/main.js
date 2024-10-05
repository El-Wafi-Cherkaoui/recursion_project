// Build a function mergeSort that takes in an array and returns a sorted array, 
// using a recursive merge sort methodology. 
// An input of [3, 2, 1, 13, 8, 5, 0, 1] 
// should return [0, 1, 1, 2, 3, 5, 8, 13], 
// and an input of [105, 79, 100, 110] should return [79, 100, 105, 110].
function mergeSort(array) {
    
    if(array.length <= 1) return array
    if(array.length == 2){
        if(array[0] > array[1]){
            return [array[1], array[0]]
        }
        else return array
    }

    array = array.pop()
    return mergeSort(array).push(array)
}

// [1,3,2]
// [1,3] 
console.log(mergeSort([3,1]))