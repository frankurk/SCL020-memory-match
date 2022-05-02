import animals from "../data/animals/animals";
import shuffle from "./shuffle";

describe("shuffle", () => {
  it("should randomize items", () => {
    const stockItems = [...animals.items];
    const randomizedItems = shuffle(animals.items);

    try {
      expect(randomizedItems[0]).not.toEqual(stockItems[0]);
    } catch (error) {
      try {
        expect(randomizedItems[1]).not.toEqual(stockItems[1]);
      } catch (error) {
        try {
          expect(randomizedItems[2]).not.toEqual(stockItems[2]);
        } catch (error) {
          try {
            expect(randomizedItems[3]).not.toEqual(stockItems[3]);
          } catch (error) {
            try {
              expect(randomizedItems[4]).not.toEqual(stockItems[4]);
            } catch (error) {
              try {
                expect(randomizedItems[5]).not.toEqual(stockItems[5]);
              } catch (error) {
                try {
                  expect(randomizedItems[6]).not.toEqual(stockItems[6]);
                } catch (error) {
                  expect(randomizedItems[7]).not.toEqual(stockItems[7]);
                }
              }
            }
          }
        }
      }
    }
  });
});
