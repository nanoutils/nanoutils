import { expect } from "earljs";
import anyPass from "../../cjs/anyPass";

describe("anyPass", () => {
  it("checks if any array items conforms to cb", () => {
    var gt5Lt10 = anyPass([(i) => i === 10, (i) => i === 5]);
    expect(gt5Lt10(5)).toEqual(true);
    expect(gt5Lt10(10)).toEqual(true);
    expect(gt5Lt10(200)).toEqual(false);
  });
});
