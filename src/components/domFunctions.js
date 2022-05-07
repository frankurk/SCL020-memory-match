export const createCards = (image, id, cardBack) => {
  const card = document.createElement("div");
  const face = document.createElement("img");
  const back = document.createElement("div");
  card.classList.value = "card";
  face.classList.value = "face";
  back.classList.value = cardBack;

  face.src = image;
  card.setAttribute("id", id);

  card.appendChild(face);
  card.appendChild(back);

  return card;
};
