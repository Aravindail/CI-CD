import { sum } from "@/helpers/sum/sum";

describe("sum", function () {
  test("positive", () => {
    expect(sum(5, 5)).toBe(10);
  });

  test("negative", () => {
    expect(sum(-5, -5)).toBe(-10);
  });
});
