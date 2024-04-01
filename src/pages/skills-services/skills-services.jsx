import React from "react";
import {
  Paper,
  Box,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import PageHeader from "../../components/page-header";
import { ArrowRight as ArrowRightIcon } from "@mui/icons-material";
import skillsServicesData from "../../utils/skills-services-data";

const SkillsServices = () => {
  const { services, skills } = skillsServicesData;

  return (
    <Paper>
      <Box m={2} pl={2} pr={2} pt={6} pb={6}>
        <Grid container direction="column">
          <Grid item>
            <PageHeader title="Services" />
          </Grid>
          <Grid item>
            <Grid container spacing={2} sx={{ textAlign: "center" }}>
              {services.map((service, index) => (
                <Grid key={index} item xs={12} md={4}>
                  <Paper sx={{ height: "100%" }} elevation={4}>
                    <Box p={3}>
                      {service.icon}
                      <Typography variant="h6">{service.title}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        {service.description}
                      </Typography>
                    </Box>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item mt={4}>
            <PageHeader title="Skills" />
          </Grid>
          <Grid item>
            <Grid container spacing={2} sx={{ textAlign: "center" }}>
              {skills.map((skill, skill_index) => (
                <Grid key={`skill_${skill_index}`} item xs={12} md={6} lg={3}>
                  <Paper sx={{ height: "100%" }} elevation={4}>
                    <Box p={2}>
                      <Typography variant="button">{skill.title}</Typography>
                      <List>
                        {skill.items.map((skill_item, skill_item_index) => (
                          <ListItem key={skill_item_index}>
                            <ListItemIcon>
                              <ArrowRightIcon color="primary" />
                            </ListItemIcon>
                            <ListItemText
                              primary={
                                <Typography variant="body2">
                                  {skill_item}
                                </Typography>
                              }
                            />
                          </ListItem>
                        ))}
                      </List>
                    </Box>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

export default SkillsServices;
