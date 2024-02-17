import { getFilmImg } from "src/utils/getFilmImg";

export const FilmCard = ({ posterSrc, duration, year, name, id }) => {
  const movieSrc = getFilmImg(posterSrc);
  return (
    <a href={`/film?filmId=${id}`} className="movie-card">
      <div className="movie-card-cover">
        <img src={movieSrc} className="movie-card-cover__img" loading="lazy" />
        <div className="movie-card-cover__tags">
          <div className="tag tag-text">{duration} мин.</div>
          <div className="tag tag-text">{year}</div>
        </div>
      </div>
      <div className="body-3-text text-nowrap">{name}</div>
    </a>
  );
};
