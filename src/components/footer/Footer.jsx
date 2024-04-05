import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem">Terms Of Use</li>
          <li className="menuItem">Privacy-Policy</li>
          <li className="menuItem">About</li>
          <li className="menuItem">Blog</li>
          <li className="menuItem">FAQ</li>
        </ul>
        <div className="infoText">
          At CineSync, we're passionate about bringing you the latest updates,
          trailers, reviews, and insights from the world of cinema and
          television. Whether you're a movie buff, a TV series enthusiast, or
          simply looking for your next binge-worthy watch, we've got you
          covered. Explore our extensive database of movies and TV shows,
          spanning various genres, eras, and languages. From classic films to
          the latest blockbusters, from beloved TV series to exciting new
          releases, CineSync is your go-to source for discovering, exploring,
          and enjoying the best of entertainment.
        </div>
        <div className="infoText">🎥 Lights, camera, action! 🍿</div>
        <div className="socialIcons">
          <span className="icon">
            <FaFacebookF />
          </span>
          <span className="icon">
            <FaInstagram />
          </span>
          <span className="icon">
            <FaTwitter />
          </span>
          <span className="icon">
            <FaLinkedin />
          </span>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
