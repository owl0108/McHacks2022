import * as React from 'react';

import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {ThemeProvider } from '@mui/material/styles';

import theme from "../theme";
import history from "../history";


const FrontPage = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <React.Fragment>
      <main>
        <Box
          sx={{
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Recipe Recommender
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              For when you have too many or too little things in your pantry.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button 
                href="/recommendation"
                variant="contained" 
                style={{backgroundColor: "#ffb260"}}
                onClick={props.handleOnClick} 
              >
                Get Recipes Via Ingredients
              </Button>
              <Button variant="outlined">Get Recipes Via Mood</Button>
            </Stack>
          </Container>
        </Box>
      </main>
      </React.Fragment>
      {/* End footer */}
    </ThemeProvider>
  );
}

export default FrontPage;