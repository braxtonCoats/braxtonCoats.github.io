import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Container } from "@mui/system";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      {/*<Link color="inherit" href="https://mui.com/">
          Your Website
        </Link>{" "} */}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Container
      sx={
        {
          /*bgcolor: "background.main" */
        }
      }
    >
      {/* Footer */}
      <Box sx={{ p: 6 }} component="footer">
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          This portfolio was built <strong>by hand</strong> using{" "}
          <Link href="https://reactjs.org/" target="blank">
            React
          </Link>{" "}
          and{" "}
          <Link href="https://mui.com/" target="blank">
            MUI
          </Link>
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          By Braxton Coats{" "}
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </Container>
  );
}
