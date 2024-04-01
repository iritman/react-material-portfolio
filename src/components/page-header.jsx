import React from "react";
import { Typography } from "@mui/material";

const PageHeader = ({ title }) => {
  return (
    <Typography
      variant="h6"
      sx={{
        textDecorationLine: "underline",
      }}
      mb={4}
    >
      {title}
    </Typography>
  );
};

export default PageHeader;
