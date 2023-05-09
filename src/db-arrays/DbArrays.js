import facebook_icon from "../assets/svg-icons/icons8-facebook(1).svg";

import github_icon from "../assets/svg-icons/icons8-github.svg";

import twitter_icon from "../assets/svg-icons/icons8-twitter-circled.svg";

import linkedin_icon from "../assets/svg-icons/icons8-linkedin-circled.svg";
import Quiz_AppImage from "../assets/img/Portfolio_Thumbnails/QuizApplication_Project.png";

import ChatGpt_AppImage from "../assets/img/Portfolio_Thumbnails/Chatgpt_Project.png";
import Dictionary_AppImage from "../assets/img/Portfolio_Thumbnails/Dictionary_project.png";
import Furniture_AppImage from "../assets/img/Portfolio_Thumbnails/FurniturePage_project.png";
import Notifications_AppImage from "../assets/img/Portfolio_Thumbnails/Notifications_project.png";
import Survey_AppImage from "../assets/img/Portfolio_Thumbnails/SurveyForm_Project.png";
import LangingPage_AppImage from "../assets/img/Portfolio_Thumbnails/Manage_project.png";
import Creditcard_AppImage from "../assets/img/Portfolio_Thumbnails/Creditcard_Project.png";

import Crowdfund_PageImage from "../assets/img/Portfolio_Thumbnails/CrowdFund_project.png";

export const navArray = [
  { page: "about", path: "about", id: 1 },
  { page: "my skills", path: "my-skills", id: 2 },
  { page: "work", path: "work", id: 3 },
  { page: "contact", path: "contact", id: 4 },
];

export const socialsArray = [
  {
    social: "linkedIn",
    link: "about",
    src: linkedin_icon,
    path: "https://www.linkedin.com/in/jeffrey-entekume-330644259/",
  },
  {
    social: "github",
    link: "my-skills",
    src: github_icon,
    path: "https://github.com/Tachy-22",
  },
  {
    social: "twitter",
    link: "work",
    src: twitter_icon,
    path: "https://twitter.com/entekume_j",
  },
  {
    social: "facebook",
    link: "work",
    src: facebook_icon,
    path: "https://web.facebook.com/profile.php?id=100088511213408",
  },
];

export const skillTechnologyArray = [
  { technology: "Html", path: "/", id: 1 },
  { technology: "React.Js", path: "/", id: 2 },
  { technology: "Vanilla Css", path: "/", id: 4 },

  { technology: "Tailwind Css", path: "/", id: 3 },
  { technology: "Java Script", path: "/", id: 4 },
];

export const projectsArray = [
  {
    project: "ChatGpt Clone",
    path: "https://chat-gpt-clone-tachy-22.vercel.app/",

    id: 1,
    src: ChatGpt_AppImage,
  },
  {
    project: "Quiz App",
    path: "https://quiz-grad-app.vercel.app/",
    id: 2,
    src: Quiz_AppImage,
  },
  {
    project: "Dictionary App",
    path: "https://dictionary-app-tachy-22.vercel.app",
    id: 3,
    src: Dictionary_AppImage,
  },

  {
    project: "Furniture Landing Page",
    path: "/",
    id: 4,
    src: Furniture_AppImage,
  },
  {
    project: "Crowdfunding Landing Page",
    path: "https://tachy-22.github.io/Crowd_funding/",
    id: 5,
    src: Crowdfund_PageImage,
  },

  {
    project: "Landing Page",
    path: "https://639a08fc9e0b6c2c77a82c8b--calm-monstera-2b3097.netlify.app/",
    id: 7,
    src: LangingPage_AppImage,
  },
  {
    project: "Credit card detail Page",
    path: "https://63422975d6cd7b35f7f49298--jazzy-longma-ff34cf.netlify.app/",
    id: 8,
    src: Creditcard_AppImage,
  },
  {
    project: "Notifications Page",
    path: "https://tachy-22.github.io/NotificationsPage/",
    id: 9,
    src: Notifications_AppImage,
  },
  {
    project: "Survey Form",
    path: "https://tachy-22.github.io/Survey_form/",
    id: 6,
    src: Survey_AppImage,
  },
];
