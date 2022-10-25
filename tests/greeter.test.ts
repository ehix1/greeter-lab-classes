import Greeter from "../src/models/Greeter";
import HTMLGreeter from "../src/models/HTMLGreeter";
import JavaScriptGreeter from "../src/models/JavaScriptGreeter";
import LoudGreeter from "../src/models/LoudGreeter";

describe(`Greeter class`, () => {
  test(`constructor sets the greeting property`, () => {
    //arrange
    const result: Greeter = new Greeter("Howdy");
    expect(result.greeting).toBe("Howdy");
  });
  test(`greet method called with "mom" and object constructed with param "Hi" returns "Hi, mom!`, () => {
    //arrange - set up data
    const newGreeting: Greeter = new Greeter("hi");
    //act - call method
    const returnString: string = newGreeting.greet("mom");
    //assert
    expect(returnString).toBe("hi, mom!");
  });
});

describe(`JavaScript Greeter`, () => {
  test(` greet method: greeting "hola" and name "Dominic" returns "console.log('hola, Dominic!')"`, () => {
    const object: JavaScriptGreeter = new JavaScriptGreeter("hola");
    const result: string = object.greet("Dominic");
    expect(result).toBe("console.log('hola, Dominic!')");
  });
  test(` greet method: greeting "sup" and name "James" returns "console.log('sup, james!')"`, () => {
    const object: JavaScriptGreeter = new JavaScriptGreeter("sup");
    const result: string = object.greet("james");
    expect(result).toBe("console.log('sup, james!')");
  });
});

describe("LoudGreeter", () => {
  test(`without calling addVolume, greet returns 2 exclamation points`, () => {
    const loudGreeterObject: LoudGreeter = new LoudGreeter("Bonjour");
    expect(loudGreeterObject.greet("Chico")).toBe("Bonjour, Chico!!");
  });
  test(`after calling addVolume 3x, greet returns 5 "!"s`, () => {
    const loudGreeterObject: LoudGreeter = new LoudGreeter("Bonjour");
    loudGreeterObject.addVolume();
    loudGreeterObject.addVolume();
    loudGreeterObject.addVolume();
    expect(loudGreeterObject.greet("Chico")).toBe("Bonjour, Chico!!!!!");
  });
});

describe(`HTMLGreeter`, () => {
  test(`tagName property is set from the constructor, tagName defaults to h1 when the second argument is left off`, () => {
    const object: HTMLGreeter = new HTMLGreeter("konnichiwa");
    expect(object.greet("class")).toBe("<h1>konnichiwa, class!</h1>");
  });
  test(`tagName property is set from the constructor, tagName is set from constuctors 2nd arg`, () => {
    const object: HTMLGreeter = new HTMLGreeter("konnichiwa", "p");
    expect(object.greet("class")).toBe("<p>konnichiwa, class!</p>");
  });
});
