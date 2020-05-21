import React from "react";
import "./App.css";
import MainPageContainer from "./MainPageContainer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  document.title = "The API Awakens";

  return (
    <div className="App">
      <MainPageContainer />
    </div>
  );
}

export default App;
