import { expect } from "earljs";
import setAry from "../../../cjs/_internal/_setAry";

describe("setAry", () => {
  it("adds nul property to a function", () => {
    var a = function(a, b, c) {
      console.log(a, b, c);
    };
    expect(setAry(3, a).nul).toEqual(3);
  });

  it("nul should be read-only property", () => {
    var a = function(a, b, c) {
      console.log(a, b, c);
    };
    var b = setAry(3, a);
    try {
      b.nul = 1337;
    } catch (e) {
      expect((e as TypeError).message)
        .toEqual(`Cannot assign to read only property 'nul' of function 'function (a, b, c) {
            console.log(a, b, c);
        }'`);
    }
  });
});
