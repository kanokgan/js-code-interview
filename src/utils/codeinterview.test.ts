import { TwoSum, ValidParentheses } from "./codeinterview";

describe('codeinterview', () => {
    describe('TwoSum', () => {
        it.each([
            [[0,1], [2,7,11,15], 9],
            [[1,2], [3,2,4], 6],
            [[0,1], [3,3], 6],
        ])(`should return %p when given %p and %p`, (expected, nums, target) => {
            expect(TwoSum(nums, target)).toEqual(expected);
        })
    });

    describe('ValidParentheses', () => {
        it.each([
            [true, "()"],
            [true, "()[]{}"],
            [false, "(){"],
            [false, "(]"],
            [false, "("],
        ])(`should return %p when given %p`, (expected, input) => {
            expect(ValidParentheses(input)).toBe(expected);
        })
    });
});
