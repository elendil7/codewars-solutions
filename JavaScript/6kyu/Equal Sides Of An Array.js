function findEvenIndex(a) {
  let sum = 0, leftSum = 0;

  for (var i = 0; i < a.length; i++) {
    sum += a[i];
  }
  for (var i = 0; i < a.length; i++) {
    sum -= a[i];

    if (leftSum === sum) {
      return i;
    }

    leftSum += a[i];
  }

  return -1;
}
