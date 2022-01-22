// import logo from './logo.svg';
import {Route, Routes } from "react-router-dom";
import { BrowserRouter as Router} from "react-router-dom";
import React, { useState, useEffect, Component} from "react";

import CssBaseline from "@material-ui/core/CssBaseline";

import history from "./history";

import TopBar from './Components/TopBar';
import Footer from './Components/Footer';
import FrontPage from './Pages/FrontPage';
import Ingredients from './Pages/Ingredients';
import Results from './Pages/Results';

export default function App({location}) {
  // const [selected, setSelected] = useState("");
	// const [displayError, setDisplayError] = useState(false);

	const handleOnClick = () => {
		// if (selected === "") {
		// 	setDisplayError(true);
		// } else {
		// 	setDisplayError(false);
		// 	console.log("router display results " + selected);
		// 	history.push("/recommendation");
		// }
    history.push("/ingredients");
	};

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      history.push("/results");
    }
  }

  // const updateSelected = (title) => {
	// 	setSelected(title);
	// };

	const goHome = () => {
		// setSelected("");
		history.push("/");
	};

  return (
    <div> 
      <React.StrictMode>
      <CssBaseline />
      <TopBar goHome={goHome}/>
      <Router history={history}>
        <Routes>
          <Route 
            path="/" 
            location={location} 
            element={
              <FrontPage 
                handleOnClick={handleOnClick}
              />
              }
          />
          <Route 
            path="/ingredients" 
            location={location} 
            element={
              <Ingredients 
                handleKeyPress={handleKeyPress}
              />
            }
          /> 
          <Route 
            path="/results" 
            location={location} 
            element={<Results />}
          /> 
        </Routes>
      </Router>
      </React.StrictMode>
      {/* <h6 />  */}
      <Footer />
    </div>
  );
}
