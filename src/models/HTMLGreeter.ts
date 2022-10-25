import Greeter from "./Greeter";

export default class HTMLGreeter extends Greeter {
  tagName: string;
  constructor(greeting: string, tagName: string = "h1") {
    super(greeting);
    this.tagName = tagName;
  }
  greet(htmlName: string): string {
    return `<${this.tagName}>${super.greet(htmlName)}</${this.tagName}>`;
  }
}
