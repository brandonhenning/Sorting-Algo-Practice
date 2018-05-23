let unsortedArray = [2,4,1,6]

function insertSort (array) {
    array.forEach((number, index) => {
        if (index !== 0) {
            if (number > number[index - 1]) {
              console.log('found one')
            }
        }
    })
    console.log(array)
}

insertSort(unsortedArray)