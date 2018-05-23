unsortedArray1 = [3,2,1,4,12,14]
unsortedArray2 = [2,4,2,1,8,0,3,1]
unsortedArray3 = [100,12,32,1,5,6,1,-90]

function bubbleSort (array) {
  const swap = (index) => {
    let temp = array[index]
    array[index] = array[index + 1]
    array[index + 1] = temp
  }

  let sorted = false
  let largestNum = array.length - 1

  while (sorted === false && largestNum > 0) {
      let changed = false
      for (let i = 0; i < largestNum; i++) {
          if (array[i] > array[i + 1]) {
              swap(i)
              changed = true
          }
      }
      if (!changed) sorted = true
      largestNum--
  }
  return array
}

console.log(bubbleSort(unsortedArray1))
console.log(bubbleSort(unsortedArray2))
console.log(bubbleSort(unsortedArray3))