import { expect } from "earljs";
import gte from "./";

describe("gte", () => {
  it("checks if 1st arg is greater or equals to 2nd", () => {
    expect(gte(1)(2)).toEqual(false);
    expect(gte(2)(2)).toEqual(true);
    expect(gte(3)(2)).toEqual(true);
  });
});
