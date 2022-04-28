import { shallow } from 'enzyme';

import { AddCategory } from '../../components';

describe('Tests on AddCategory component', () => {
  const setCategories = jest.fn();

  let wrapper;

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

  test('It should display correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Must change the text box', () => {
    const input = wrapper.find('input');
    const value = 'Hello, World!';
    input.simulate('change', { target: { value } });
  });

  test('You should not post the information with submit', () => {
    wrapper.find('form').simulate('submit', { preventDefault() {} });

    expect(setCategories).not.toHaveBeenCalled();
  });

  test('You must call setCategories and clear the text box', () => {
    const input = wrapper.find('input');

    const value = 'Hello, World!';
    input.simulate('change', { target: { value } });

    wrapper.find('form').simulate('submit', { preventDefault() {} });

    expect(setCategories).toHaveBeenCalled();
    expect(input.prop('value')).toBe('');
  });
});
