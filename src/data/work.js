export const experiences = [
  {
    id: "intern",
    title: "Intern",
    company: "OTTOMAT3D",
    location: "Auckland",
    description: [
      "Designed and executed structured test cases for the OttoEngine platform, systematically logging results in spreadsheets and identifying bugs across end-to-end automated workflows",
      "Calibrated and tested an automated 3D printing system (Prusa CORE One & OttoEject), supporting reliable multi-job execution without manual intervention",
      "Debugged and resolved system-level issues across software and hardware layers, improving reliability of API-driven automation processes",
      "Worked with a full-stack system using React and Node.js, interacting with REST APIs and validating backend to frontend communication",
      "Configured and integrated embedded systems (Raspberry Pi and SKR board), ensuring stable communication between hardware components and software services",
    ],
    date: "November 2025 - February 2026",
    images: [
      new URL("../assets/1.webp", import.meta.url).href,
      new URL("../assets/2.webp", import.meta.url).href,
      new URL("../assets/4.webp", import.meta.url).href,
      new URL("../assets/3.webp", import.meta.url).href,
      new URL("../assets/5.webp", import.meta.url).href,
    ],
  },
  {
    id: "ambassador",
    title: "Student Ambassador",
    company: "Auckland University of Technology",
    location: "Auckland",
    description: [
      "Represented the university at events and outreach activities, engaging prospective students and sharing information on programmes and campus life",
      "Assisted with open days and campus tours, demonstrating strong communication and interpersonal skills",
    ],
    date: "January 2026 - Present",
    images: [],
  },
  {
    id: "cashier",
    title: "Checkout Operator",
    company: "Woolworths",
    location: "Auckland",
    description: [
      "Delivered efficient and accurate customer service in a high-volume retail environment, handling transactions and resolving queries under time pressure",
      "Managed cash and electronic payments with a high level of accuracy, maintaining compliance with store procedures and minimising discrepancies",
      "Collaborated with team members to maintain smooth checkout operations, ensuring a positive customer experience and reduced wait times",
    ],
    date: "May 2022 - Present",
  },
  {
    id: "football-coach-1",
    title: "Football Coach",
    company: "Little Kickers",
    location: "Auckland",
    description: [
      "Planned and delivered engaging football training sessions for 20+ young players aged 3-10",
      "Developed teamwork, communication, and fundamental skills in a safe, positive environment",
    ],
    date: "December 2024 - March 2026",
  },
  {
    id: "volunteer",
    title: "Volunteer",
    company: "Make-A-Wish",
    location: "Auckland",
    description: [
      "Raised funds for Make-A-Wish by engaging with the public and promoting donations outside a supermarket for one week",
      "Developed strong communication and interpersonal skills while interacting with a wide range of people ",
    ],
    date: "2018",
  },
];

export const images = [
  {
    id: 1,
    src: new URL("../assets/1.jpeg", import.meta.url).href,
    title: "️🖨️ Prusa CORE One 3D Printer",
    description:
      "Calibrated and integrated the Prusa CORE One with the OttoEject system, testing automated print workflows and ensuring reliable end-to-end execution of software-driven print jobs. ",
  },
  {
    id: 2,
    src: new URL("../assets/2.jpeg", import.meta.url).href,
    title: "💻 Software Testing ",
    description:
      "Designed and executed structured test scenarios on the OttoEngine platform, systematically documenting results in a spreadsheet, identifying bugs and edge cases, and validating system behaviour. ",
  },
  {
    id: 3,
    src: new URL("../assets/4.jpeg", import.meta.url).href,
    title: "⚙️ OttoEject ",
    description:
      "Calibrated and tested the world's first automated print handling system designed to manage and store multiple print jobs without manual intervention. ",
  },
  {
    id: 4,
    src: new URL("../assets/3.jpeg", import.meta.url).href,
    title: "🔧 Raspberry Pi / SKR Board Setup ",
    description:
      "Configured, debugged, and integrated Raspberry Pi and SKR board systems, resolving hardware–software communication issues and ensuring reliable execution of software-controlled automation. ",
  },
  {
    id: 5,
    src: new URL("../assets/5.jpeg", import.meta.url).href,
    title: "🎨 Figma / UI Design ",
    description:
      "Designed and prototyped a new UI feature to improve user interaction and workflow efficiency within the platform. ",
  },
];
