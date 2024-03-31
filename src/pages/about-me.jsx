import React from "react";
import { Paper, Box, Typography } from "@mui/material";

const AboutMe = () => {
  return (
    <Paper>
      <Box m={2} pl={2} pr={2} pt={6} pb={6}>
        <Typography
          variant="h6"
          sx={{
            textDecorationLine: "underline",
          }}
        >
          About me
        </Typography>
        <Box mt={4} />
        <Typography
          variant="body2"
          sx={{ textAlign: "justify", textJustify: "inter-word" }}
        >
          Hey there, I'm Naiem Yousefifard, a versatile freelancer with a
          passion for crafting seamless digital experiences. With over two
          decades of hands-on experience in the realm of web and mobile
          development, I bring a wealth of expertise to every project I
          undertake.
        </Typography>
        <Typography variant="body2" mt={2}>
          As a seasoned full-stack developer and Faradars instructor, I thrive
          on tackling complex challenges and transforming ideas into reality. My
          skill set spans a wide range of technologies, including Node.js,
          React.js, Next.js, and more. Whether it's building robust backend
          solutions with Express and MongoDB or crafting elegant frontend
          interfaces with Material UI and Antd UI, I'm committed to delivering
          high-quality, scalable solutions that exceed expectations.
        </Typography>
        <Typography variant="body2" mt={2}>
          With a keen eye for detail and a deep understanding of modern
          development practices, I'm dedicated to staying at the forefront of
          industry trends and technologies. I take pride in my ability to
          collaborate effectively with clients and colleagues alike, ensuring
          smooth communication and seamless project delivery. If you're looking
          for a reliable partner to bring your vision to life, I'm here to help.
          Let's create something extraordinary together.
        </Typography>
      </Box>
    </Paper>
  );
};

export default AboutMe;
