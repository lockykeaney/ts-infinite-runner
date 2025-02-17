import { Actor, Vector, vec, Color } from "excalibur";

export class Ground extends Actor {
  moving = false;
  constructor(pos: Vector) {
    super({
      pos,
      anchor: vec(0, 0),
      height: 64,
      width: 1200,
      z: 1,
      color: Color.fromHex("#bd9853"),
    });
  }

  start() {
    this.moving = true;
  }

  stop() {
    this.moving = false;
  }
}
