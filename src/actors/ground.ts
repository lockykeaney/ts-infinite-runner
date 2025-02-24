import { Actor, Vector, vec, Color, EdgeCollider } from "excalibur";

const edge = new EdgeCollider({
  begin: vec(0, 0),
  end: vec(100, 0),
});
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
  onPostUpdate(_engine: ex.Engine, elapsedMs: number): void {
    if (!this.moving) return;
    this.pos.x += -1;
  }

  start() {
    this.moving = true;
  }

  stop() {
    this.moving = false;
  }
}
