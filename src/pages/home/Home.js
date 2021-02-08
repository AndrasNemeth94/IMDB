import React, { useState, useEffect } from "react";
import "./Home.css";
import Movie from "../../components/Movie/Movie";
//for Spring backend
/* import axios from "axios";
import Api from "../../api/Api"; */
import Searchbar from "../../components/Navbar/Searchbar/Searchbar";
import translate from "../../i18n/messages/translate";
import moviesData from '../../dummyData/movies.json';
import seriesData from '../../dummyData/series.json';


const Home = () => {
  const imgRoute = '../../dummyData/images/';
  let searchedSeries;
  let searchedMovies;
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const setSearchState = (input) => {
    setSearchValue(input);
  };
  const regularHomeView = () => {
    return (
      <div>
        <h1 className="h1-mov">{translate("movies")}</h1>
        <hr className="separator" />
        {movies.map((el) => {
          return (
            <Movie
              key={el.id}
              id={el.id}
              img={el.img}
              title={el.title}
              release={el.release}
              description={el.description}
              rating={el.rating}
            />
          );
        })}
        <h1>{translate("series")}</h1>
        <hr className="separator" />
        {series.map((el) => {
          return (
            <Movie
              key={el.id}
              id={el.id}
             img={el.img}
              title={el.title}
              release={el.release}
              description={el.description}
              rating={el.rating}
            />
          );
        })}
      </div>
    );
  };
  const findSearchedItem = () => {
    let foundItem;
    searchedSeries = series.find(
      (el) => el.title.toLowerCase() === searchValue.toLowerCase()
    );
    searchedMovies = movies.find(
      (el) => el.title.toLowerCase() === searchValue.toLowerCase()
    );
    if (!searchedSeries && searchedMovies) {
      foundItem = (
        <div>
          <Movie
            key={searchedMovies.id}
            id={searchedMovies.id}
            img={searchedMovies.img}
            title={searchedMovies.title}
            release={searchedMovies.release}
            description={searchedMovies.description}
            rating={searchedMovies.rating}
          />
        </div>
      );
    } else if (!searchedMovies && searchedSeries) {
      foundItem = (
        <div>
          <Movie
            key={searchedSeries.id}
            id={searchedSeries.id}
            img={searchedMovies.img}
            title={searchedSeries.title}
            release={searchedSeries.release}
            description={searchedSeries.description}
            rating={searchedSeries.rating}
          />
        </div>
      );
    } else {
      foundItem = <h1>NINCS IYLEN ELEM!</h1>;
    }
    return foundItem;
  };

  useEffect(() => {
    setMovies(moviesData);
    setSeries(seriesData);

  //if Spring backend
  /*   axios
      .get(`${Api.url}/api/movies/`)
      .then((res) => {
        const getMovies = res.data;
        setMovies(getMovies);
      })
      .catch((err) => console.log("hiba: " + err));

    axios.get(`${Api.url}/api/tvseries/`).then((res) => {
      const getSeries = res.data;
      setSeries(getSeries);
    }); */
  }, []);

  return (
    <div className="home-container ">
      <Searchbar getInputSetter={setSearchState} />
      {searchValue ? findSearchedItem() : regularHomeView()}

      <div></div>
    </div>
  );
};
export default Home;
