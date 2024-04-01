import React from "react";
import { Paper, Box, Typography, Grid } from "@mui/material";
import ResumeTimeline from "../components/timeline/resume-timeline";
import { Work as WorkIcon } from "@mui/icons-material";
import resumeData from "../utils/resume-data";
import PageHeader from "../components/page-header";

const Resume = () => {
  return (
    <Paper>
      <Box m={2} pl={2} pr={2} pt={6} pb={6}>
        <PageHeader title="Resume" />

        <Grid container>
          <Grid item xs={12} md={6}>
            <ResumeTimeline
              title="Working History"
              icon={<WorkIcon />}
              items={resumeData.experiences}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <ResumeTimeline
              title="Education History"
              icon={<WorkIcon />}
              items={resumeData.education}
            />
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

export default Resume;
