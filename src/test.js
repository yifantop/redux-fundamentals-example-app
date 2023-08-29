const arr = [
  {
    id: 1
  },
  {
    id: 2
  },
  {
    id: 3
  }
];

const arr1 = [...arr, {id: 4}];

console.log(arr === arr1, arr[0] === arr1[0]);