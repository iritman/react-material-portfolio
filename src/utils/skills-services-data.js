import {
  Web as WebIcon,
  Diamond as DiamondIcon,
  Draw as DrawIcon,
} from "@mui/icons-material";

export default {
  services: [
    {
      icon: WebIcon,
      title: "Web Development",
      description: "I have been a web developer more than 10 years",
    },
    {
      icon: DiamondIcon,
      title: "Branding Identity",
      description: "I will make you a brand that is catchy and leaves a trace",
    },
    {
      icon: DrawIcon,
      title: "Illustrator",
      description: "I have been working on illustration design for 6 years",
    },
  ],

  skills: [
    {
      title: "Front-End",
      items: [
        "ReactJS",
        "JavaScript",
        "TypeScript",
        "Bootstrap",
        "Material UI",
      ],
    },
    {
      title: "Back-End",
      items: ["NodeJS", "Java", "Python", "Solidity"],
    },
    {
      title: "Databases",
      items: ["Firebase", "MS SQL Server", "MySQL", "MongoDB"],
    },
    {
      title: "Source Control",
      items: ["Git", "GitHub", "SCRUM/Agile"],
    },
  ],
};
