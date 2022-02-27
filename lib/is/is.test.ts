import { expect } from "earljs";
import is from ".";

describe("is", () => {
  it("checks if value is instance of object", () => {
    expect(is(Number)(1)).toEqual(true);
  });

  it("checks just equality of null and undefined values", () => {
    expect(is(null)(null)).toEqual(true);
    expect(is(undefined)(undefined)).toEqual(true);
    expect(is(null)(undefined)).toEqual(false);
    expect(is(undefined)(null)).toEqual(false);
  });
});
