import Greeter from "./Greeter";

export default class LoudGreeter extends Greeter {
  private extra: string = "!";
  addVolume(): void {
    this.extra += "!";
  }
  greet(loudName: string): string {
    return `${super.greet(loudName)}${this.extra}`;
  }
}
