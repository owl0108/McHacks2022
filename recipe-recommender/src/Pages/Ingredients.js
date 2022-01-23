import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// import Typography from '@mui/material/Typography';
// import { Autocomplete } from "@material-ui/lab";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { ThemeProvider } from "@mui/material/styles";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Autocomplete from "@mui/material/Autocomplete";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";

import { makeStyles } from "@material-ui/core/styles";

import { getIngredients, getEmotions } from "../data.js";
import EmotionPicker from "../Components/EmotionPicker.js";

import "./pagestyling.css";
import theme from "../theme";

const useStyle = makeStyles((styles) => ({
  titleItemRight: {
    //		color: "white",
    top: "100%",
    // height: 30,
    float: "right",
    position: "relative",
    margin: styles.spacing(1),
    // transform: "translateY(10%)",
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 200,
    flexDirection: "column",
  },
  backdropBackground: {
    backgroundColor: "rgba(255, 255, 255, 0.85)",
  },

}));

// getInitialState: function() {
//     return {
//         textFieldValue: ''
//     };
// }

export default function Ingredients(props) {
  const classes = useStyle();
  let navigate = useNavigate();
  const [textInput, setTextInput] = useState("");
  const [selections, setSelections] = useState([]);
  const [emotionData, setEmotionData] = useState({});
  const [ingredients, setIngredients] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [emotion, setEmotion] = useState("null");

  useEffect(async () => {
    const ingredients = await getIngredients();
    setIngredients(ingredients);
    const emotions = await getEmotions();
    setEmotionData(emotions);
    setIsLoading(false);
  }, []);

  console.log(emotionData);

  const handleTextInput = (e) => {
    setTextInput(e.target.value);
    console.log(e.target.value);
  };

  //this is where we do the data query
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      navigate(`/results?ingredients=${JSON.stringify()}`);
    }
  };

  const handleSearch = () =>
    navigate(
      `/results?ingredients=${JSON.stringify(selections)}&emotion=${emotion}`
    );

  return (
    <div className="center">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Backdrop
          // className={classes.backdrop}
          // classes={{ root: classes.backdropBackground }}
          open={isLoading}
          className={classes.backdrop}
          classes={{ root: classes.backdropBackground }}

        >
          <CircularProgress color="primary" />
        </Backdrop>
        <Container maxWidth="sm">
          
          <Grid
            className="search"
            container
            direction="column"
            alignItems="center"
            justify="center"
            // style={{backgroundColor: "#ffd081"}}
            style={{ flex: 1, flexDirection: "row", alignContent: "center" }}
          >
            {/* <TextField
              className="search"
              id="input"
              label="Input your ingredients here! "
              variant="filled"
              style={{
                backgroundColor: "#FED9AF",
                color: "#5C63AB",
                borderRadius: 5,
              }}
              onChange={(e) => handleTextInput(e)}
              onKeyDown={(e) => handleKeyPress(e)}
            /> */}
            <Autocomplete
              multiple
              id="tags-outlined"
              options={ingredients}
              // getOptionLabel={(option) => option.title}
              // defaultValue={[top100Films[13]]}
              value={selections}
              style={{ flexGrow: 1 }}
              onChange={(event, newValue) => setSelections(newValue)}
              filterSelectedOptions
              renderInput={(params) => (
                <TextField
                  {...params}
                  className="search"
                  id="input"
                  label="Input your ingredients here! "
                  variant="filled"
                  color="secondary"
                  style={{
                    backgroundColor: "#FED9AF",
                    color: "#5C63AB",
                    borderRadius: 5,
                    flexGrow: 1,
                  }}
                  fullWidth
                  // onChange={(e) => handleTextInput(e)}
                  // onKeyDown={(e) => handleKeyPress(e)}
                />
              )}
            />
            <IconButton
              className={classes.titleItemRight}
              // color="primary"
              onClick={handleSearch}
            >
              <SearchIcon />
            </IconButton>
            <div style={{flexBasis: "100%", height: 0}}/>
            <EmotionPicker
            emotionData={emotionData}
            value={emotion}
            handleChange={(event, value) => setEmotion(value)}
            style={{flexGrow: 1, flexBasis: 1}}
          />
          </Grid>
        </Container>
      </ThemeProvider>
    </div>
  );
}
