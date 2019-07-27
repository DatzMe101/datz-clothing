import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import "./App.css";

const HatsPage = () => {
  return <h1>Hats Page</h1>;
};

function App() {
  return (
    <div>
      <Switch>
        <Route path="/shop/hats" component={HatsPage} />
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
