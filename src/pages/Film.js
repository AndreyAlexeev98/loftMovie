import React, { Component } from "react";
import { Layout } from "src/pages/Layout";
import { getUrlParam } from "src/Router.js";
import { SectionList } from "src/components/SectionList";
import HeroFilm from "src/components/HeroFIlm.js";
import { ActorCard } from "src/components/ActorCard";
import { getMovie } from "src/api/api";

class Film extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filmInfo: null,
      actors: null,
    };
  }

  componentDidMount() {
    const filmId = getUrlParam("filmId");
    getMovie(filmId).then(({ filmData, actorsData }) => {
      this.setState({
        filmInfo: filmData,
        actors: actorsData,
      });
    });
  }

  render() {
    const { filmInfo, actors } = this.state;
    return (
      <Layout>
        {filmInfo ? (
          <HeroFilm
            imageUrl={filmInfo.imageUrl}
            title={filmInfo.title}
            year={filmInfo.year}
            janre={filmInfo.janre}
            time={filmInfo.time}
          />
        ) : (
          <div className={"h1-text"}>loading film info...</div>
        )}
        {actors ? (
          <SectionList title="Актеры" type="column">
            {actors?.map((actor, index) => {
              return (
                <ActorCard
                  key={actor.id}
                  id={actor.id}
                  imgSrc={actor.imgSrc}
                  name={actor.name}
                />
              );
            })}
          </SectionList>
        ) : (
          <div className={"h1-text"}>loading actors list...</div>
        )}
      </Layout>
    );
  }
}

export default Film;
