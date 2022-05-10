import { expect } from "earljs";
import { expectNumberOfArgs } from "../_internal/_test";
import always from "../../cjs/always";

describe("always", () => {
  it("it accepts exact 1 argument", () => {
    // HACK: call a function without an argument second time
    expectNumberOfArgs(always, 2, [1, undefined]);
  });

  it("returns value given in 1st argument", () => {
    expect(always(1)()).toEqual(1);
  });
});
