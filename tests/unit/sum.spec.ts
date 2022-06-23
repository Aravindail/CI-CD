import { sum } from "@/helpers/sum/sum";

describe("sum", function () {
  it("positive", () => {
    expect(sum(5, 5)).toBe(10);
  });

  it("negative", () => {
    expect(sum(-5, -5)).toBe(-10);
  });
});
