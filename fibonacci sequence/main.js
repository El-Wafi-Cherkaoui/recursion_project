// Using iteration, write a function fibs which takes 
// a number and returns an array containing that many numbers 
// from the Fibonacci sequence. Using an example input of 8, 
// this function should return the array [0, 1, 1, 2, 3, 5, 8, 13].

function fibs(number){
    if (number == 0) return []
    else if (number == 1) return [0]

    let fib_list = [0, 1]
    for (let i = 2; i < number; i++) {
        let prev = fib_list[fib_list.length-1]
        let p_prev = fib_list[fib_list.length-2]
        
        fib_list.push(prev + p_prev)
    }    
    return fib_list
}

// Now write another function fibsRec which solves the same problem recursively.
// 1 => [0]
// 2 => [0, 1]
// 3 => [0, 1, 1]
// 4 => [0, 1, 1, 2]
function fibsRec(number) {
    if(number == 0) return []
    else if (number == 1) return [0]
    else if (number == 2) return [0, 1]
    
    let result = fibsRec(number -1) 
    result.push(result[result.length-1] + result[result.length-2])
    return result
}
console.log(fibs(500000))
// console.log(fibsRec(50000));

