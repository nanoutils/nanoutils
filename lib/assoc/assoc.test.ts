import { expect } from "earljs";
import { expectNumberOfArgs } from "../_internal/_test";
import assoc from "../../cjs/assoc";

describe("assoc", () => {
  it("accepts exact 3 arguments", () => {
    expectNumberOfArgs(assoc, 3, ["c", 1, { c: 2 }]);
  });

  it("sets value by its path", () => {
    expect(assoc("b", 3, { b: 2 })).toEqual({ b: 3 });
  });

  it("works correctly for arrays", () => {
    const val = assoc(0, 11, [1, 2, 3]);
    expect(val).toEqual([11, 2, 3]);
  });
});
