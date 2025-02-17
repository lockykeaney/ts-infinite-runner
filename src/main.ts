import { Color, DisplayMode, Engine, FadeInOut, vec } from "excalibur";
import { loader } from "./resources";
import { MyLevel } from "./level";
import { Ground } from "./actors/ground";
import { Player } from "./actors/player";
// Goal is to keep main.ts small and just enough to configure the engine
const game = new Engine({
  width: 1280,
  height: 800,
  backgroundColor: Color.fromHex("#54C0CA"),
  pixelArt: true,
  pixelRatio: 2,
  displayMode: DisplayMode.FitScreen,
});
const player = new Player();
game.add(player);

const startHeight = vec(0, game.screen.drawHeight - 64);
const ground = new Ground(startHeight);
game.add(ground);
game.start();
// game
//   .start("start", {
//     // name of the start scene 'start'
//     loader, // Optional loader (but needed for loading images/sounds)
//     inTransition: new FadeInOut({
//       // Optional in transition
//       duration: 1000,
//       direction: "in",
//       color: Color.ExcaliburBlue,
//     }),
//   })
//   .then(() => {
//     // Do something after the game starts
//   });

