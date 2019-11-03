import React from "react";
import { Header } from "./components/Header/Header.js";
import Timer from "./components/Timer/Timer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Home/Home";
import Events from "./Events/Events";
import About from "./About/About";
import Contact from "./components/Contact/Contact";
import { Projects } from "./Projects/Projects";
import NotFound from "./NotFound/NotFound";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        {/* <Timer /> */}
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} exact />
          <Route path="/events" component={Events} exact />
          <Route path="/projects" component={Projects} exact />
          <Route path="/projects/:id" component={Timer} exact />
          <Route path="/contact" component={Contact} exact />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
