import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
	palette: {
		primary: {
			light: "#f89790",
			main: "#ffffff",
			dark: "#f56f65", //red medium
			contrastText: "#02365e",
		},
		secondary: {
			light: "#ffd081",
			main: "#5C63AB",
			dark: "#007CC0",
			contrastText: "#5C63AB19",
		},
		textPrimary: {
			main: "#4C5391",
		},
		background: {
			default: "#007cc0",
		},
	},
});

export default theme;