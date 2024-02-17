const FILM_PLACEHOLDER_PATH = "./assets/images/movie-placeholder.jpg";

export const getFilmImg = (imgSrc) => {
  const avatar = imgSrc === "" ? FILM_PLACEHOLDER_PATH : imgSrc;
  return avatar;
};
