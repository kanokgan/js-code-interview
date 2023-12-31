export const TwoSum = (nums: number[], target: number): number[] => {
  const hashTable = new Map();
  for (var i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (hashTable.has(diff)) {
      return [hashTable.get(diff), i];
    }
    hashTable.set(nums[i], i);
  }
  return [];
};

export const ValidParentheses = (s: string): boolean => {
  if (s == null || s.length < 2 || s.length % 2 == 1) return false;

  const dict = new Map();
  dict.set("}", "{");
  dict.set(")", "(");
  dict.set("]", "[");

  let openBracket: string[] = [];

  for (const c of s) {
    if (["(", "[", "{"].includes(c)) {
      openBracket.push(c);
    } else if (openBracket.pop() !== dict.get(c)) {
      return false;
    }
  }

  if (openBracket.length != 0) return false;

  return true;
};

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
class ListNode {
  val: number
  next: ListNode | nuill
  constructor(val?: number, next?: ListNode | null) {
}
export const mergeTwoLists = (
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null => {};
