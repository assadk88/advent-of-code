import { format, part1, part2 } from './main';
import { input } from './input';

describe('Day 3', () => {
  test('Part 1', () => {
    const result = part1(input);
    expect(result).toBe(8401);
  });

  test('Part 2', () => {
    const result = part2(input);
    expect(result).toBe(2641);
  });
});
