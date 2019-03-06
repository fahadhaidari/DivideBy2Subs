const array = [1, 2, 4, 8, 10, 0.3, 16, 32, 64, 128, 256, 512];

const divBy2Subs = (n, arr, i, map) => {
  if (n / 2 < 0.1) {
    i ++;
    return divBy2Subs(arr[i], arr, i, map);
  }

  if (!map[arr[i]] && arr[i]) map[arr[i]] = [];

  if (i >= arr.length) return map;

  const res = n / 2;

  map[arr[i]].push(res);

  return divBy2Subs(res, arr, i, map);
}

console.log(divBy2Subs(array[0], array, 0, {}));