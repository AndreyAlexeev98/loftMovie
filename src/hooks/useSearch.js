import { useState, useEffect } from "react";
import { getSearchResults } from "src/api/api";

export const useSearch = (searchText) => {
    const [actorsList, setActorsList] = useState([]);
    const [filmsList, setFilmList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState({});
  
    useEffect(() => {
      setIsLoading(true);
      setError({});
      getSearchResults(searchText)
        .then((res) => {
          setActorsList(res.filter((item) => item.type === "actor"));
          setFilmList(res.filter((item) => item.type === "movie"));
        })
        .catch((error) => {
            setError({message: error.message})
        })
        .finally(() => {
          setIsLoading(false);
        });
    }, [searchText]);

    return {
        isLoading,
        data: {
            actorsList,
            filmsList,
        },
        error,
        getSearchResults
    }
};
