const ACTOR_PLACEHOLDER_PATH = "./assets/images/actor-placeholder.png";

export const getActorImg = (imgSrc) => {
  const avatar = imgSrc === "" ? ACTOR_PLACEHOLDER_PATH : imgSrc;
  return avatar;
};
