export const getImgs = (deck, length) => {
  const endpoint = process.env.CARDS;
  
  return deck.slice(0, length).map(card => {
    return endpoint + card + ".png";
  });
}