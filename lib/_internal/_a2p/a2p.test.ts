import { expect } from "earljs";
import a2p from "./";

describe("a2p", () => {
  it("converts array to path string", () => {
    expect(a2p(["a", "b", "c"])).toEqual("a.b.c");
  });

  it("returns string for another data", () => {
    expect(a2p("a.b.c")).toEqual("a.b.c");
    expect(a2p(2)).toEqual("2");
    expect(a2p(null)).toEqual("");
  });
});
