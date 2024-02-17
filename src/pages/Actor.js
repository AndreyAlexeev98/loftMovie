import { Layout } from "src/pages/Layout";
import { HeroActor } from "src/components/HeroActor";
import { useState, useEffect } from "react";
import { getUrlParam } from "src/Router.js";
import { SectionList } from "src/components/SectionList";
import { FilmCard } from "src/components/FilmCard";

const isMock = true;

export const Actor = () => {
  const actorId = getUrlParam("actorId");
  const [data, setData] = useState(null);
  const [filmList, setFilmList] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      let result = {};
      const url = `https://online-movie-database.p.rapidapi.com/actors/get-bio?nconst=${actorId}`;
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "d43adb5050msh9420aa2b9cd9270p1fd797jsn6771f50c86aa",
          "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
        },
      };

      try {
        if (!isMock) {
          const response = await fetch(url, options);
          result = await response.json();
        } else {
          result = {
            "@type": "imdb.api.name.bio",
            akas: ["Tom H.", "Tomu Hankusu"],
            id: "/name/nm0000158/",
            image: {
              height: 2048,
              id: "/name/nm0000158/images/rm3040001536",
              url: "https://m.media-amazon.com/images/M/MV5BMTQ2MjMwNDA3Nl5BMl5BanBnXkFtZTcwMTA2NDY3NQ@@._V1_.jpg",
              width: 1417,
            },
            legacyNameText: "Hanks, Tom",
            name: "Tom Hanks",
            birthDate: "1956-07-09",
            birthPlace: "Concord, California, USA",
            gender: "male",
            heightCentimeters: 182.88,
            realName: "Thomas Jeffrey Hanks",
            spouses: [
              {
                attributes: "(2 children)",
                current: true,
                fromDate: "1988-04-30",
                id: "/name/nm0001854/",
                name: "Rita Wilson",
              },
              {
                attributes: "(divorced) (2 children)",
                fromDate: "1978-01-24",
                id: "/name/nm2225002/",
                name: "Samantha Lewes",
                toDate: "1987-03-19",
              },
            ],
            trademarks: [
              "Frequently plays ordinary characters in extraordinary situations",
              "Likable, mild-mannered and good-natured personality",
              "Frequently works with Robert Zemeckis, Steven Spielberg, and Ron Howard",
            ],
            miniBios: [
              {
                author: "Pedro Borges",
                id: "/name/nm0000158/bio/mb0366835",
                language: "en",
                text: "mock description Tom Hanks....",
              },
            ],
          };
        }
        setData({
          avatar: result.image?.url || null,
          name: result?.name || null,
          description: result?.miniBios[0]?.text || null,
        });
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [actorId]);

  useEffect(() => {
    const fetchData = async () => {
      let result = {};
      const url = `https://online-movie-database.p.rapidapi.com/actors/get-all-filmography?nconst=${actorId}`;
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "d43adb5050msh9420aa2b9cd9270p1fd797jsn6771f50c86aa",
          "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
        },
      };

      try {
        if (!isMock) {
          const response = await fetch(url, options);
          result = await response.json();
        } else {
          result = {
            id: "/name/nm0451148",
            base: {
              "@type": "imdb.api.name.base",
              akas: ["Master Aamir", "Aamir Hussain", "Khan"],
              disambiguation: "I",
              id: "/name/nm0451148/",
              image: {
                height: 2048,
                id: "/name/nm0451148/images/rm3417356800",
                url: "https://m.media-amazon.com/images/M/MV5BMjAwMjk3NDUzN15BMl5BanBnXkFtZTcwNjI4MTY0NA@@._V1_.jpg",
                width: 1365,
              },
              legacyNameText: "Khan, Aamir (I)",
              name: "Aamir Khan",
            },
            filmography: [
              {
                episodeAppearances: "/name/nm0451148/filmography/tt30954692",
                category: "self",
                characters: ["Self"],
                endYear: 2024,
                episodeCount: 1,
                roles: [
                  {
                    character: "Self",
                    episodeCount: 1,
                  },
                ],
                startYear: 2024,
                id: "/title/tt30954692/",
                image: {
                  height: 750,
                  id: "/title/tt30954692/images/rm4186721537",
                  url: "https://m.media-amazon.com/images/M/MV5BMzE2MzQ4NzUtNzcyNC00ZmE1LTkwYmItOWFkNWE5ZDZkMTI0XkEyXkFqcGdeQXVyMzg2MjQ2Mg@@._V1_.jpg",
                  width: 500,
                },
                status: "released",
                title: "Streets of Gold: Mumbai",
                titleType: "tvSeries",
                year: 2024,
                episodes: [
                  {
                    category: "self",
                    characters: ["Self"],
                    roles: [
                      {
                        character: "Self",
                      },
                    ],
                    id: "/title/tt30954914/",
                    status: "released",
                    title: "Episode #1.1",
                    titleType: "tvEpisode",
                    year: 2024,
                    episodeNumber: 1,
                    releaseDate: "2024-01-08",
                    seasonNumber: 1,
                  },
                ],
                seriesEndYear: 2024,
                seriesStartYear: 2024,
              },
              {
                episodeAppearances: "/name/nm0451148/filmography/tt26542635",
                category: "self",
                characters: ["Self"],
                endYear: 2023,
                episodeCount: 1,
                roles: [
                  {
                    character: "Self",
                    episodeCount: 1,
                  },
                ],
                startYear: 2023,
                id: "/title/tt26542635/",
                image: {
                  height: 1200,
                  id: "/title/tt26542635/images/rm3675861761",
                  url: "https://m.media-amazon.com/images/M/MV5BNDczYTI3NzktZGE5Ni00YzdiLWE1OTUtMjMyNGQ5ZWJjYWE3XkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_.jpg",
                  width: 960,
                },
                status: "released",
                title: "The Romantics",
                titleType: "tvSeries",
                year: 2023,
                episodes: [
                  {
                    category: "self",
                    characters: ["Self"],
                    roles: [
                      {
                        character: "Self",
                      },
                    ],
                    id: "/title/tt26547415/",
                    image: {
                      height: 1080,
                      id: "/title/tt26547415/images/rm2708027137",
                      url: "https://m.media-amazon.com/images/M/MV5BOWUyM2ZhNGUtZGRhNy00MTI0LWI2MmItOTEzYzRjNTgwNjM0XkEyXkFqcGdeQXVyMTYyMTU4NDgz._V1_.jpg",
                      width: 1920,
                    },
                    status: "released",
                    title: "The Boy from Jalandhar",
                    titleType: "tvEpisode",
                    year: 2023,
                    episodeNumber: 1,
                    releaseDate: "2023-02-14",
                    seasonNumber: 1,
                  },
                ],
                seriesStartYear: 2023,
              },
            ],
          };
        }
        setFilmList(result.filmography.map((item) => item));
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <Layout>
      {data ? (
        <HeroActor
          avatar={data.avatar}
          name={data.name}
          description={data.description}
        />
      ) : (
        <div className={"h1-text"}>loading actor info...</div>
      )}
      {filmList ? (
        <SectionList title="Фильмы и сериалы" type="grid">
          {filmList?.map((film, i) => {
            return (
              <FilmCard
                key={film?.title + i}
                id={film?.id}
                posterSrc={film?.image?.url}
                duration={"- "} // TODO найти время продолжительности фильма в api
                year={film?.year}
                name={film?.title}
              />
            );
          })}
        </SectionList>
      ) : (
        <div className={"h1-text"}>loading film list...</div>
      )}
    </Layout>
  );
};
