import PropTypes from 'prop-types';

export const getGifs = async (category, limit = 10) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=${limit}&api_key=88k2WkSnyrXicsjWqlxlgf4NpSFvGZqV`;
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

getGifs.propTypes = {
  category: PropTypes.string,
  limit: PropTypes.number,
};
