import { expect } from "earljs";
import p2a from "../../../cjs/_internal/_p2a";

describe("p2a", () => {
  it("split string by dots", () => {
    expect(p2a("a.b.2")).toEqual(["a", "b", "2"]);
  });

  it("return array with number for number", () => {
    expect(p2a(2)).toEqual(["2"]);
  });

  it("return empty array for another data", () => {
    expect(p2a({})).toEqual([]);
    expect(p2a([])).toEqual([]);
    expect(p2a(null)).toEqual([]);
    expect(p2a(undefined)).toEqual([]);
  });
});
