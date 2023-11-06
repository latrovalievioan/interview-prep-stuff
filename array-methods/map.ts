const _map = (array: any[], fn: (x: any, i: number, array: any[]) => any) => {
  const result: any[] = [];
  for (let i = 0; i < array.length; i++) {
    result[i] = fn(array[i], i, array);
  }

  return result;
};

const xs = [1, 2, 3, 4, 5];

const t = xs.map((x) => x * 2);
const t1 = _map(xs, (x) => x * 2);

console.log(t, t1);
