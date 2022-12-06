import { splitStringElementIntoTwoArrays } from '../utils/string/splitStringElementIntoTwoArrays';
import { chunkArray } from '../utils/array/chunkArray';

export const format = (data) => {
  return data.trim().split('\n');
};

export const part1 = (input) => {
  const data = format(input);

  return data
    .map((x) => splitStringElementIntoTwoArrays(x))
    .map((array) => {
      let [SubArrayA, SubArrayB] = array;
      SubArrayA = [...new Set(SubArrayA)];
      SubArrayB = [...new Set(SubArrayB)];
      return SubArrayB.filter((value) => SubArrayA.includes(value));
    })
    .flat()
    .map((x) => {
      return x.charCodeAt(0) >= 65 && x.charCodeAt(0) <= 97
        ? x.charCodeAt(0) - 38
        : x.charCodeAt(0) - 96;
    })
    .reduce((i, a) => i + a);
};

export const part2 = (input) => {
  const data = chunkArray(format(input), 3);

  function threeElementFilter(array) {
    let [a, b, c] = array;

    a = a.split('');
    b = b.split('');
    c = c.split('');

    return a
      .filter((v) => {
        return b.includes(v);
      })
      .filter((v) => {
        return c.includes(v);
      })[0];
  }

  return data
    .map((v) => {
      return threeElementFilter(v);
    })
    .flat()
    .map((x) => {
      return x.charCodeAt(0) >= 65 && x.charCodeAt(0) <= 97
        ? x.charCodeAt(0) - 38
        : x.charCodeAt(0) - 96;
    })
    .reduce((i, a) => i + a);
};
