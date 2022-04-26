import { useState, useEffect } from 'react';
import { getGifts } from '../helpers';

export const useFetchGifts = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getGifts(category).then((data) => {
      setState({
        data,
        loading: false,
      });
    });
  }, [category]);

  return state;
};
