import { evenOrOdd, multiply } from "@/playground";

describe("basic math", () => {
  it("adds two numbers", () => {
    expect(1 + 1).toBe(2);
  });

  it("substract two numbers", () => {
    expect(10 - 5).toBe(5);
  });
});

describe("Even or Odd function", () => {
  describe("When the number is Even", () => {
    it("Indicates the number is even", () => {
      expect(evenOrOdd(2)).toBe("Even");
    });
  });

  describe("When the number is Odd", () => {
    it("Indicates the number is odd", () => {
      expect(evenOrOdd(3)).toBe("Odd");
    });
  });
});

describe("multiply function", () => {
  it("multiplies 2 numbers", () => {
    expect(multiply(2, 4)).toBe(8);
  });
});
