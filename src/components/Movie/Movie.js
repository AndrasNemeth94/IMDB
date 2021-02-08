import React from "react";
import "./Movie.css";
import translate from "../../i18n/messages/translate";

const Movie = ({ img,alt, title, release, rating }) => {

  return (
    <div className="movie-container">
      <div className="movie-img-container">
        <img
          className="movie-img "
          src={require('../../dummyData/images/'+img)}
          alt={alt}
        ></img>
      </div>
      <div className="movie-infobox">
        <h1>{title}</h1>
        <p className="movie-mobile-none">
          {translate("date")}: {release}
        </p>
        <p className="movie-mobile-visible">
          {translate("rate")}: {rating}
        </p>
        <img
          className="movie-rating-img"
          src={require("../../assets/img/star.png")}
          alt="star"
        ></img>
      </div>
    </div>
  );
};
export default Movie;
