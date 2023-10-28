function fibs(n) {
  const arr = [];
  let a = 0;
  let b = 1;
  let c = a + b;

  if (n === 1) {
    arr.push(a);
  } else if (n === 2) {
    arr.push(a);
    arr.push(b);
  } else {
    for (let i = 1; i <= n; i++) {
      if (i === 1) {
        arr.push(a);
      } else if (i === 2) {
        arr.push(b);
      } else {
        arr.push(c);
        a = b;
        b = c;
        c = a + b;
      }
    }
  }

  return arr;
}

fibs(8);
