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
  isOnGround = false;
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
    if (this.isInputActive(engine)) {
      this.vel.y += -200; // negative is UP
    }
    if (!this.isInputActive(engine) && !this.isOnGround) {
      this.isOnGround = false;
      this.vel.y -= -200;
    }
    if (!this.isInputActive(engine) && this.isOnGround) {
      this.vel.y = 0;
    }
    // keep velocity from getting too big
    this.vel.y = clamp(this.vel.y, -300, 300);
  }

  override onCollisionStart(_self: Collider, other: Collider): void {
    if (other.owner instanceof Ground) {
      console.log("ground collision");
      this.isOnGround = true;
      this.vel.y = 0;
      other.owner.moving = true;
    }
  }
  start() {}

  stop() {
    this.vel.y = 0;
    this.acc.y = 0;
    this.ascending = false;
  }
}
