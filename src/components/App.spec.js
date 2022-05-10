import App, {createSection} from "./App.js";


describe("App function", () => {
  it("should be a function", () => {
    expect(typeof App).toBe("function");
  })
})
 
 describe("createSection function that create", () => {
   it("should create a section", () => {
    const randomizedItems = [{image: "img.jpg", id: "color"}, {image: "img2.jpg", id: "animals"}, {image: "img3.jpg", id: "verbs"}];
    const section = document.createElement("div");
    const backCard = "backCard";
    expect(createSection(randomizedItems, section, backCard) instanceof HTMLElement).toBe(true);
   })
 })