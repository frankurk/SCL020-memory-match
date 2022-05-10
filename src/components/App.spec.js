import App, {playSound} from "./App.js";


describe("App function", () => {
  it("should be a function", () => {
    expect(typeof App).toBe("function");
  })
})

describe("Sound function", () => {
  it("should be a HTMLAudioElement", () => {
    let congrats = "assets/sounds/congrats.mp3";
    expect(playSound(congrats) instanceof HTMLAudioElement);
  });
});
