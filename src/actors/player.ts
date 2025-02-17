import {
  Actor,
  Collider,
  CollisionContact,
  Engine,
  Side,
  vec,
  Color,
  Keys,
  clamp,
} from "excalibur";
import { Ground } from "./ground";
import { warn } from "console";

export class Player extends Actor {
  ascending = false;
  isRunning = true;

  constructor() {
    super({
      height: 16,
      width: 16,
      pos: vec(200, 300),
      color: Color.Red,
    });
  }
  private isInputActive(engine: Engine) {
    return (
      engine.input.keyboard.isHeld(Keys.Space) ||
      engine.input.pointers.isDown(0)
    );
  }
  override onInitialize(): void {
    this.acc = vec(0, 1200);
  }

  override onPostUpdate(engine: Engine) {
    if (!this.ascending && this.isInputActive(engine)) {
      this.vel.y += -800; // negative is UP
      this.ascending = true;
    }
    if (this.ascending && !this.isInputActive(engine)) {
      this.vel.y -= -800;
      this.ascending = false;
    }
    // keep velocity from getting too big
    // this.vel.y = clamp(this.vel.y, -500, 500);
    console.log(this.vel, this.ascending);
  }

  override onCollisionStart(_self: Collider, other: Collider): void {
    if (other.owner instanceof Ground) {
      this.stop();
    }
  }
  start() {}

  stop() {
    this.vel.y = 0;
    this.acc.y = 0;
    this.ascending = false;
  }
}
