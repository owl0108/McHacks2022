import React from "react";

import { makeStyles } from "@material-ui/core/styles";
// import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import './styling.css';

const useStyles = makeStyles((theme) => ({
	footer: {
		borderTop: `1px solid ${theme.palette.divider}`,
		marginTop: theme.spacing(35),
		marginBottom: 0,
    bgcolor: "#636363",
	},
}));

function Copyright() {
    return (
      <Typography variant="body2" color="#ffffff" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          Discrete Lettuce
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
}

export default function Footer() {
	const classes = useStyles();
	return (
		<div className="footer">
			{/* <Container maxWidth="md" component="footer" className={classes.footer}> */}
				{/* <Box > */}
                <Box 
                  // className="footer"
                  style={{ background: '#007cc0'}}
                  component="footer"
                  position="static"
                >
                    <Typography
                        variant="subtitle1"
                        align="center"
                        color="#ffffff"
                        component="p"
                    >
                    Produced at McHacks 2022
                    </Typography>
                <Copyright />
				</Box>
			{/* </Container> */}
		</div>
	);
}