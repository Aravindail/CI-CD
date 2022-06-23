import { minus } from "@/helpers/minus/minus";

describe("minus", function () {
  it("positive", () => {
    expect(minus(5, 5)).toBe(0);
  });

  it("negative", () => {
    expect(minus(-5, -5)).toBe(0);
  });
});
