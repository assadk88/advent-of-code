import { part1, part2 } from './main';
import { input } from './input';

describe('Day 1', () => {
  test.skip('Part 1', () => {
    const result = part1(input);
    expect(result).toBe(69310);
  });

  test.skip('Part 2', () => {
    const result = part2(input);
    expect(result).toBe(206104);
  });
});
