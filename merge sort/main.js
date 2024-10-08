// Build a function mergeSort that takes in an array and returns a sorted array, 
// using a recursive merge sort methodology. 
// An input of [3, 2, 1, 13, 8, 5, 0, 1] 
// should return [0, 1, 1, 2, 3, 5, 8, 13], 
// and an input of [105, 79, 100, 110] should return [79, 100, 105, 110].
function split(array) {
    if(array.length <= 1) return array

    let mid = Math.floor(array.length / 2)
    let left_array = array.slice(0, mid)
    let right_array = array.slice(mid)

    return merge(split(left_array), split(right_array))
}  

function merge(left, right) {
    
    let new_array = []
    let l_index = 0
    let r_index = 0
    
    console.log(left, right);
    while (new_array.length < (left.length + right.length)){
        if(left[l_index] < right[r_index] || typeof(right[r_index])=='undefined'){
            new_array.push(left[l_index])
            l_index++
        }
        else{
            new_array.push(right[r_index] || typeof(left[l_index])=='undefined')
            r_index++
        }
    }
    return new_array
}

console.log(split([2,1,4,5,3]))