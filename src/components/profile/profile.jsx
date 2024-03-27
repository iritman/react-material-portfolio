import { Typography } from "@mui/material";
import React from "react";

import "./profile.css";
import profile_image from "./../../assets/images/my-profile.png";

const Profile = () => {
  return (
    <div className="profile container_shadow">
      <div className="profile_name">
        <Typography className="name">Naiem</Typography>
        <Typography className="title">Title</Typography>
      </div>

      <figure className="profile_image">
        <img src={profile_image} alt="" />
      </figure>

      <div className="profile_information">
        Insert Timeline
        <br />
        <button>download</button>
      </div>
    </div>
  );
};

export default Profile;
