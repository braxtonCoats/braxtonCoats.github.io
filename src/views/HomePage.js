import * as React from "react";
import ProjectCardPendo from "../components/ProjectCardPendo";
import ProjectCardDL from "../components/ProjectCardDL";
import { Ditto } from "ditto-react";
import Grid from "@mui/material/Unstable_Grid2";
import ProfilePic from "../assets/images/AboutMe/ProfilePic.JPG";
import { Box, Typography, useTheme, Avatar } from "@mui/material";

import { gridSpacing } from "../store/constant";

const Home = ({}) => {
  const theme = useTheme();
  const AvatarSize = 200;
  return (
    <Grid container spacing={gridSpacing}>
      {/** --- Grid container for Heading */}
      <Grid
        container
        p={8}
        spacing={8}
        columnGap={8}
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{ flexGrow: 1 }}
      >
        <Grid xs={5} align="right">
          <Avatar
            alt="braxton profile pic"
            src={ProfilePic}
            sx={{ width: AvatarSize, height: AvatarSize }}
          />
        </Grid>
        <Grid
          container
          xs
          display="flex"
          zIndex={1}
          direction="column"
          justifyContent="center"
        >
          {/** H1 Title */}
          <Typography variant="h2">
            <Ditto componentId="home-page.intro" />
          </Typography>
          <Typography variant="h6" color="text.secondary" paragraph>
            <Ditto componentId="home-page.description" />
          </Typography>
        </Grid>
      </Grid>

      {/** Container Grid of Cards */}
      <Grid
        container
        columnGap={16}
        rowGap={1}
        p={2}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Grid md={4} xs={12}>
          <ProjectCardPendo />
        </Grid>
        <Grid md={4} xs={12}>
          <ProjectCardDL />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
