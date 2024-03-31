import React from "react";
import { AppBar, Box, Toolbar, Grid, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box mt={2} mb={2}>
      <AppBar sx={{ backgroundColor: "background.paper" }}>
        <Toolbar disableGutters>
          <Grid container p={2} alignItems="center" direction="row">
            <Grid item xs>
              <Typography variant="button">Faradars</Typography>
            </Grid>
            <Grid item xs>
              <Typography variant="body2" display="flex" justifyContent="right">
                ©️2024 All rights reserved
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Footer;
