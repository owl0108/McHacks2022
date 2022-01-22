import React from "react";
import {useState} from 'react';

// import Typography from '@mui/material/Typography';
// import { Autocomplete } from "@material-ui/lab";
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid'
import {ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';

// import { makeStyles } from "@material-ui/core/styles";

import "./pagestyling.css";
import theme from "../theme";



// getInitialState: function() {
//     return {
//         textFieldValue: ''
//     };
// }

export default function Ingredients(props) {
    const [textInput, setTextInput] = useState('');

    const handleTextInput = e => {
        setTextInput(e.target.value);
    }


    //this is where we put the api query!!!!!!!!
    // const keyPress = e => {
    //     if (e.keyCode ==13){
    //         console.log('value', e.target.value);

    //     }
    // }

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
                href="/results"
                id="input" 
                label="Input ingredients here!" 
                variant="filled" 
                style={{backgroundColor: "#FED9AF", color: "#5C63AB", borderRadius: 5 }}
                onChange={(e) => handleTextInput(e)}
                onKeyDown={(e) => props.handleKeyPress(e)}
            />
            </Grid>
            </Container>
        </ThemeProvider>
        </div>
    )
    
}