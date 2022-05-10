import { expect } from "earljs";
import reduceRight from "../../../cjs/_internal/_reduceRight";

const sum = (acc, cur) => acc + cur;

describe("reduceRight", () => {
  it("reduces an array", () => {
    const arr = [1, 2, 3, 4];
    expect(reduceRight(sum, 0, arr)).toEqual(10);
  });

  it("reduces construction with .reduceRight method", () => {
    class A {
      vals: number[];
      constructor() {
        this.vals = [1, 2, 3, 4];
      }
      reduceRight(cb, initial) {
        return this.vals.reduceRight(cb, initial);
      }
    }
    const a = new A();
    expect(reduceRight(sum, 0, a)).toEqual(10);
  });

  it("does not reduce generators", () => {
    function* gen() {
      for (let i = 0; i <= 4; i++) yield i;
    }
    expect(() => reduceRight(sum, 0, gen())).toThrow(
      "Argument should be right iterable"
    );
  });

  it("does not reduce constructions with Symbol.iterator", () => {
    const obj = {};
    obj[Symbol.iterator] = function*() {
      yield 1;
      yield 2;
      yield 3;
      yield 4;
    };
    expect(() => reduceRight(sum, 0, obj)).toThrow(
      "Argument should be right iterable"
    );
  });

  it("goes from right to left", () => {
    const values = [{ name: "Alex" }, { name: "Mike" }, { name: "Anton" }];
    const reverse = (array) =>
      reduceRight((acc, value) => acc.concat(value), [], array);
    expect(reverse(values)).toEqual(values.reverse());
  });
});
