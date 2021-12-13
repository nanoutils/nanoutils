import { expect } from "earljs";
import reduce from "../../../cjs/_internal/_reduce";

const sum = (acc, cur) => acc + cur;

describe("reduce", () => {
  it("reduces an array", () => {
    const arr = [1, 2, 3, 4];
    expect(reduce(sum, 0, arr)).toEqual(10);
  });

  it("reduces construction with .reduce method", () => {
    class A {
      vals: number[];
      constructor() {
        this.vals = [1, 2, 3, 4];
      }
      reduce(cb, initial) {
        return this.vals.reduce(cb, initial);
      }
    }
    const a = new A();
    expect(reduce(sum, 0, a)).toEqual(10);
  });

  it("reduces generators", () => {
    function* gen() {
      for (let i = 0; i <= 4; i++) yield i;
    }
    expect(reduce(sum, 0, gen())).toEqual(10);
  });

  it("reduces constructions with Symbol.iterator", () => {
    const obj = {};
    obj[Symbol.iterator] = function*() {
      yield 1;
      yield 2;
      yield 3;
      yield 4;
    };
    expect(reduce(sum, 0, obj)).toEqual(10);
  });
});
