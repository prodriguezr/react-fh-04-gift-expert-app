import { useState } from 'react';
import { AddCategory, GiftGrid } from './components';
export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch']);

  return (
    <>
      <h2>GifExpert App</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {categories.map((category) => (
          <GiftGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};
