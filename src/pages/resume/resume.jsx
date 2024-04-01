import React from "react";
import { Paper, Box, Typography, Stack } from "@mui/material";
import resumeData from "../../utils/resume-data";
// ----
import {
  Timeline,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
} from "@mui/lab";
import { timelineItemClasses } from "@mui/lab/TimelineItem";
import { Work as WorkIcon } from "@mui/icons-material";

// ----

const ResumeTimeline = ({ icon, items }) => {
  return (
    <Timeline
      sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
      }}
    >
      <TimelineItem sx={{ ml: "-12px" }}>
        <TimelineSeparator>
          <TimelineDot
            sx={{
              backgroundColor: "primary.main",
              color: "text.primary",
            }}
          >
            {icon}
          </TimelineDot>
          <TimelineConnector sx={{ minHeight: 30 }} />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6">Working History</Typography>
        </TimelineContent>
      </TimelineItem>
      {items.map((item, index) => (
        <TimelineItem key={index} sx={{ paddingTop: 0 }}>
          <TimelineSeparator>
            <TimelineDot variant="outlined" color="primary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ paddingBottom: 3 }}>
            <Typography variant="h6" component="span">
              {item.title}
            </Typography>
            <Typography variant="subtitle2" color="gray">
              {item.date}
            </Typography>
            <Typography variant="body2">{item.description}</Typography>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};

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

        <ResumeTimeline icon={<WorkIcon />} items={resumeData.experiences} />
      </Box>
    </Paper>
  );
};

export default Resume;
