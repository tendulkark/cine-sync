import React, { useEffect, useState } from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { useSelector } from "react-redux";
import Img from "../../../components/lazyLoadImg/Img";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";

const HeroBanner = () => {
  const { url } = useSelector((state) => state.home);
  const [backGround, setBackGround] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const { data, loading } = useFetch("/movie/upcoming");
  // console.log("url from hero banner", url.backdrop);

  useEffect(() => {
    const bg =
      url?.backdrop +
      data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackGround(bg);
  }, [data]);

  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };
  return (
    <>
      <div className="heroBanner">
        {!loading && (
          <div className="backdrop-img">
            <Img src={backGround} />
          </div>
        )}
        <div className="opacity-layer"></div>
        <ContentWrapper>
          <div className="wrapper">
            <div className="heroBannerContent">
              <span className="title">Welcome.</span>
              <span className="subTitle">
                Millions of movies, TV shows and people to dicover. Explore now.
              </span>
              <div className="searchInput">
                <input
                  type="text"
                  placeholder="Search for a movie or tv show"
                  onKeyUp={searchQueryHandler}
                  onChange={(e) => setQuery(e.target.value)}
                />

                <button>Search</button>
              </div>
            </div>
          </div>
        </ContentWrapper>
      </div>
    </>
  );
};

export default HeroBanner;
