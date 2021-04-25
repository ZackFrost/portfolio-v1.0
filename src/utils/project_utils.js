import EncryptChat from "../assets/images/encrypt-chat.jpg";
import Inspire from "../assets/images/inspire.png";

//defining enum variables
const Platform = Object.freeze({ android: "android", web: "web", ios: "ios" });

let projectsMap = [
  {
    title: "Encrypt Chat",
    descritpion:
      "Want to turn your idea into an Hybrid app(Android, iOS & Web), ",
    image: EncryptChat,
    platforms: [Platform.android],
  },
  {
    title: "Inspire",
    descritpion:
      "Want to turn your idea into an Hybrid app(Android, iOS & Web), ",
    image: Inspire,
    platforms: [Platform.android],
  },
  {
    title: "Deadly Timer",
    descritpion:
      "Want to turn your idea into an Hybrid app(Android, iOS & Web), ",
    image: EncryptChat,
    platforms: [Platform.android, Platform.ios],
  },
  {
    title: "Mivacation Tours",
    descritpion:
      "Want to turn your idea into an Hybrid app(Android, iOS & Web), ",
    image: EncryptChat,
    platforms: [Platform.web],
  },
  {
    title: "Encrypt Chat",
    descritpion:
      "Want to turn your idea into an Hybrid app(Android, iOS & Web), ",
    image: EncryptChat,
    platforms: [Platform.android],
  },
  {
    title: "Sri Bhulokha Travels",
    descritpion:
      "Want to turn your idea into an Hybrid app(Android, iOS & Web), ",
    image: EncryptChat,
    platforms: [Platform.web],
  },
];

export { projectsMap };
