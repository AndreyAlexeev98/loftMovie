import { Layout } from "src/pages/Layout";
import { SectionList } from "src/components/SectionList";
import { ActorCard } from "src/components/ActorCard";
import { FilmCard } from "src/components/FilmCard";
import { getUrlParam } from "src/Router.js";
import { useSearch } from "src/hooks/useSearch";
import { navigate } from "src/Router.js";

export const SearchResult = () => {
  const searchText = getUrlParam("searchText");
  const { isLoading, data, error } = useSearch(searchText);

  // Start ui-logic layer
  const isActorList = data.actorsList.length;
  const isFilmList = data.filmsList.length;

  const title =
    isFilmList || isActorList
      ? "Вы искали, а мы нашли:"
      : "Вы искали, а мы ничего не нашли – попробуйте снова.";

  let actorList = null;
  let filmList = null;

  if (isActorList) {
    actorList = data.actorsList.map((actor, index) => (
      <ActorCard
        key={`${actor.name} ${index}`}
        id={actor.id}
        imgSrc={actor.imgSrc}
        name={actor.name}
      />
    ));
  }

  if (isFilmList) {
    filmList = data.filmsList.map((film, i) => (
      <FilmCard
        key={film.name + i}
        id={film.id}
        posterSrc={film.posterSrc}
        duration={film.duration}
        year={film.year}
        name={film.name}
      />
    ));
  }
  // End ui-logic layers

  if (error.message) {
    return (
      <Layout>
        Ошибка поиска, попробуйте перезагрузить страницу или попробуйте позже
      </Layout>
    );
  }

  return (
    <Layout>
      {isLoading ? (
        <div>loading...</div>
      ) : (
        <>
          <h2 className="h2-text search-results__title">{title}</h2>
          {actorList && (
            <SectionList title="Актеры" type="column">
              {actorList}
            </SectionList>
          )}

          {filmList && (
            <SectionList title="Фильмы и сериалы" type="grid">
              {filmList}
            </SectionList>
          )}
        </>
      )}
    </Layout>
  );
};
