import { expect } from "earljs";
import F from "../../cjs/F";

describe("F", () => {
  it("always return false", () => {
    expect(F()).toEqual(false);
  });
});
