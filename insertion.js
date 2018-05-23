let unsortedArray1 = [2,4,1,6]
let unsortedArray2 = [2,4,1,78,333,22,2,98,-92,5]
let unsortedArray3 = [3,2,1,0,8,7,2,1,4,6,8000]

function insertSort (array) {
    for (let i = 1; i < array.length; i++) {
        let key = array[i]
        let j = i - 1
        while (j >= 0 && key < array[j]) {
            array[j + 1] = array[j]
            j -= 1
            array[j + 1] = key
        }
    }
    return array
}


console.log(insertSort(unsortedArray1))
console.log(insertSort(unsortedArray2))
console.log(insertSort(unsortedArray3))