/* Change this file to get your personal Portfolio */

import emoji from "react-easy-emoji";

// Your Summary And Greeting Section

const greeting = {
  username: "KHALID Abdellah",
  title: "Abdellah KHALID | Developer",
  subTitle: emoji(
    "Hi, my name is Abdellah KHALID. I’m an Android Developer and technology enthusiast. Love working on a new and exciting projects, "
    + " sharing my knowledge with others, and always willing to learn more"
  ),
  resumeLink:
    "https://www.linkedin.com/in/abdellah-khalid",
};

// Your Social Media Link

const socialMediaLinks = {
  github: "https://github.com/khalidabdou",
  linkedin: "https://www.linkedin.com/in/abdellah-khalid",
  facebook: "https://www.facebook.com/khalld.m",
  instagram: "https://www.instagram.com/android_dev_khalid/",
  
};

// Your Skills Section

const skillsSection = {
  title: "What i do",
  subTitle:
    "HANDLING ALL OF THESE TECHNOLOGIE",
  skills: [
    emoji(
      "buidling and deploying android applications using Java with xml, Kotlin Modern UI Toolkit called Jetpack Compose., and Android Studio"
    ),
    emoji(
      "building and deploying web applications using HTML, CSS, JavaScript, React, NodeJS, Express, and MongoDB"
    ),
    emoji(
      "Building predictive models to extract insights and make decisions out of data"
    ),
  ],

  softwareSkills: [
    {
      skillName: "Kotlin",
      classname: "logos:kotlin",
      style: {
        backgroundColor: "transparent",
      },
    },

    {
      skillName: "java",
      classname: "logos:java",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "node js",
      classname: "simple-icons:nodejs",
      style: {
        color: "#61DAFB",
      },
    },
    {
      skillName: "mysql",
      classname: "simple-icons:mysql",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "git",
      classname: "logos:git-icon",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "firebase",
      classname: "logos:firebase",
      style: {
        backgroundColor: "transparent",
      },
    },

  ],
};

// Your top 3 work experiences

const workExperiences = {
  viewExperiences: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      ],
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to false
  display: true, // Set false to hide this section, defaults to true
};

// Your certifications

const certifications = {
  certifications: [
    {
      title: "Selenium",
      subtitle: "- Vskills",
      logo_path: "vskills-logo.png",
      certificate_link:
        "https://www.vskills.in/certification/40215-certified-selenium-professional-bharat-babu-kammakatla",
      alt_name: "Vskills",
      color_code: "#F6EAEA",
    },
    {
      title: "Cloud Admin & Automation",
      subtitle: "- Experitest",
      logo_path: "seetest-logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1qhh1ZUBB2VPrOaT6bNgiJ5Y2sHmCjvMg/view?usp=drivesdk",
      alt_name: "Experitest",
      color_code: "#F0FFDD",
    },
    {
      title: "Python",
      subtitle: "- Jose Portilla",
      logo_path: "pierian-data-logo.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-a80d6e7c-e753-421d-bcee-5a7bc1769f28/",
      alt_name: "Pierian-Data",
      color_code: "#FEF6E6",
    },
    {
      title: "Selenium Python",
      subtitle: "- Rahul Shetty",
      logo_path: "rahulshettyacademy-logo.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-e4b66abd-18c6-4bfa-9132-ab22d2bf7ef7/",
      alt_name: "RahulShettyAcademy",
      color_code: "#FDE9EA",
    },
    {
      title: "Data Science",
      subtitle: "- IBM",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://coursera.org/share/893f2210f39f5a60d0463b19b469b808",
      alt_name: "IBM",
      color_code: "#E3F1FA",
    },
    {
      title: "ML and DS",
      subtitle: "- Andrei Neagoie",
      logo_path: "zero-to-mastery.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-fd118b7d-7436-442c-a7f8-5077c432d596/",
      alt_name: "Zero To Mastery",
      color_code: "#FFFDDD",
    },
  ],
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url:
        "https://github.com/khalidabdou/TestFriends_JetPackCompose/blob/master/app/src/main/java/com/example/testfriends_jetpackcompose/screen/LoginScreen.kt",
      title: "UI LOGIN USING JETPACK COMPOSE",
      description:
        "",
    },
  ],
};



const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "",
  number: "+212 611680206",
  email_address: "khald.abdou12@gmail.com",
};

const Projects = {
  projects: [
    {
      title: "Wishes App 'android'",
      subtitle: "app for sharing wishes withs friends (images , quotes , stickers, wallpapers)",
      picture: "https://www.appsflyer.com/wp-content/uploads/2021/10/Feature-image-917x480-2.png",
      link: "https://github.com/khalidabdou/GreenChina",
      color_code: ""
    },
     {
      title: "Test Friendships 'android'",
      subtitle: "android app for creating friendships test ",
      picture: "https://www.appsflyer.com/wp-content/uploads/2021/10/Feature-image-917x480-2.png",
      link: "https://github.com/khalidabdou/TestFriends_JetPackCompose",
      color_code: ""
    },
    {
      title: "Test Friendships 'API NODE JS'",
      subtitle: "REST API for creating friendships test ",
      picture: "https://www.objetconnecte.com/wp-content/uploads/2020/10/api-800x450.jpg",
      link: "https://github.com/khalidabdou/TestFriends",
      color_code: ""
    },
     {
      title: "Quiz App for kids 'android'",
      subtitle: "android app for kids to learn tamazight language",
      picture: "https://www.appsflyer.com/wp-content/uploads/2021/10/Feature-image-917x480-2.png",
      link: "https://github.com/khalidabdou/QuizTamazight",
      color_code: ""
    },
    {
      title: "Wishes Dashboard and Api 'NodeJs'",
      subtitle: "app for sharing wishes withs friends",
      picture: "https://www.objetconnecte.com/wp-content/uploads/2020/10/api-800x450.jpg",
      link: "https://github.com/khalidabdou/dashboard",
      color_code: ""
    },
     {
      title: "wishes  'Flutter'",
      subtitle: "app showing wishes withs friends ",
      picture: "https://i2.wp.com/mozartec.com/wp-content/uploads/2019/04/flutter.jpeg?fit=1500%2C750&ssl=1",
      link: "https://github.com/khalidabdou/flutter_app",
      color_code: ""
    },
     {
      title: "Stcikers App 'android'",
      subtitle: "app stickers for whatsapp using jetpack compose",
      picture: "https://www.appsflyer.com/wp-content/uploads/2021/10/Feature-image-917x480-2.png",
      link: "https://github.com/khalidabdou/StickerJetpackComp",
      color_code: ""
    },
  ]
};


export {
  greeting,
  socialMediaLinks,
  skillsSection,
  workExperiences,
  openSource,
  blogSection,
  contactInfo,
  certifications,
  Projects,
};
