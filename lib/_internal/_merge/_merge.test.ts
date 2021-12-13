import { expect } from "earljs";
import merge from "../../../cjs/_internal/_merge";

describe("merge", () => {
  it("returns a new object with the 1st object merged with the 2nd", () => {
    expect(merge({ a: 1, b: 1 }, { b: 2, c: 2 })).toEqual({ a: 1, b: 2, c: 2 });
  });
});
