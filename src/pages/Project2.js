import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Box, Divider } from "@mui/material";
import placeholder from "../assets/img/placeholder-image.png";
import { Ditto } from "ditto-react";
import { Card, CardMedia } from "@mui/material";
import BPdocumentation from "../assets/img/DL/BPdocumentation.png";
import BPlibrary from "../assets/img/DL/BPlibrary.png";
import PortalLR from "../assets/img/DL/Portal-lorez.png";
import BPtemplate from "../assets/img/DL/BPtemplate.png";
import ZH from "../assets/img/DL/zh.png";
import { Container } from "@mui/material";

const tab = "\u00A0\u00A0\u00A0\u00A0\u00A0";

export default function P2() {
  return (
    <Box md={8} sx={{ mt: 24, mr: 16, mb: 16, ml: 16, flexGrow: 1 }}>
      {/** Project 2 - Design Library */}

      <Grid container spacing={4} sx={{ flexGrow: 1 }}>
        {/** Project Title */}
        <Grid xs={12}>
          <Typography variant="h2" align="center" gutterBottom component="div">
            <Ditto textId="text_62f05abff475e74ce5ffd826" />
          </Typography>
        </Grid>
        <Divider />
        {/** Overview */}
        <Grid xs={12}>
          <Typography variant="h4" align="center" gutterBottom component="div">
            <Ditto textId="text_62faf19902f1138386d1c892" />
          </Typography>
        </Grid>
        <Grid xs={12}>
          <Typography paragraph gutterBottom component="div">
            {tab}
            {/** Overview p-1 */}
            <Ditto textId="text_62faf19902f1138386d1c894" />
          </Typography>
        </Grid>

        <Grid xs={12}>
          {/** Overview p-2 */}
          <Typography paragraph gutterBottom component="div">
            <Ditto textId="text_62faf19902f1138386d1c896" />
            {/** Overview p-3 */}
            <Ditto textId="text_62faf19902f1138386d1c898" />
          </Typography>
        </Grid>
        <Grid xs={12}>
          <Typography paragraph gutterBottom component="div">
            {/** Overview p-4 */}
            <Ditto textId="text_62faf19902f1138386d1c89a" />
            {/** Overview p-5 */}
            <Ditto textId="text_62faf18f036a8a065286e758" />
          </Typography>
        </Grid>
        <Grid xs={12}></Grid>
        <Card raised sx={{ maxHeight: 500 }}>
          <CardMedia component="img" image={PortalLR} alt="random" />
        </Card>

        {/** Problem Statement */}
        <Grid xs={12} pt={12}>
          <Typography variant="h4" align="center" gutterBottom component="div">
            <Ditto textId="text_62f05ac0f475e74ce5ffd828" />
          </Typography>
        </Grid>
        <Grid xs={12}>
          <Typography variant="h5" align="center" gutterBottom component="div">
            {tab}
            <Ditto textId="text_62f05ac0f475e74ce5ffd82a" />
          </Typography>
        </Grid>
        <Divider xs={12} variant="middle" />

        {/** Key Result */}
        <Grid xs={12} pt={12}>
          <Typography variant="h4" align="center" gutterBottom component="div">
            <Ditto textId="text_62f05ac0f475e74ce5ffd82c" />
          </Typography>
        </Grid>
        <Grid>
          <Typography
            variant="h5"
            align="center"
            paragraph
            gutterBottom
            component="div"
          >
            {tab}
            <Ditto textId="text_62f05ac0f475e74ce5ffd82e" />
          </Typography>
        </Grid>

        {/** Journey */}
        <Grid xs={12}>
          <Typography variant="h4" align="center" component="div">
            <Ditto textId="text_62f05ac0f475e74ce5ffd830" />
          </Typography>
        </Grid>

        <Grid xs={12}>
          {/** Journey p-1 */}
          <Typography paragraph component="div">
            {tab}
            <Ditto textId="text_62f05ac0f475e74ce5ffd832" />
          </Typography>

          {/** Journey p-2 */}
          <Typography paragraph component="div">
            <Ditto textId="text_62faf68e5c58cf76c2d4c8f2" />
          </Typography>
        </Grid>

        <Grid xs={12}>
          {/** Journey p-3 */}
          <Typography paragraph component="div">
            <Ditto textId="text_62faf68e5c58cf76c2d4c8f3" />
          </Typography>
        </Grid>

        <Grid xs={12}>
          {/** Journey p-4 */}
          <Typography paragraph component="div">
            <Ditto textId="text_62faf68e5c58cf76c2d4c8f4" />
            {/** Journey p-5 */}
            <Ditto textId="text_62faf68e5c58cf76c2d4c8f5" />
          </Typography>
        </Grid>

        <Grid xs={12}>
          {/** Journey p-6 */}
          <Typography paragraph component="div">
            <Ditto textId="text_62faf68e5c58cf76c2d4c8f6" />
          </Typography>
        </Grid>

        <Grid xs={12}>
          {/** Journey p-7 */}
          <Typography pb={12} align="center" variant="h5" component="div">
            <Ditto textId="text_62faf68e5c58cf76c2d4c8f7" />
          </Typography>
        </Grid>

        <Grid xs={4}>
          {/** Journey p-8 */}
          <Typography paragraph pt={8}>
            {tab}
            <Ditto textId="text_62faf695eb7de6de50a6ee37" />
          </Typography>
        </Grid>

        <Grid xs={8} pb={12}>
          <Card raised sx={{ maxHeight: 500 }}>
            <CardMedia component="img" image={BPlibrary} alt="random" />
          </Card>
        </Grid>

        {/** Journey p-9 */}
        <Grid xs={8} pb={12}>
          <Card raised sx={{ maxHeight: 500 }}>
            <CardMedia component="img" image={BPdocumentation} alt="random" />
          </Card>
        </Grid>

        <Grid xs={4}>
          <Typography paragraph pt={8}>
            {tab}
            <Ditto textId="text_62faf8086ec1ac009fee9929" />
          </Typography>
        </Grid>

        <Grid xs={4} pt={8} >
        {/** Journey p-10 */}
        <Typography paragraph>
        {tab}<Ditto textId="text_62faf8086ec1ac009fee992a" />
        </Typography>
        </Grid>
        <Grid xs={8} pb={12}>
        <Card raised sx={{ maxHeight: 500 }}>
          <CardMedia component="img" image={BPtemplate} alt="random" />
        </Card>
        </Grid>


        <Grid xs={12}>
        {/** Journey p-11 */}
        <Typography paragraph>
        {tab}<Ditto textId="text_62faf8086ec1ac009fee992b" />
        </Typography>
        </Grid>


        {/** Journey p-12 */}
        <Typography paragraph>
        <Ditto textId="text_62faf8086ec1ac009fee992c" />
        </Typography>
        
        <Container component="img" src={ZH} sx={{}}/>



        {/** Challenges */}
        <Grid pt={12} xs={12}>
          <Typography variant="h4" align="center" gutterBottom component="div">
            <Ditto textId="text_62f05ac0f475e74ce5ffd83a" />
          </Typography>
        </Grid>


        <Grid xs={12}>
            {tab}
            {/** Challenges p-1 */}
            <Typography paragraph component="div">
            <Ditto textId="text_62f05ac0f475e74ce5ffd83c" />
            </Typography>
            </Grid>
            <Grid xs={12}>
            {/** Challenges p-1 */}
            <Typography paragraph>
            <Ditto textId="text_62faf9beb4a90a702606e539" />
            </Typography>
            </Grid>
            <Grid xs={12}>
            {/** Challenges p-1 */}
            <Typography paragraph>
            <Ditto textId="text_62fafaadd139c83b976579c9" />
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
