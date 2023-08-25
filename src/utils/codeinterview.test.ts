import { TwoSum } from "./codeinterview";

describe('codeinterview', () => {
    describe('TwoSum', () => {
        it.each([
            [[0,1], [2,7,11,15], 9],
        ])(`should return %p when given %p and %p`, (expected, nums, target) => {
            expect(TwoSum(nums, target)).toBe(expected);
        })
    });
});
