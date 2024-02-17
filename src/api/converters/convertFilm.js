export const convertFilm = (result) => {
  return {
    imageUrl: result?.results[0]?.image?.url,
    title: result?.results[0]?.title,
    year: result?.results[0]?.year,
    janre: result?.results[0]?.titleType,
    time: "- ", // TODO найти время продолжительности фильма в api
    idActors: result?.results[0]?.principals
      .map((item) => item.id.split("/").pop())
      .join("&id="),
  };
};
