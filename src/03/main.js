import { splitStringElementIntoTwoArrays } from '../utils/string/splitStringElementIntoTwoArrays';
import { chunkArray } from '../utils/array/chunkArray';
import { charCodeToAlphabetPosition } from '../utils/string/charCodeToAlphabetPosition';
import { findStringIntersection } from '../utils/string/findStringIntersection';

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
    .map((y) => {
      return charCodeToAlphabetPosition(y);
    })
    .reduce((i, a) => i + a);
};

export const part2 = (input) => {
  const data = chunkArray(format(input), 3);

  return data
    .map((x) => {
      return findStringIntersection(x);
    })
    .flat()
    .map((y) => {
      return charCodeToAlphabetPosition(y);
    })
    .reduce((i, a) => i + a);
};
