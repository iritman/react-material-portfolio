import { Paper, Typography, Box, Button } from "@mui/material";
import React from "react";
import Profiletimeline from "../timeline/profile-timeline";
import {
  PersonOutlineOutlined as PersonOutlineOutlinedIcon,
  Download as DownloadIcon,
} from "@mui/icons-material";
import personalData from "../../utils/personal-data";
import resumeData from "../../utils/resume-data";

import "./profile.css";
import profile_image from "./../../assets/images/my-profile.png";

const Profile = () => {
  const { name, title } = resumeData;

  return (
    <Paper>
      <Box className="profile_name">
        <Typography className="name">{name}</Typography>
        <Typography className="title">{title}</Typography>
      </Box>

      <figure className="profile_image">
        <img src={profile_image} alt="" />
      </figure>

      <Box>
        <Profiletimeline
          icon={<PersonOutlineOutlinedIcon />}
          items={personalData.items}
        />
      </Box>

      <Box pb={3} display="flex" justifyContent="center">
        <Button
          variant="contained"
          endIcon={<DownloadIcon />}
          className="rounded-btn"
        >
          <Typography variant="button">Download CV</Typography>
        </Button>
      </Box>
    </Paper>
  );
};

export default Profile;
