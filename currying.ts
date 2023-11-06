const tests = [
  {
    l: 4,
    w: 5,
    h: 1,
  },
  {
    l: 1000,
    w: 734,
    h: 32,
  },
  {
    l: 241,
    w: 513,
    h: 124,
  },
  {
    l: 1241,
    w: 1,
    h: 23,
  },
  {
    l: 0,
    w: 1,
    h: 242,
  },
  {
    l: 13414,
    w: 441,
    h: 244,
  },
];

const calculateVolume = (length: number, width: number, height: number) =>
  length * width * height;

const curriedCalculateVolume =
  (length: number) => (width: number) => (height: number) =>
    length * width * height;

tests.forEach((t) => {
  console.log(calculateVolume(t.l, t.w, t.h));
  console.log(curriedCalculateVolume(t.l)(t.w)(t.h));
  console.log(
    calculateVolume(t.l, t.w, t.h) === curriedCalculateVolume(t.l)(t.w)(t.h)
  );
});

//TYPE SIGNATURES

type CalculateVolume = (
  length: number,
  width: number,
  height: number
) => number;

type CurriedCalculateVolume = (
  length: number
) => (width: number) => (height: number) => number;
