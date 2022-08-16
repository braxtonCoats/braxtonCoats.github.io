import * as React from "react";
import Typography from "@mui/material/Typography";
import placeholder from "../assets/img/placeholder-image.png";
import Box from "@mui/material/Box";
import { Ditto } from "ditto-react";
import { CardActions, CardMedia} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Card from "@mui/material/Card";
import Graduation from '../assets/img/AboutMe/Graduation.JPG';
import Internship from '../assets/img/AboutMe/Internship.jpeg';
import ProfilePic from '../assets/img/AboutMe/ProfilePic.JPG';


const tab = "\u00A0\u00A0\u00A0\u00A0\u00A0";

export default function AboutMe() {
  return (
    <Box md={8} sx={{ mt: 24, mr: 16, mb: 16, ml: 16, flexGrow: 1 }}>

      <Grid container spacing={4} sx={{ flexGrow: 1 }}>
        {/** Page Title */}
        <Grid xs={12}>
          <Typography variant="h2" align="center" gutterBottom component="div">
            <Ditto textId="text_62fa387f28a9586255be94b8" />
          </Typography>
        </Grid>

        {/** PIC: Picture of me */}
        <Grid xs={6}  p={8} align='center' >
            <Card raised sx={{maxHeight: 500, maxWidth: 300}}>
                <CardMedia component="img" image={ProfilePic} alt="random" />
            </Card>
        </Grid>
        {/** Background */}
        <Grid xs={6} pt={16} justifyContent="center" alignItems='center' >
            <Typography paragraph align="center" gutterBottom component="div">
                <Ditto textId="text_62fa387f28a9586255be94c2" />
            </Typography>
        </Grid>

        {/** Finding Design */}
        <Grid xs={6} pt={16}>
            <Typography paragraph align="center" gutterBottom component="div">
                <Ditto textId="text_62fa387f28a9586255be94c6" />
            </Typography>
        </Grid>
        {/** PIC: College Braxton */}
        <Grid xs={6} p={8} align='center'>
            <Card raised sx={{maxHeight: 300, maxWidth: 300}}>
                <CardMedia component="img" image={Internship} alt="random" />
            </Card>
        </Grid>
                {/** PIC: BW Pic */}
                <Grid xs={6} p={8} align='center'>
            <Card raised sx={{maxHeight: 300, maxWidth: 300}}>
                <CardMedia component="img" image={Graduation} alt="random" />
            </Card>
        </Grid>
        {/** Internship */}
        <Grid xs={6} pt={16}>
            <Typography paragraph align="center" gutterBottom component="div">
                <Ditto textId="text_62fa387f28a9586255be94c8" />
            </Typography>
        </Grid>



      </Grid>
    </Box>
  );
}
