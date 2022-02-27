import { expect } from "earljs";
import gt from "./";

describe("gt", () => {
  it("checks if 1st arg is greater than 2nd", () => {
    expect(gt(1)(2)).toEqual(false);
    expect(gt(2)(2)).toEqual(false);
    expect(gt(3)(2)).toEqual(true);
  });
});
