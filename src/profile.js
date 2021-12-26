// Change website animations
const animation = {
  // make it false to switch off fade-up animation
  animate: true,
  // animation playing duration
  duration: 750,
  // if true, animation plays only once when element comes on screen
  once: false,
};
// Change your display name on tha landing display
const header = {
  name: "Vijay Ananth",
};
const background = {
  // Options: Snow or Particle
  type: "Particle",
};
// Write a para about yourself here
// To update your image, go to './styles/images.css'
const section2title = "About Me";
const about = {
  paragraph:
    "I'm a computer science student from the University of Waterloo. I aim to deepen my understanding in various areas of technology and product development.",
};
// Edit your skill and the percentage you know about it
// To Add a skill, copy any one below and paste it after the last comma
const skillsBar = [
];
// Edit your projects, its name, your skills used to make it, and the url.
// You can omit freely anything if you dont have it
// To Add a Project, copy any one below and paste it after the last comma and increment the id's project number
const section3Title = "Past Projects";
const projects = [
  {
    // Add image in './styles/images.css' in #project1
    id: "project1",
    name: "Vertex Wolf",
    skills: ["C#, Unity"],
    url: "https://linktr.ee/frostiq",
  },
  {
    // Add image in './styles/images.css' in #project2
    id: "project2",
    name: "fnhawk.xyz",
    skills: ["HTML/CSS, JS, CORS Anywhere"],
    url: "http://fnhawk.xyz/",
  },
  {
    // Add image in './styles/images.css' in #project3
    id: "project3",
    name: "Feedback App",
    skills: ["React, JSON Server"],
    url: "https://youthful-golick-f9183a.netlify.app/",
  },
  {
    // Add image in './styles/images.css' in #project4
    id: "project4",
    name: "SleepTight HackOn2.0",
    skills: ["C++, Python, Arduino"],
    url: "https://github.com/nvsriram/HackOn2.0",
  },
  {
    // Add image in './styles/images.css' in #project5
    id: "project5",
    name: "Splitip",
    skills: ["Swift, Objective-C"],
    url: "https://github.com/c247/Splitip",
  },
  {
    // Add image in './styles/images.css' in #project6
    id: "project6",
    name: "Library Rest API",
    skills: ["Golang, Gorilla Mux (Router)"],
    url: "https://github.com/c247/gorestapi",
  },
];
// Edit your Miscellaneous Activities, its name and the url.
// You can omit freely anything if you dont have it
// To Add a Activity, copy any one below and paste it after the last comma and increment the id's Miscellaneous number
const section4Title = "";
const miscellaneous = [
 
];
// Contact form text, and Formspree link(to send a submit contact through their API as in contact.js)
// To get your own jotform link, go to https://formspree.io/
// If you hacve the link already, paste it in the contactUrl below
const section5Title = "Contact :)";
const contact = {
  pitch:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris nunc congue nisi vitae.",
  copyright: "Vijay Ananth",
  contactUrl: "https://formspree.io/f/mvolggag",
};
// Paste your respective social media links. You can omit any if you dont have it
// Upload your resume in your drive, get the shaareable link and paste it in the resume section
const social = {
  github: "https://github.com/c247",
  // twitter: "https://twitter.com",
  linkedin: "https://linkedin.com/ananth-vijay",
  resume: "https://novoresume.com/",
};
// Dont change anything here
export {
  animation,
  header,
  background,
  about,
  skillsBar,
  projects,
  miscellaneous,
  contact,
  social,
  section2title,
  section3Title,
  section4Title,
  section5Title,
};
