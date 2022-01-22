import React from "react";

import { AppBar } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import KitchenIcon from '@mui/icons-material/Kitchen';

import theme from "../theme";

const useStyles = makeStyles((theme) => ({
	appBar: {
		borderBottom: `1px solid ${theme.palette.divider}`,
	},
	toolbar: {
		flexWrap: "wrap",
	},
	toolbarTitle: {
		flexGrow: 1,
	},
	link: {
		margin: theme.spacing(1, 1.5),
	},
	button: {
		color: "#ffffff",
        position: "absolute",
        right: 30,
	},
}));

export default function TopBar(props) {
	const classes = useStyles();
	return (
		<div>
			<ThemeProvider theme={theme}>
				<AppBar
                    style={{ background: '#007cc0' }}
					position="static"
					elevation={0}
                    className={classes.appBar}
                    
				>
					<Toolbar className={classes.toolbar}>
						<KitchenIcon style={{fill: "#ffffff"}}/>
						<Typography
							variant="h6"
							color="primary"
							noWrap
						>
							 Discrete Lettuce
						</Typography>
						<Button
							href="#"
							color="primary"
							variant="outlined"
							className={(classes.link, classes.button)}
							onClick={props.goHome}
						>
							Home
						</Button>
					</Toolbar>
				</AppBar>
			</ThemeProvider>
		</div>
	);
}