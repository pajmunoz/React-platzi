import React from "react";
// import logo from './logo.svg';
// import './App.css';
import Badge from "./components/Badge";
import BadgeNew from "./pages/BadgeNew";
import Badges from "./pages/Badges";

function App() {
  return (
    <div className="App">
      {/* <Badge
        firstName="lilly"
        lastName="puchh"
        jobTitle="frontEnd"
        twitter="@dafftt"
      /> */}
      <Badges />
      {/* <BadgeNew /> */}
    </div>
  );
}

export default App;
