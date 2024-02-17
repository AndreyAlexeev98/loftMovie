export const converterActorsId = (result) => {
  return Object.keys(result).map((actorKey) => {
    const actorData = result[actorKey];
    const id = actorData.name.id.replace("/name/", "").replace("/", ""); // Пример обработки id
    const imgSrc = actorData.name.image.url;
    const name = actorData.name.name;

    return {
      id: id,
      imgSrc: imgSrc,
      name: name,
    };
  });
};
