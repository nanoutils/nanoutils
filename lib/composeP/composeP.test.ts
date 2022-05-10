import { expect } from "earljs";
import composeP from "../../cjs/composeP";

describe("composeP", () => {
  it("composes promises from functions", async () => {
    var plusOne = (num) => Promise.resolve(num + 1);
    var getNumber = (num) => Promise.resolve(num);
    var fn = composeP(
      plusOne,
      getNumber
    );
    const result = await fn(1);
    expect(result).toEqual(2);
  });
});
