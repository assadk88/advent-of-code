import { format, part1, part2 } from './main';
import { input } from './input';

describe('Day 2', () => {
  test('Part 1', () => {
    const result = part1(input);
    expect(result).toBe(14163);
  });

  test('Part 2', () => {
    const result = part2(input);
    expect(result).toBe(12091);
  });
});
