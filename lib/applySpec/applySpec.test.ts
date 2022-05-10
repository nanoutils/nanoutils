import { expect } from "earljs";
import { expectNumberOfArgs } from "../_internal/_test";
import applySpec from "../../cjs/applySpec";

describe("applySpec", () => {
  it("it accepts exact 2 arguments", () => {
    expectNumberOfArgs(applySpec, 2, [{ a: (x) => x * 2, b: (x) => x - 2 }, 2]);
  });

  it("returns object with applied function", () => {
    const res = applySpec({
      sum: (a, b) => a + b,
      nested: {
        mul: (a, b) => a * b,
      },
    })(2, 4);
    expect(res).toEqual({
      sum: 6,
      nested: { mul: 8 },
    });
  });
});
