import { expect } from "earljs";
import { expectNumberOfArgs } from "../_internal/_test";
import all from "../../cjs/all";

describe("all", () => {
  it("accepts exact 2 arguments", () => {
    expectNumberOfArgs(all, 2, [(i) => i > 5, [4, 5, 6, 7]]);
  });

  it("checks if all array items conforms to cb", () => {
    var allGt5 = all((i) => i > 5);
    expect(allGt5([6, 7, 8, 9, 10])).toEqual(true);
    expect(allGt5([6, 7, 4, 9, 10])).toEqual(false);
  });
});
