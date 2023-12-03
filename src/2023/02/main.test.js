import { part1, part2 } from './main';
import { input } from './input';

describe('2023', () => {
  describe('Day 1', () => {
    test('Part 1', () => {
      const result = part1(input);
      console.log(result);
      // expect(result).toBe(54239);
    });

    test('Part 2', () => {
      const result = part2(input);
      console.log(result); // Display console output
      // expect(result).toBe(206104);
    });
  });
});
