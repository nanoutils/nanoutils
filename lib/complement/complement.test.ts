import { expect } from "earljs";
import T from "../../cjs/T";
import F from "../../cjs/F";
import complement from "../../cjs/complement";

describe("complement", () => {
  it("should invert value", () => {
    expect(complement(T)()).toEqual(false);
    expect(complement(F)()).toEqual(true);
  });

  it("should pass arguments to callback", () => {
    expect(complement((a, b) => a || b)(true, true)).toEqual(false);
    expect(complement((a, b) => a || b)(false, false)).toEqual(true);
  });
});
