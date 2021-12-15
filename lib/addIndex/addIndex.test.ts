import { expect } from "earljs";
import { expectNumberOfArgs } from "../_internal/_test";
import addIndex from "../../cjs/addIndex";
import map from "../../cjs/map";
import filter from "../../cjs/filter";

describe("addIndex", () => {
  it("accepts exact 3 arguments", () => {
    expectNumberOfArgs(addIndex, 3, [map, (v, i) => v + i, [1, 2, 3, 4]]);
  });

  it("adds index with map", () => {
    const array = [1, 2, 3, 4];
    expect(addIndex(map, (v, i) => v + i, array)).toEqual([1, 3, 5, 7]);
    expect(addIndex(map)((v, i) => v + i, array)).toEqual([1, 3, 5, 7]);
  });

  it("adds index with filter", () => {
    const array = [1, 5, 3, 7];
    expect(addIndex(filter, (v, i) => (v + i) % 2 === 1, array)).toEqual([
      1,
      3,
    ]);
    expect(addIndex(filter)((v, i) => (v + i) % 2 === 1, array)).toEqual([
      1,
      3,
    ]);
  });

  it("does NOT mutate an array", () => {
    const array = [1, 2, 3, 4];
    expect(addIndex(map, (v, i) => v + i, array)).toEqual([1, 3, 5, 7]);
    expect(addIndex(map)((v, i) => v + i, array)).toEqual([1, 3, 5, 7]);
    expect(array).toEqual([1, 2, 3, 4]);
  });
});
