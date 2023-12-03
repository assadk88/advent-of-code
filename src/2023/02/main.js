const format = (input) => {
  return input.trim().split('\n');
};

export const part1 = (input) => {
  return format(input)
    .map((line) => {
      return line.replace(/Game\s\d+:\s/g, '');
    })
    .map((line) => {
      return line.match(/\d+\s(g|b|r)/g);
    })
    .map((lineArrayRep) => {
      return lineArrayRep.map((arrayItems) => {
        const array = []
        return arrayItems;
      });
    });
};

export const part2 = (input) => {};
