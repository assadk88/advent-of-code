import { chunkArray } from '../../utils/array/chunkArray';
import { charCodeToAlphabetPosition } from '../../utils/string/charCodeToAlphabetPosition';
import { findStringIntersection } from '../../utils/string/findStringIntersection';
import { splitStringElementIntoTwoArrays } from '../../utils/string/splitStringElementIntoTwoArrays';

export const format = (data) => {
  return data.trim().split('\n');
};

export const part1 = (input) => {
  const data = format(input);

  return data
    .map((x) => {
      return splitStringElementIntoTwoArrays(x);
    })
    .map((array) => {
      let [SubArrayA, SubArrayB] = array;
      SubArrayA = [...new Set(SubArrayA)];
      SubArrayB = [...new Set(SubArrayB)];
      return SubArrayB.filter((value) => {
        return SubArrayA.includes(value);
      });
    })
    .flat()
    .map((y) => {
      return charCodeToAlphabetPosition(y);
    })
    .reduce((i, a) => {
      return i + a;
    });
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
    .reduce((i, a) => {
      return i + a;
    });
};
