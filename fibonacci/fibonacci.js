function fibs(n) {
  const arr = [0, 1];
  let a = 0;
  let b = 1;
  let c = a + b;

  if (n === 1) return [0];
  if (n === 2) return arr;
  for (let i = 3; i <= n; i++) {
    arr.push(c);
    a = b;
    b = c;
    c = a + b;
  }

  return arr;
}

fibs(8);

function fibsRec(n) {
  if (n == 0) return [0];
  if (n == 1) return [0, 1];
  const arr = fibsRec(n - 1);
  return [...arr, arr[n - 1] + arr[n - 2]];
}

fibsRec(9);
