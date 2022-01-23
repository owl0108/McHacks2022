import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
	palette: {
		primary: {
			light: "#59abf3",
			main: "#007cc0",
			dark: "#00508f",
			contrastText: "#ffffff",
		},
		secondary: {
			light: "#ffe48f",
			main: "#ffb260",
			dark: "#c88232",
			contrastText: "#000000",
		},
		textPrimary: {
			// main: "#4C5391",
		},
		background: {
			// default: "#007cc0",
		},
	},
});

export default theme;