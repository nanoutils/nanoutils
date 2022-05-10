import { expect } from "earljs";
import o from "./";

describe("o", () => {
  it("composes functions with only one argument", () => {
    const x = (a, b = 0) => a + b;
    const y = (a, b = 0) => a + b;
    expect(o(x, y)(1, 2)).toEqual(1);
  });

  it("applies 2nd function then 1st", () => {
    const plus1 = (x) => x + 1;
    const mult2 = (x) => x * 2;
    expect(o(mult2, plus1, 5)).toEqual(12);
  });
});
