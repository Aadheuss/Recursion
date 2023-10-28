const arr = [7, 4, 3, 8, 1];

function mergeSort(arr) {
  const startIndex = 0;
  const endIndex = arr.length - 1;

  if (startIndex < endIndex) {
    const midIndex = (startIndex + endIndex) / 2;
    const leftArr = arr.slice(startIndex, midIndex + 1);
    const rightArr = arr.slice(midIndex + 1);
    const lA = mergeSort(leftArr);
    const rA = mergeSort(rightArr);
    return merge(lA, rA);
  } else {
    return arr;
  }
}

function merge(leftArr, rightArr) {
  const leftArrEndIndex = leftArr.length - 1;
  const rightArrEndIndex = rightArr.length - 1;
  const newArr = [];
  let i = 0;
  let j = 0;
  let k = 0;

  while (i <= leftArrEndIndex && j <= rightArrEndIndex) {
    if (leftArr[i] < rightArr[j]) {
      newArr[k++] = leftArr[i++];
    } else {
      newArr[k++] = rightArr[j++];
    }
  }

  for (; i <= leftArrEndIndex; i++) {
    newArr[k++] = leftArr[i];
  }

  for (; j <= rightArrEndIndex; j++) {
    newArr[k++] = rightArr[j];
  }

  return newArr;
}

mergeSort(arr);
