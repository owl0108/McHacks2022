import axios from "axios";

const server = axios.create({ baseURL: process.env.REACT_APP_API });

export const getRecipes = async () => {
  // Send a GET request to /data.json and return the data.json table.
  const response = await axios.get("recipe-labelled-balanced-slim.json");
  return response.data;
};

export const getIngredients = async () => {
  const response = await axios.get("ingredients.json");
  return (response.data);
}

export const getEmotions = async () => {
  const response = await axios.get("emotions.json");
  return (response.data);
}