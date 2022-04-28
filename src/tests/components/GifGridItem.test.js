import { shallow } from 'enzyme';
import { GifGridItem } from '../../components';

describe('Tests on GifGridItem', () => {
  const title = 'Test Title';
  const url = 'http://test.cl/img.png';
  const wrapper = shallow(<GifGridItem title={title} url={url} />);

  test('It should display the component correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('It must have a paragraph with the title', () => {
    expect(wrapper.find('p').text().trim()).toBe(title);
  });

  test('The src property of the image must be equal to the url property', () => {
    expect(wrapper.find('img').prop('src')).toBe(url);
  });

  test('The alt property of the image must be equal to the title property', () => {
    expect(wrapper.find('img').prop('alt')).toBe(title);
  });

  test('Must contain animate__fadeIn css class', () => {
    const css = 'animate__fadeIn';
    const div = wrapper.find('div');

    expect(div.prop('className').includes(css)).toBe(true);
  });
});
