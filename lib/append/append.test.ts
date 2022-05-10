import { expect } from "earljs";
import { expectNumberOfArgs } from "../_internal/_test";
import append from "../../cjs/append";

describe("append", () => {
  it("accepts exact 2 arguments", () => {
    expectNumberOfArgs(append, 2, [1, [0]]);
  });

  it("adds a value to an array", () => {
    var arr = [0, 1, 2, 3];
    expect(append(4, arr)).toEqual([0, 1, 2, 3, 4]);
  });

  it("adds a value to an empty array", () => {
    expect(append(1, [])).toEqual([1]);
  });

  it("adds an array to an empty array", () => {
    expect(append([2, 3, 4], [1])).toEqual([1, [2, 3, 4]]);
  });
});
