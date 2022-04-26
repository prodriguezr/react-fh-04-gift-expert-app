import { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState('');

  const handlerOnChange = ({ target }) => {
    setInputValue(target.value);
  };

  const handlerOnSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length === 0) return;

    setCategories((oldCategories) => [inputValue, ...oldCategories]);

    setInputValue('');
  };

  return (
    <form onSubmit={handlerOnSubmit}>
      <input type='text' value={inputValue} onChange={handlerOnChange} />
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
