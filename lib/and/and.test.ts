import { expect } from "earljs";
import { expectNumberOfArgs } from "../_internal/_test";
import and from "../../cjs/and";

describe("and", () => {
  it("it accepts exact 2 arguments", () => {
    expectNumberOfArgs(and, 2, [false, true]);
  });

  it("confirms that both of arguments are true", () => {
    expect(and(true, true)).toEqual(true);
    expect(and(true, false)).toEqual(false);
    expect(and(false, true)).toEqual(false);
    expect(and(false, false)).toEqual(false);
  });
});
