import android from "../assets/icons/technologies/android_studio.svg";
import css from "../assets/icons/technologies/css.svg";
import flutter from "../assets/icons/technologies/flutter.svg";
import html from "../assets/icons/technologies/html.svg";
import javascript from "../assets/icons/technologies/javascript.svg";
import mongoDB from "../assets/icons/technologies/mongodb.svg";
import nodeJS from "../assets/icons/technologies/nodejs.png";
import reactJS from "../assets/icons/technologies/reactjs.svg";
import selenium from "../assets/icons/technologies/selenium.svg";
import adobeXD from "../assets/icons/technologies/adobe_xd.svg";
import adobePS from "../assets/icons/technologies/adobe_ps.svg";
import bootstrap from "../assets/icons/technologies/bootstrap.png";

export let skills = [
  {
    category: "Technologies, Frameworks, IDE",
    platforms: [
      { name: "Flutter", path: flutter },
      { name: "Android Development", path: android },
      { name: "React", path: reactJS },
      { name: "Node JS", path: nodeJS },
      { name: "MongoDB", path: mongoDB },
      { name: "JavaScript", path: javascript },
      { name: "HTML", path: html },
      { name: "CSS", path: css },
      // { name: "Bootstrap", path: bootstrap },
      // { name: "Selenium", path: selenium },
    ],
  },
  {
    category: "Prototyping, Wireframes",
    platforms: [
      { name: "Adobe XD", path: adobeXD },
      { name: "Photoshop", path: adobePS },
    ],
  },
];
