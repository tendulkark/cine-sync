import { useEffect } from "react";
import "./App.css";
import { fetchDataFromApi } from "./utils/api";
import { useState } from "react";

function App() {
  useEffect(() => {
    const apiTest = () => {
      fetchDataFromApi("/movie/popular").then((res) => {
        console.log(res);
      });
    };
    apiTest();
  }, []);

  return (
    <>
      <div className="App">App</div>
    </>
  );
}

export default App;
