import { useState } from 'react';

import { AddCategory, GifGrid } from './components';

export const GifExpertApp = (defaultCategories = []) => {
  console.log(`${JSON.stringify(defaultCategories)}`);
  const [categories, setCategories] = useState(defaultCategories);

  return (
    <>
      <h2>GifExpert App</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};
