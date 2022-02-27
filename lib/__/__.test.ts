import { expect } from "earljs";
import __ from "../../cjs/__";

describe("__", () => {
  it("is object", () => {
    expect(__).toEqual({});
  });
});
