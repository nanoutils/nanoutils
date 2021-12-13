import { expect } from "earljs";
import shallowCloneObjectAndArrays from "./";

describe("shallowCloneObjectAndArrays", () => {
  it("shallow copies an object", () => {
    const object = { a: { a2: 1 } };
    const shallowCopyObject = shallowCloneObjectAndArrays(
      object
    ) as typeof object;
    expect(object).toEqual(shallowCopyObject);
    object.a.a2 = 2;
    expect(object.a.a2).toEqual(shallowCopyObject.a.a2);
  });

  it("shallow copies an object", () => {
    const array = [[1]];
    const shallowCopyArray = shallowCloneObjectAndArrays(array) as typeof array;
    expect(array).toEqual(shallowCopyArray);
    array[0][0] = 2;
    expect(array[0][0]).toEqual(shallowCopyArray[0][0]);
  });
});
