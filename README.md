# McHacks2022 - Discrete Lettuce Recipe Recommending Web Application

## About
Discrete Lettuce is a recipe recommender that helps people find recipes that use up as many of their leftover ingredients as possible. Users simply input some of the food items they would like to use up, and our web application generates recipes among 10,000 entries for them to try out! In addition, our users can also select the kind of mood they want to experience while cooking, and the recommender can take that choice into account! Discrete Lettuce is a web-based recipe recommender that combines simple yet powerful natural language processing techniques with deep learning. Our data set was graciously provided by Kaggle, and our team specifically used t5-base-finetuned-emotion model for analyzing the sentiments of each recipe. The preprocessing of our dataset was mainly done using pandas on Kaggle Notebooks and Google Colaboratory. We also leveraged Google Cloud Cloud TPUs to run sentiment inference on 400,000 recipes in our dataset - this eventually helped us build the function of recommending recipes based on the user's mood. The front end of Discrete Lettuce is a simple display created with React.js, CSS, SCSS, and Material-UI - it also uses McHacks 2022 colours to make the display fit the theme of this year's hackathon!

**Data processing:**  Python, pandas, sklearn <br />
**Deep learning:** Google Cloud Cloud TPUs, t5-base-finetuned-emotion model <br />
**Frontend:** React.js, Material-UI, CSS and SCSS

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

Click on one of the two options to generate your recommendations!

![](https://imgur.com/a/WqOVSQ0)

[YouTube Demo](https://www.youtube.com/)

[Devpost Link](https://devpost.com/software/recipe-recommender-7p1n0f)

[Data](https://drive.google.com/drive/folders/1xc6xijNbhba0-Y_F7QM2b4ODCqGyi1nv)

## Contributors
- [Takuya Ishii](https://github.com/owl0108)
- [Belle Pan](https://github.com/bpan4)
- [Yumika Shiba](https://github.com/OrangeFrog210)
- [Jacob Junqi Tian](https://github.com/jacobthebanana)
