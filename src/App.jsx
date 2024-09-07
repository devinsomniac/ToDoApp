import React from "react";
import NavBar from "./Components/NavBar";
import MainBody from "./Components/MainBody";

const App = () => {
  return (
    <>
      <div className="flex flex-col">
        <NavBar/>
        <MainBody/>
      </div>
    </>
  );
};

export default App;
