import { expect } from "earljs";
import __ from "../../__";
import curry2 from "../_curry2";

describe("curry2", () => {
  const add2 = (a, b) => a + b;

  it("can be curried", () => {
    expect(curry2(add2)(1, 2)).toEqual(3);
    expect(curry2(add2)(1)(2)).toEqual(3);
  });

  it("can delay parameter with __", () => {
    expect(curry2(add2)(__, 2)(1)).toEqual(3);
    expect(curry2(add2)(1, __)(2)).toEqual(3);
  });
});
