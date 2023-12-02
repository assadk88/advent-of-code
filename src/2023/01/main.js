const format = (input) => {
  return input.trim().split('\n');
};

const extractNumbersFromLine = (line) => {
  const firstNumber = line.filter((char) => {
    return (
      typeof parseInt(char, 10) === 'number' &&
      !Number.isNaN(parseInt(char, 10))
    );
  });
  const lastNumber = line.reverse().filter((char) => {
    return (
      typeof parseInt(char, 10) === 'number' &&
      !Number.isNaN(parseInt(char, 10))
    );
  });
  return firstNumber[0] + lastNumber[0];
};

// const extractNumbersFromMixedLine = (line) => {
//   numbers;
// };

const numbers = [
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10'
];

const numbersMapping = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  ten: 10
};

const convertStringRepresentationToNumber = (number) => {
  return typeof parseInt(number) === 'number' && !Number.isNaN(parseInt(number))
    ? parseInt(number)
    : numbersMapping[number];
};

export const part1 = (input) => {
  return format(input)
    .map((line) => {
      return line.split('');
    })
    .map((charSplitLine) => {
      return extractNumbersFromLine(charSplitLine);
    })
    .map((tuple) => {
      return parseInt(tuple, 10);
    })
    .reduce((acc, iv) => {
      return acc + iv;
    });
};

export const part2 = (input) => {
  const formattedInput = format(input);
  formattedInput.map((line) => {
    return numbers.slice(8);
  });
  console.log(
    formattedInput
      .map((line) => {
        return numbers.map((number) => {
          return line.includes(number) ? number : '';
        });
      })
      .map((line) => {
        return line.filter((lineItem) => {
          return lineItem;
        });
      })
    // .map((line) => {
    //   return parseInt(
    //     [
    //       convertStringRepresentationToNumber(line[0]),
    //       convertStringRepresentationToNumber(line[line.length - 1])
    //     ].join('')
    //   );
    // })
    // .reduce((acc, iv) => {
    //   return acc + iv;
    // })
  );
};
