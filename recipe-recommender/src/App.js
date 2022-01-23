// import logo from './logo.svg';
import { Route, Routes, useNavigate } from "react-router-dom";
// import {Router} from "react-router-dom";
// import {Navigate} from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import React, { useState, useEffect, Component } from "react";

import CssBaseline from "@material-ui/core/CssBaseline";

// import { createBrowserHistory } from 'history';
import history from "./history";

import TopBar from "./Components/TopBar";
import Footer from "./Components/Footer";
import FrontPage from "./Pages/FrontPage";
import Ingredients from "./Pages/Ingredients";
import Results from "./Pages/Results";

export default function App({ location }) {
  // const history = createBrowserHistory();
  // const [selected, setSelected] = useState("");
  // const [displayError, setDisplayError] = useState(false);

  // let navigate = useNavigate();

  // const handleOnClick = () => {
  // 	// if (selected === "") {
  // 	// 	setDisplayError(true);
  // 	// } else {
  // 	// 	setDisplayError(false);
  // 	// 	console.log("router display results " + selected);
  // 	// 	history.push("/recommendation");
  // 	// }
  //   // history.push("/ingredients");
  //   navigate("/recommendation");
  // }

  // const handleKeyPress = (e) => {
  //   console.log(e.key);
  //   if (e.key === 'Enter') {
  //     // history.push("/results");
  //     navigate("/results");
  //   }
  // }

  // const updateSelected = (title) => {
  // 	setSelected(title);
  // };

  const goHome = () => {
    // setSelected("");
    history.push("/");
    // navigate("/");
  };

  return (
    <div>
      <React.StrictMode>
        <CssBaseline />
        <TopBar goHome={goHome} />
        <Router history={history} forceRefresh={true} location={location}>
          <Routes>
            <Route
              path="/"
              location={history.location.pathname}
              element={
                <FrontPage
                // handleOnClick={handleOnClick}
                />
              }
            />
            <Route
              path="/ingredients"
              location={location}
              element={
                <Ingredients
                // navigate={navigate}
                // handleKeyPress={handleKeyPress}
                />
              }
            />
            <Route path="/results" location={location} element={<Results />} />
          </Routes>
        </Router>
      </React.StrictMode>
      {/* <h6 />  */}
      <Footer />
    </div>
  );
}
