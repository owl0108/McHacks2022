<h1 align="center">McHacks 9 <br/> Discrete Lettuce, a Recipe Recommending Web App </h1>

## About

Discrete Lettuce is a recipe recommender that helps people find recipes that use up as many of their leftover ingredients as possible. Users simply input some of the food items they would like to use up, and our web application generates recipes among 10,000 entries for them to try out! In addition, our users can also select the kind of mood they want to experience while cooking, and the recommender can take that choice into account!

Discrete Lettuce is a web-based recipe recommender that combines simple yet powerful natural language processing techniques with deep learning. Our data set was graciously provided by Kaggle, and our team specifically used t5-base-finetuned-emotion model for analyzing the sentiments of each recipe. The preprocessing of our dataset was mainly done using pandas on Kaggle Notebooks and Google Colaboratory. We also leveraged Google Cloud Platform (GCP) Cloud TPUs to run sentiment inference on 400,000 recipes in our dataset - this eventually helped us build the function of recommending recipes based on the user's mood. The front end of Discrete Lettuce is a simple display created with React.js, CSS, SCSS, and Material-UI - it also uses McHacks 9 colours to make the display fit the theme of this year's hackathon! Thanks to the TPU-powered preprocessing on the GCP, we managed to keep Discrete Lettuce purely client-side and thus delightfully responsive. A demo of this application is hosted on Github Pages (using gh-pages and additional code from rafgraph).

**Data processing:**  Python, pandas <br />
**Deep learning:**  Google Cloud Platform (GCP) Cloud TPUs, t5-base-finetuned-emotion model <br />
**Frontend:** React.js, Material-UI, CSS, SCSS <br />
**Hosting:** Github Pages

## Dependencies

- npm

## Installation

Once opening the project, run <br />
```
npm install
```
and run <br />
```
npm start
```

## Usage
Try out Discrete Lettuce [here](https://dltc.ml/)! 

Click the "Get Recipes Via Ingredients" option on the home page to get started! 
![](https://i.imgur.com/dVwxf1C.jpg)

Users will be navigated to a page where they may input ingredients, and select a mood they want to experience while cooking (mood selection is optional but recommended for the extra element of fun it brings to your cooking experience!). 
![](https://i.imgur.com/PyJWhzX.jpg)
![](https://i.imgur.com/TIInclh.jpg)

Once the user clicks on the search button, they will be redirected to another page that displays all the recipes that fit their ingredients list and sentiment selection! Each recipe has a "View More" button that the users may click; this opens a new tab and allows the user to view the original recipe with the full instructions.
![](https://i.imgur.com/iFNRs4f.jpg)
![](https://i.imgur.com/E8oRnrR.jpg)

To navigate back to the home page, users may click the "Home" button on the top right of the screen. 


[YouTube Demo](https://youtu.be/YqQPOzgQSIM)

[Devpost Link](https://devpost.com/software/recipe-recommender-7p1n0f)

## Contributors
- [Takuya Ishii](https://github.com/owl0108)
- [Belle Pan](https://github.com/bpan4)
- [Yumika Shiba](https://github.com/OrangeFrog210)
- [Jacob Junqi Tian](https://github.com/jacobthebanana)
