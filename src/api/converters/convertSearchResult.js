// [{id, imgSrc, name}, {link, posterSrc, duration, year, name, id}]

function convertMovieResult(apiResult) {
  return {
    type: "movie",
    link: apiResult?.i?.imageUrl ?? "",
    posterSrc: apiResult?.i?.imageUrl ?? "",
    duration: apiResult.rank,
    year: apiResult.y,
    name: apiResult.s,
    id: apiResult.id,
  };
}

function convertActorResult(apiResult) {
  return {
    type: "actor",
    id: apiResult.id,
    imgSrc: apiResult?.i?.imageUrl ?? "",
    name: apiResult.l,
  };
}

function isMovie(apiResult) {
  if ("y" in apiResult) {
    return true;
  }
  return false;
}

function convertSearchResult(apiResult) {
  if (isMovie(apiResult)) {
    return convertMovieResult(apiResult);
  }
  return convertActorResult(apiResult);
}

export const convertSearchResults = (apiResults) => {
  return apiResults.d.map(convertSearchResult);
};
