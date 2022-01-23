import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import Typography from "@mui/material/Typography";
import { getRecipes } from "../data.js";

import { ThemeProvider } from "@mui/material/styles";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Icon from "@mui/material/Icon";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Grid from "@mui/material/Grid";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

import theme from "../theme";

const ExpandMore = ((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

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

export default function Results(props) {
  const classes = useStyle()
  const [isLoading, setIsLoading] = useState(true);
  const [expanded, setExpanded] = useState([]);
  const [recipes, setRecipes] = useState([]);
  let [searchParams, setSearchParams] = useSearchParams();
  const ingredients = JSON.parse(searchParams.get("ingredients"))
  const emotion = searchParams.get("emotion")

  const getNumMatchedIngredients = (recipe) => {
    let numIngredientsMatched = 0;
    ingredients.forEach(
      (ingredient) => {
        if (recipe.RecipeIngredientParts.includes(ingredient)) {
          numIngredientsMatched += 1;
        }
      }
    )

    return {numIngredientsMatched, recipe};
  }  

  const matchedRecipes = recipes.map(getNumMatchedIngredients).filter(({recipe}) => (emotion === null) ? true : recipe.emotions === emotion).filter(({numIngredientsMatched}) => numIngredientsMatched > 0)
  matchedRecipes.sort((entry1, entry2) => entry2.numIngredientsMatched - entry1.numIngredientsMatched)
  console.log(matchedRecipes) 

  useEffect(async () => {
    const recipes = await getRecipes();
    setIsLoading(false);
    setRecipes(recipes);
  }, []);

  const renderRecipe = ({numIngredientsMatched, recipe}) => {
    const {
      RecipeId,
      Name,
      CookTime,
      PrepTime,
      Images,
      emotions,
      Description,
      RecipeIngredientParts
    } = recipe
    const handleExpandClick = () => {
      setExpanded(RecipeId);
    };

    return (
        <Card sx={{ maxWidth: 345,  height: '100%', display: 'flex', flexDirection: 'column', margin: "8px", justifyContent: "center" }} xs={12} sm={0} md={8} key={RecipeId} onClick={handleExpandClick}>
        <CardHeader
          // avatar={<Avatar>{numIngredientsMatched}</Avatar>}
          action={
            <IconButton aria-label="settings">
              <Icon></Icon>
            </IconButton>
          }
          title={Name}
          subheader={`${PrepTime.slice(2)} Prep Time, ${CookTime.slice(
            2
          )} Cooking Time.`}
        />
        <CardMedia component="img" height="194" image={Images[0]} alt={Name} />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {Description}
            {/* {RecipeIngredientParts.map((ingredient) => `${ingredient}`)} */}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Button variant="filled" color="secondary" endIcon={<OpenInNewIcon />} onClick={()=>window.open(`https://www.food.com/recipe/${RecipeId}`)}>
            View More
          </Button>
          {/* <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton> */}
          
        </CardActions>
      </Card>
    );
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Backdrop
          className={classes.backdrop}
          classes={{ root: classes.backdropBackground }}
          style={{backgroundColor: "ffffff"}}
          open={isLoading}
        >
          <CircularProgress color="primary" />
        </Backdrop>

        <Container sx={{ py: 8 }} maxWidth="md">
          <Typography variant="h5" align="center" color="primary" paragraph>
            Here are your recommended recipes!
          </Typography>
          {/* <Grid
                container
                rowSpacing={1} 
                columnSpacing={{ xs: 6, sm: 2, md: 3 }}
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
            > */}
                <div style={{display: "flex", flexWrap: "wrap"}}>
                {matchedRecipes.slice(0, 30).map(renderRecipe)}
                </div>
            {/* </Grid> */}
          
        </Container>
      </ThemeProvider>
    </div>
  );
}
