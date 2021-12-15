import { expect } from "earljs";
import ap from "../../cjs/ap";

describe("ap", () => {
  it("applies a list of functions to a list of values", () => {
    const val = ap([(i) => i * 2, (i) => i + 3], [1, 2, 3]);
    expect(val).toEqual([2, 4, 6, 4, 5, 6]);
  });

  it("works with any iterable", () => {
    const val = ap([(i) => "letter " + i, (i) => i.toUpperCase()], "abc");
    expect(val).toEqual(["letter a", "letter b", "letter c", "A", "B", "C"]);
  });
});
