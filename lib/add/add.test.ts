import { expect } from "earljs";
import { expectNumberOfArgs } from "../_internal/_test";
import add from "./";

describe("add", () => {
  it("accepts exact 2 arguments", () => {
    expectNumberOfArgs(add, 2, [1, 2]);
  });

  it("sums two numbers", () => {
    expect(add(4)(3)).toEqual(7);
  });

  it("sums number to number from string", () => {
    expect(add("4")(3)).toEqual(7);
  });

  it("sums two numbers from string", () => {
    expect(add("4")("3")).toEqual(7);
  });

  it("returns NaN if it's either of the arguments are not number-like", () => {
    expect(add(4)("a")).toEqual(NaN);
  });

  it("interprets null as 0", () => {
    expect(add(null)(null)).toEqual(0);
  });

  it("interprets false and true as 0 and 1 respectively", () => {
    expect(add(false)(false)).toEqual(0);
    expect(add(true)(true)).toEqual(2);
  });

  it("interprets empty array as 0, non-empty as first element", () => {
    expect(add([])([])).toEqual(0);
    expect(add([])([5])).toEqual(5);
    expect(add([5])([])).toEqual(5);
    expect(add([5])([5])).toEqual(10);
  });
});
