import { getActorImg } from "src/utils/getActorImg";

export const HeroActor = ({ avatar, name, description }) => {
  const avatarSrc = getActorImg(avatar);
  return (
    <section className="actor-hero">
      <img src={avatarSrc} className="actor-hero__img" loading="lazy" />
      <div className="actor-info">
        <div className="actor-info__name">
          <h1 className="h1-text text-nowrap">{name}</h1>
          <button>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.9857 24C20.337 24 19.6248 23.8326 18.938 23.4865L12.7313 20.4614C12.3625 20.2828 11.6375 20.2828 11.2687 20.4614L5.062 23.4865C3.80286 24.1005 2.51828 24.1674 1.53895 23.654C0.559618 23.1516 0 22.1358 0 20.8744V5.14605C0 2.3107 2.63275 0 5.86327 0H18.1367C21.3672 0 24 2.3107 24 5.14605V20.8744C24 22.1358 23.4404 23.1516 22.461 23.654C22.0159 23.8884 21.5072 24 20.9857 24ZM11.9936 18.653C12.5914 18.653 13.1765 18.7647 13.6471 18.9991L19.8537 22.0242C20.5024 22.3479 21.1002 22.4149 21.4817 22.214C21.8633 22.013 22.0795 21.533 22.0795 20.8744V5.14605C22.0795 3.23721 20.2989 1.67442 18.124 1.67442H5.86327C3.68839 1.67442 1.90779 3.23721 1.90779 5.14605V20.8744C1.90779 21.533 2.12401 22.0242 2.50556 22.214C2.88712 22.4037 3.47218 22.3479 4.13355 22.0242L10.3402 18.9991C10.8108 18.7647 11.3959 18.653 11.9936 18.653Z"
                fill="#39B4F7"
              />
            </svg>
          </button>
        </div>
        <div className="actor-info__description">
          <p className="body-text">{description}</p>
          <button className="tag-text">Подробнее</button>
        </div>
      </div>
    </section>
  );
};
