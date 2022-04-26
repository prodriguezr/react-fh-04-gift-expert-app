import { GiftGridItem } from './GiftGridItem';

import { useFetchGifts } from '../hooks';

export const GiftGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifts(category);

  return (
    <>
      <h3>{category}</h3>

      {loading && <p className='animate__flash'>Loading...</p>}

      <div className='card-grid'>
        {images.map(({ id, title, url }) => (
          <GiftGridItem key={id} title={title} url={url} />
        ))}
      </div>
    </>
  );
};
