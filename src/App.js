import "./App.css";

import React, { Component } from "react";
import NavBar from "./Component/NavBar";
import News from "./Component/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default class App extends Component {
  pageSize = 5;
  render() {
    return (
      <div>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route Exact
              path="/"
              element={<News key= "general" pageSize={this.pageSize} country="us" category="general" />}
            ></Route>
            <Route Exact
              path="/business"
              element={<News key= "business" pageSize={this.pageSize} country="us" category="business" />}
            ></Route>
            <Route Exact
              path="/Entertainment"
              element={
                <News key="entertainment" pageSize={this.pageSize} country="us" category="entertainment" />
              }
            ></Route>
            <Route Exact
              path="/Health"
              element={<News key="health" pageSize={this.pageSize} country="us" category="health" />}
            ></Route>
            <Route Exact
              path="/Science"
              element={<News key="science" pageSize={this.pageSize} country="us" category="science" />}
            ></Route>
            <Route Exact
              path="/Sports"
              element={<News key="sports" pageSize={this.pageSize} country="us" category="sports" />}
            ></Route>
            <Route Exact
              path="/Technology"
              element={
                <News key="technology" pageSize={30} country="us" category="technology" />
              }
            ></Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
