import "./App.css";

import React, { useState } from "react";
import NavBar from "./Component/NavBar";
import News from "./Component/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const pageSize = 5;
  const apiKey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0);

  return (
    <div>
      <BrowserRouter>
        <LoadingBar color="#f11946" progress={progress} />
        <NavBar />
        <Routes>
          <Route
            Exact
            path="/"
            element={
              <News
                setProgress={ setProgress}
                key="general"
                pageSize={ pageSize}
                apiKey={ apiKey}
                country="us"
                category="general"
              />
            }
          ></Route>
          <Route
            Exact
            path="/business"
            element={
              <News
                setProgress={ setProgress}
                key="business"
                pageSize={ pageSize}
                apiKey={ apiKey}
                country="us"
                category="business"
              />
            }
          ></Route>
          <Route
            Exact
            path="/Entertainment"
            element={
              <News
                setProgress={ setProgress}
                key="entertainment"
                pageSize={ pageSize}
                apiKey={ apiKey}
                country="us"
                category="entertainment"
              />
            }
          ></Route>
          <Route
            Exact
            path="/Health"
            element={
              <News
                setProgress={ setProgress}
                key="health"
                pageSize={ pageSize}
                apiKey={ apiKey}
                country="us"
                category="health"
              />
            }
          ></Route>
          <Route
            Exact
            path="/Science"
            element={
              <News
                setProgress={ setProgress}
                key="science"
                pageSize={ pageSize}
                apiKey={ apiKey}
                country="us"
                category="science"
              />
            }
          ></Route>
          <Route
            Exact
            path="/Sports"
            element={
              <News
                setProgress={ setProgress}
                key="sports"
                pageSize={ pageSize}
                apiKey={ apiKey}
                country="us"
                category="sports"
              />
            }
          ></Route>
          <Route
            Exact
            path="/Technology"
            element={
              <News
                setProgress={ setProgress}
                key="technology"
                pageSize={30}
                apiKey={ apiKey}
                country="us"
                category="technology"
              />
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;