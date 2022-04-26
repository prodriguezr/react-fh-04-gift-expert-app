export const getGifts = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=10&api_key=88k2WkSnyrXicsjWqlxlgf4NpSFvGZqV`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifts = data.map(({ id, title, images }) => {
    return {
      id,
      title,
      url: images?.downsized_medium.url,
    };
  });

  return gifts;
};
