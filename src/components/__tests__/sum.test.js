import { sum } from "../sum";
test("Check the sum of two positive numbers", () => {
  expect(sum(2, 5)).toBe(7);
});
