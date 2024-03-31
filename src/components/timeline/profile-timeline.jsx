import React from "react";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";
import { timelineItemClasses } from "@mui/lab/TimelineItem";
import { Stack, Typography } from "@mui/material";

import "./profile-timeline.css";

const ProfileTimeline = ({ icon, items }) => {
  return (
    <Timeline
      sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
          mt: "-30px",
        },
      }}
    >
      <TimelineItem sx={{ ml: "-12px" }}>
        <TimelineSeparator sx={{ mt: "-40px" }}>
          <TimelineDot
            sx={{
              backgroundColor: "primary.main",
              color: "text.primary",
            }}
          >
            {icon}
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
      </TimelineItem>
      {items?.map((item) => (
        <TimelineItem key={item.title}>
          <TimelineSeparator>
            <TimelineDot variant="outlined" color="primary" />
            {item.title !== items[items.length - 1].title && (
              <TimelineConnector />
            )}
          </TimelineSeparator>
          <TimelineContent>
            <Stack direction="row" spacing={1} alignItems="center">
              <Typography variant="button">{`${item.title}:`}</Typography>
              <Typography variant="body2" color="gray">
                {`${item.value}`}
              </Typography>
            </Stack>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};

export default ProfileTimeline;
