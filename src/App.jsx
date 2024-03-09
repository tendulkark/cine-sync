import { useEffect } from "react";
import "./App.css";
import { fetchDataFromApi } from "./utils/api";
import { useDispatch, useSelector } from "react-redux";
import { getApiConfiguration, selectAllHome } from "./store/homeSlice";

function App() {
  const dispatch = useDispatch();
  const { url } = useSelector(selectAllHome);
  console.log("posts", url);
  useEffect(() => {
    const apiTest = () => {
      fetchDataFromApi("/movie/popular").then((res) => {
        dispatch(getApiConfiguration(res));
        // console.log(res);
      });
    };
    apiTest();
  }, []);

  return (
    <>
      <div className="App">App {url?.total_pages}</div>
      <div>Hello</div>
    </>
  );
}

export default App;
