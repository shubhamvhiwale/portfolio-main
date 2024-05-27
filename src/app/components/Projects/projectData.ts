interface projectDataProps {
  name: string;
  role: string;
  duration: string;
  technology: string;
  liveLink: string[];
  description: string;
  [key: string]: any;
}

export const projectData: projectDataProps[] = [
  {
    name: "AM AUTOMATION",
    role: "Full stack developer with PLC (programmable logic controller)",
    duration: "8 months",
    technology: "MERN",
    liveLink: [],
    description:
      "I worked as a full stack developer on AM Automation software built for the production industry. The software tracks the status of the production cycle. When a cycle is completed, a '1' is input into the PLC (Programmable Logic Controller). The software continuously monitors the PLC's inputs, and when it detects a '1', it marks the cycle as complete and updates the status, prompting the user to start a new cycle. Additionally, the software includes various CRUD (Create, Read, Update, Delete) functionalities. For example, administrators can add parts with names, images, descriptions, and more",
  },

  {
    name: "Students Brands",
    role: "Backend developer (NodeJs with Hapi.js framework)",
    duration: "6 months",
    technology: "ReactJs, NodeJs, Hapi.js",
    liveLink: [
      "https://www.ipl.org",
      "https://www.papercamp.com",
      "https://www.123helpme.com",
    ],
    description:
      "The Student Brands team is passionate about student insights, data-driven leadership, and innovations in education. With 20+ direct-to-student sites under management in 10+ countries, the student brand  is in touch with millions of students around the world every month, helping them succeed in high school, college, and post-graduate studies.",
  },
  {
    name: "Agent connected",
    role: "Full stack developer (NodeJs, ReactJS),",
    duration: "6 months",
    technology: "NodeJs, ReactJs",
    liveLink: [],
    description:
      "The Enterprise Resource planning (ERP) systems are comprehensive software solutions designed to integrate and streamline various business processes within an organization. In the shipping industry, ERP systems are crucial for managing and optimizing operations related to vessel management, cargo tracking, supply chain management, finance, human resources, and other key aspects.",
  },
  {
    name: "Moraya Associates",
    role: "Full stack (MongoDB,Express, ReactJs, NodeJs)",
    duration: "6 months",
    technology: "MERN",
    liveLink: ["https://moryaassociates.com"],
    description:
      "The Moriya Associates is the software that is built into MERN technology. That helps to manage the banking customers’ data. In a bank or financial institution, Moraya Associates may be involved in the process of approving and disbursing loans, such as bike loans or home loans.",
  },
  {
    name: "ClassHub",
    role: " Frontend developer (ReactJs, material UI, bootstrap)",
    duration: "5 months",
    technology: "MERN",
    liveLink: [],
    description:
      "A  ClassHub software is designed to streamline various administrative tasks in educational institutions, including managing student attendance and other related functions. There are several popular class management software solutions available, each with its own set of features.    ",
  },
  {
    name: "Mahanubhav",
    role: "Full stack developer (MERN)",
    duration: "5 months",
    technology: "MERN",
    liveLink: [],
    description:
      "A customer portal is a secure and personalized online platform that allows customers to access information, services, and support related to a particular business or organization. It serves as a centralized hub where customers can interact with the company, manage their accounts, and find relevant information.",
  },
  {
    name: "HBITS",
    role: "Fontend developer (ReactJs)",
    duration: "4 months",
    technology: "MERN",
    liveLink: ["https://hbits.co"],
    description:
      "A hBits is the most experienced fractional ownership platform run by veterans with 35+ years of cumulative experience in commercial real estate    ",
  },
];
