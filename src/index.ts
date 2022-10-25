import HTMLGreeter from "./models/HTMLGreeter";

//consolelog here, need to import, should be automatic, but may need to add

const promptly = require("promptly");

(async () => {
  const greetingFromUser: string = await promptly.prompt("Enter a greeting: ");
  //   console.log(greetingFromUser);
  const nameFromUser: string = await promptly.prompt("Enter a name: ");
  const tagNameFromUser: string = await promptly.prompt("Enter a tag name: ");
  const htmlObj: HTMLGreeter = new HTMLGreeter(
    greetingFromUser,
    tagNameFromUser
  );
  console.log(htmlObj.greet(nameFromUser));
})();
