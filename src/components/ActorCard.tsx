import { getActorImg } from "src/utils/getActorImg";

interface ActorCardProps {
  id: number;
  imgSrc: string;
  name: string;
}

export const ActorCard: React.FC<ActorCardProps> = ({ id, imgSrc, name }) => {
  const src = getActorImg(imgSrc);
  return (
    <a href={`/actor?actorId=${id}`} className="actor-card">
      <img src={src} alt={name} className="actor-card__cover" loading="lazy" />
      <p className="body-2-text text-nowrap">{name}</p>
    </a>
  );
};
