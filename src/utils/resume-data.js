import React from "react";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export default {
  name: "Naiem YF",
  title: "Full stack developer",

  socials: {
    Gmail: {
      link: "https://www.gmail.com",
      text: "Naiem Gmail address",
      icon: <MailOutlineIcon />,
    },
    LinkedIn: {
      link: "https://www.linkedin.com",
      text: "Naiem linkedIn address",
      icon: <LinkedInIcon />,
    },
    GitHun: {
      link: "https://www.github.com",
      text: "Naiem gitHub address",
      icon: <GitHubIcon />,
    },
  },
};
