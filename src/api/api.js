import { convertSearchResults } from "./converters/convertSearchResult";
import { searchResultsMock } from "./dummy-data/search-results-mock";
import { stall } from "../utils/stall";
import { filmData } from "./dummy-data/filmData";
import { actorsData } from "./dummy-data/actorsData";
import { convertFilm } from "src/api/converters/convertFilm";
import { converterActorsId } from "src/api/converters/converterActorsId";

const isMockData = true;

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "d43adb5050msh9420aa2b9cd9270p1fd797jsn6771f50c86aa",
    "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
  },
};

// для страницы вывода результатов поиска
export const getSearchResults = async (params) => {
  if (isMockData) {
    await stall();
    return convertSearchResults(searchResultsMock);
  }

  const url = `https://online-movie-database.p.rapidapi.com/auto-complete?q=${encodeURI(
    params
  )}`;

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    return convertSearchResults(result);
  } catch (error) {
    console.error(error);
  }
};

const getfilmInfo = async (filmId) => {
  let result = {};
  const url = `https://online-movie-database.p.rapidapi.com/title/find?q=${filmId}`;

  try {
    if (!isMockData) {
      const response = await fetch(url, options);
      result = await response.json();
      return convertFilm(result);
    }
  } catch (error) {
    console.error(error);
  }
  return convertFilm(filmData);
};

const getActorsByIds = async (filmId, idList) => {
  let result = {};
  const url = `https://online-movie-database.p.rapidapi.com/title/get-charname-list?tconst=${filmId}&id=${idList}`;

  try {
    if (!isMockData) {
      const response = await fetch(url, options);
      result = await response.json();
      return converterActorsId(result);
    }
  } catch (error) {
    console.error(error);
  }
  return converterActorsId(actorsData);
};

// для страницы фильмов
export const getMovie = async (fimlId) => {
  const filmData = await getfilmInfo(fimlId);
  const actorsData = await getActorsByIds(fimlId, filmData.idActors);
  return {
    filmData,
    actorsData,
  };
};
