// import logo from './logo.svg';
import { Router, Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from "react";

import CssBaseline from "@material-ui/core/CssBaseline";

import history from "./history";

import TopBar from './Components/TopBar';
import Footer from './Components/Footer';
import FrontPage from './Pages/FrontPage';
import Results from './Pages/Results';

import './App.css';

export default function App() {
  const [selected, setSelected] = useState("");
	const [displayError, setDisplayError] = useState(false);

	const handleOnClick = () => {
		if (selected === "") {
			setDisplayError(true);
		} else {
			setDisplayError(false);
			console.log("router display results " + selected);
			history.push("/recommendation");
		}
	};

  const updateSelected = (title) => {
		setSelected(title);
	};

	const goHome = () => {
		setSelected("");
		history.push("/");
	};

  return (
    <div> 
      <CssBaseline />
      <TopBar goHome={goHome}/>
      <Router history={history}>
        <Routes>
          <Route path="recommendation">
            <Results recipe={selected} />
          </Route>
          <Route path="/">
            <FrontPage
              handleOnClick={handleOnClick}
              // displayError={displayError}
              // updateSelected={updateSelected}
            />
          </Route>
        </Routes>

      </Router>
      <FrontPage />
      <h6 /> 
      <Footer />
    </div>
  );
}
