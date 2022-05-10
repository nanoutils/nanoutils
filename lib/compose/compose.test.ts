import { expect } from "earljs";
import compose from "../../cjs/compose";
import not from "../../cjs/not";

function plus1(a) {
  return a + 1;
}
function x2(a) {
  return a * 2;
}

describe("compose", () => {
  it("accepts functions from right to left", () => {
    expect(
      compose(
        plus1,
        x2
      )(1)
    ).toEqual(3);
  });

  it("checks if a value is not an array", () => {
    const isNotArray = compose(
      not,
      Array.isArray
    );

    expect(isNotArray(1)).toEqual(true);
    expect(isNotArray([1, 2, 3])).toEqual(false);
  });
});
