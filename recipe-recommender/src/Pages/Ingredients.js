import React from "react";

// import Typography from '@mui/material/Typography';
import { Autocomplete } from "@material-ui/lab";
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid'
import {ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { makeStyles } from "@material-ui/core/styles";

import "./pagestyling.css";
import theme from "../theme";

export default function Ingredients(props) {
    return(
        <div>
        <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="sm">
            <Grid 
                className="search"
                container direction="column" 
                alignItems="center" 
                justify="center" 
                // style={{backgroundColor: "#ffd081"}}
            >
            <TextField 
                className="search"
                id="input" 
                label="Input ingredients here!" 
                variant="filled" 
                style={{backgroundColor: "#FED9AF", color: "#5C63AB", borderRadius: 5 }}
            />
            </Grid>
            </Container>
        </ThemeProvider>
        </div>
    )
    
}