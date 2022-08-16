import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import ProjectCardPendo from "./ProjectCardPendo";
import ProjectCardDL from "./ProjectCardDL";
import { Ditto } from "ditto-react";
import Grid from "@mui/material/Unstable_Grid2";
import SlackPic from "../assets/img/AboutMe/slack-picture.png";
import { Card, CardContent, CardMedia } from "@mui/material";

const Home = ({}) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid mt={24} container>
        <Grid xs={12}>
        {/** H1 Title */}
        <Typography align='center'
          variant="h2"
          gutterBottom
        >
          <Ditto componentId="home-page.intro" />
        </Typography>
        </Grid>
        <Grid xs={12}>
        <Typography align='center'
          variant="h5"
          color="text.secondary"
          paragraph
        >
          <Ditto componentId="home-page.description" />
        </Typography>
        </Grid>
      </Grid>

      <Grid xs={12} justifyContent="center" container>
        {/* Slack Picture */}
        <Card sx={{ maxWidth: 200, mt: 2}}>
          <CardMedia component="img" image={SlackPic} alt="random" />
          <CardContent>
            <Typography align="center" color='text.secondary' variant="body2">
              Current Slack photo
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Stack
        sx={{ pt: 4 }}
        direction="row"
        spacing={2}
        justifyContent="center"
      ></Stack>

      {/** Container Grid of Cards */}
      <Grid container spacing={8} ml={8} mr={8} mt={2}>
        <Grid xs={6}>
          <ProjectCardPendo />
        </Grid>
        <Grid xs>
          <ProjectCardDL />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
