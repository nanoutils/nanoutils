import { expect } from "earljs";
import { expectNumberOfArgs } from "../_internal/_test";
import allPass from "../../cjs/allPass";

describe("allPass", () => {
  it("it accepts exact 2 arguments", () => {
    expectNumberOfArgs(allPass, 2, [[(i) => i > 1, (i) => i < 2], 1]);
  });

  it("checks if all array items conforms to cb", () => {
    var gt5Lt10 = allPass([(i) => i < 10, (i) => i > 5]);
    expect(gt5Lt10(6)).toEqual(true);
    expect(gt5Lt10(4)).toEqual(false);
    expect(gt5Lt10(10)).toEqual(false);
  });
});
