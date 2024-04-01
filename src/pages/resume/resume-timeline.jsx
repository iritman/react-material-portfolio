import React from "react";
import {
  Timeline,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
} from "@mui/lab";
import { Typography } from "@mui/material";
import { timelineItemClasses } from "@mui/lab/TimelineItem";

const ResumeTimeline = ({ title, icon, items }) => {
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
          <Typography variant="h6">{title}</Typography>
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

export default ResumeTimeline;
