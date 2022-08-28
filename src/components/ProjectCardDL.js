import * as React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import placeholder from '../assets/images/placeholder-image.png';
import DLcover from '../assets/images/DL/DesignLibrary.jpg';
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';


export default function ProjectCardDL() {
    return (

        /** Project Card 1 */
        /** Pendo Customization */
        <Card raised>
            {/** Header */}
            <CardContent>
                <Typography variant="h5" component="h2" color='primary.main'>
                Design Library
                </Typography>
            </CardContent>

            {/** Media */}
            <CardMedia component="images"
                image={DLcover}
                alt="random"
            />
            
            {/** Actions */}
            <CardActions sx={{ 
                justifyContent: 'flex-end',
                padding: 2,
                }}>
                    
                <Button variant='contained' component={RouterLink} to="/project-2">View Project</Button>

            </CardActions>
        </Card>
    );
}