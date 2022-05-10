import { expect } from "earljs";
import __ from "../../../cjs/__";
import curry3 from "../../../cjs/_internal/_curry3";

describe("curry3", () => {
  const add3 = (a, b, c) => a + b + c;

  it("can be curried", () => {
    expect(curry3(add3)(1, 2, 3)).toEqual(6);
    expect(curry3(add3)(1)(2, 3)).toEqual(6);
    expect(curry3(add3)(1, 2)(3)).toEqual(6);
    expect(curry3(add3)(1)(2)(3)).toEqual(6);
  });

  it("can delay parameter with __", () => {
    expect(curry3(add3)(__, 2, 3)(1)).toEqual(6);
    expect(curry3(add3)(1, __, 3)(2)).toEqual(6);
    expect(curry3(add3)(1, 2, __)(3)).toEqual(6);
    expect(curry3(add3)(__, __, 3)(1, 2)).toEqual(6);
    expect(curry3(add3)(__, 2, __)(1, 3)).toEqual(6);
    expect(curry3(add3)(1, __, __)(2, 3)).toEqual(6);
    expect(curry3(add3)(__, __, 3)(__, 2)(1)).toEqual(6);
    expect(curry3(add3)(__, 2, __)(__, 3)(1)).toEqual(6);
    expect(curry3(add3)(1, __, __)(__, 3)(2)).toEqual(6);
  });
});
