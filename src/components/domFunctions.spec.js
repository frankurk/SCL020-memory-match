import {createCards} from "./domFunctions"

describe("tests domFunctions.js functions", () => {

  it("should create a card (div)", () => {

    const card = createCards("img.jpg", "id", "back");
    expect(card instanceof HTMLElement).toBe(true);
  });
});
