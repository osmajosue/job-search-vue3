import { findNextItem } from "@/helpers/nextElementInArray";

describe("findNextItem", () => {
  it("locates an element in an array and returns the next element", () => {
    const testArray = ["first", "second", "third", "fourth"];

    const currentItemIndex = testArray.indexOf("third");
    const currentItem = testArray[currentItemIndex];

    const nextItem = findNextItem(testArray, currentItem);

    expect(nextItem).toBe("fourth");
  });
});
