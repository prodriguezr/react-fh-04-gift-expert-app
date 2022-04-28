import PropTypes from 'prop-types';

import { GifGridItem } from './GifGridItem';

import { useFetchGifs } from '../hooks';

export const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>

      {loading && <p className='animate__flash'>Loading...</p>}

      <div className='card-grid'>
        {images.map(({ id, title, url }) => (
          <GifGridItem key={id} title={title} url={url} />
        ))}
      </div>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};
