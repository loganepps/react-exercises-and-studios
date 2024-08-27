import "./App.css";

import BoardAssignment from "./components/BoardAssignment";
import RecipeDisplay from "./components/Recipe";
import StatusChange from "./components/StatusChange";
import { useState } from "react";

function App() {
  return (
    <>
      <div className="App">
        <RecipeDisplay />
        <div className="recipePhotoBlock">
          <BoardAssignment />
          <StatusChange />
        </div>
      </div>
    </>
  );
}

export default App;
