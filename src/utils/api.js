import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;

const headers = {
  Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers: headers, //api.js headers
      params: params, //params getting from other
    });
    // console.log("api js", data);
    return data;
  } catch (error) {
    console.log("API Error: ", error);
    return error;
  }
};
