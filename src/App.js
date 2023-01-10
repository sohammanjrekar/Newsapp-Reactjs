import "./App.css";
import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import News from "./Components/News";
import About from "./Components/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  key="general"
                  pageSize={9}
                  category="general"
                  country="in"
                />
              }
            />{" "}
            <Route exact path="/about" element={<About />} />{" "}
            <Route
              exact
              path="/business"
              element={
                <News
                  key="business"
                  pageSize={9}
                  category="business"
                  country="in"
                />
              }
            />{" "}
            <Route
              exact
              path="/technology"
              element={
                <News
                  key="technology"
                  pageSize={9}
                  category="technology"
                  country="in"
                />
              }
            />{" "}
            <Route
              exact
              path="/sports"
              element={
                <News
                  key="sports"
                  pageSize={9}
                  category="sports"
                  country="in"
                />
              }
            />{" "}
            <Route
              exact
              path="/science"
              element={
                <News
                  key="science"
                  pageSize={9}
                  category="science"
                  country="in"
                />
              }
            />{" "}
            <Route
              exact
              path="/health"
              element={
                <News
                  key="health"
                  pageSize={9}
                  category="health"
                  country="in"
                />
              }
            />{" "}
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  key="entertainment"
                  pageSize={9}
                  category="entertainment"
                  country="in"
                />
              }
            />{" "}
          </Routes>

          <Footer />
        </Router>{" "}
      </>
    );
  }
}
