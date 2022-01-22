// import logo from './logo.svg';
import {Route, Routes } from "react-router-dom";
import { BrowserRouter as Router} from "react-router-dom";
import React, { useState, useEffect, Component} from "react";

import CssBaseline from "@material-ui/core/CssBaseline";

import history from "./history";

import TopBar from './Components/TopBar';
import Footer from './Components/Footer';
import FrontPage from './Pages/FrontPage';
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
    history.push("/recommendation");
	};

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
            path="recommendation" 
            location={location} 
            element={<Results/>}
          /> 
          <Route 
            path="/" 
            location={location} 
            element={
              <FrontPage 
                handleOnClick={handleOnClick}
              />
              }
          />
        </Routes>
      </Router>
      </React.StrictMode>
      {/* <h6 />  */}
      <Footer />
    </div>
  );
}
