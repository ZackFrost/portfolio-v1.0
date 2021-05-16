import EncryptChat from "../assets/images/encrypt-chat.jpg";
import Inspire from "../assets/images/inspire1.jpg";
import sribhulokhatravels from "../assets/images/sribhulokhatravels.jpg";
import mivacationtours from "../assets/images/mivacationtours.jpg";
import deadlyTimer from "../assets/images/deadly-timer.jpg";

//defining enum variables
const Platform = Object.freeze({ android: "android", web: "web", ios: "ios" });

let projectsMap = [
  {
    title: "Mivacation Tours",
    descritpion:
      "A travel agency website for booking tour packages, hotels, travels and visa services.",
    image: mivacationtours,
    platforms: [Platform.web],
    link: "https://mivacationtours.com/",
  },

  {
    title: "Sri Bhulokha Travels",
    descritpion:
      "A vizag based travel agency website offering travels and packages booking services",
    image: sribhulokhatravels,
    platforms: [Platform.web],
    link: "https://sribhulokhatravels.in/",
  },
  {
    title: "Encrypt Chat",
    descritpion:
      "An app providing privacy to your content such as personal info by encryting it and making it available to share it anywhere.",
    image: EncryptChat,
    platforms: [Platform.android],
    link: "https://play.google.com/store/apps/details?id=com.IncredibleSolutions.ianpaul.encryptchat&hl=en_IN&gl=US",
  },
  {
    title: "Inspire",
    descritpion:
      "A beautiful wallpaper application that allows users to download high quality wallpapers by tapping on it.",
    image: Inspire,
    platforms: [Platform.android],
    link: "https://play.google.com/store/apps/details?id=com.ian.i.inspire&hl=en_IN&gl=US",
  },
  {
    title: "Simple Tasker",
    descritpion:
      "A simple tasker application that allows users to create and manage day to day tasks.",
    image: deadlyTimer,
    platforms: [Platform.android, Platform.ios],
  },
];

export { projectsMap };

// let projectsMap = [

//   {
//     title: "Freelance Projects",
//     projects: [
//       {
//         title: "Mivacation Tours",
//         descritpion:
//           "Want to turn your idea into an Hybrid app(Android, iOS & Web), ",
//         image: mivacationtours,
//         platforms: [Platform.web],
//         link:"https://mivacationtours.com/"
//       },

//       {
//         title: "Sri Bhulokha Travels",
//         descritpion:
//           "Want to turn your idea into an Hybrid app(Android, iOS & Web), ",
//         image: sribhulokhatravels,
//         platforms: [Platform.web],
//         link:"https://sribhulokhatravels.in/"
//       },
//     ],
//   },
//   {
//     title: "Personal Projects",
//     projects: [
//       {
//         title: "Encrypt Chat",
//         descritpion:
//           "Want to turn your idea into an Hybrid app(Android, iOS & Web), ",
//         image: EncryptChat,
//         platforms: [Platform.android],
//         link:"https://play.google.com/store/apps/details?id=com.IncredibleSolutions.ianpaul.encryptchat&hl=en_IN&gl=US"
//       },
//       {
//         title: "Inspire",
//         descritpion:
//           "Want to turn your idea into an Hybrid app(Android, iOS & Web), ",
//         image: Inspire,
//         platforms: [Platform.android],
//         link:"https://play.google.com/store/apps/details?id=com.ian.i.inspire&hl=en_IN&gl=US"
//       },
//       {
//         title: "Simple Tasker",
//         descritpion:
//           "Want to turn your idea into an Hybrid app(Android, iOS & Web), ",
//         image: deadlyTimer,
//         platforms: [Platform.android, Platform.ios],
//       },
//     ],
//   },

// ];
