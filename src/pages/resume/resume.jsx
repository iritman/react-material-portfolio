import React from "react";
import { Paper, Box, Typography } from "@mui/material";
import ResumeTimeline from "./resume-timeline";
import { Work as WorkIcon } from "@mui/icons-material";
import resumeData from "../../utils/resume-data";

const Resume = () => {
  return (
    <Paper>
      <Box m={2} pl={2} pr={2} pt={6} pb={6}>
        <Typography
          variant="h6"
          sx={{
            textDecorationLine: "underline",
          }}
        >
          Resume
        </Typography>

        <ResumeTimeline
          title="Working History"
          icon={<WorkIcon />}
          items={resumeData.experiences}
        />
      </Box>
    </Paper>
  );
};

export default Resume;
