import React, { useState } from "react";
import { useMount } from "react-use";
import { Paper, Box, Typography, Tabs, Tab, Grid } from "@mui/material";
import PageHeader from "../components/page-header";
import portfolioData from "../utils/portfolio-data";

const Portfolio = () => {
  const [selectedTab, setSelectedTab] = useState("all");
  const [all_items, setAllItems] = useState([]);
  const [selected_items, setSelectedItems] = useState([]);

  const { portfolio } = portfolioData;

  useMount(() => {
    let all_category_items = [];

    portfolio.forEach((category) => {
      all_category_items = [...all_category_items, ...category.items];
    });

    setAllItems(all_category_items);
    setSelectedItems(all_category_items);
  });

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);

    setSelectedItems(
      newValue === "all"
        ? all_items
        : portfolio.find(
            (category) => category.title.toLowerCase() === newValue
          )?.items
    );
  };

  return (
    <Paper>
      <Box m={2} pl={2} pr={2} pt={6} pb={6}>
        <PageHeader title="Portfolio" />

        <Box mb={2}>
          <Tabs
            value={selectedTab}
            onChange={handleChange}
            aria-label="portfolio categories"
          >
            <Tab key={0} value="all" label="All" />
            {portfolio.map((category, index) => (
              <Tab
                key={index + 1}
                value={category.title.toLowerCase()}
                label={category.title}
              />
            ))}
          </Tabs>
        </Box>

        {/* <Box></Box> */}
        <Grid container spacing={2}>
          {selected_items.map((item) => (
            <Grid key={item.id} item xs={12} md={6} lg={4}>
              <Paper elevation={4} sx={{ height: "100%" }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                  pt={1}
                >
                  <img
                    style={{ width: "300px", height: "200px" }}
                    src={require(`../assets/portfolio/${item.image}`)}
                    alt={item.title}
                  />
                </Box>
                <Box mt={1} ml={1} mr={1}>
                  <Typography variant="subtitle2">{item.title}</Typography>
                </Box>
                <Box ml={1} mr={1}>
                  <Typography paragraph variant="caption">
                    {item.description}
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Paper>
  );
};

export default Portfolio;
