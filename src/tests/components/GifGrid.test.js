import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks';

jest.mock('../../hooks/useFetchGifs');

describe('Tests on <GifGrid/>', () => {
  const category = 'One Punch';

  //   test('The category must be displayed within the h3 tag', () => {
  //     const wrapper = shallow(<GifGrid category={category} />);
  //     const h3 = wrapper.find('h3').text().trim();

  //     expect(h3).toBe(category);
  //   });

  //   test('It should display correctly', () => {
  //     const wrapper = shallow(<GifGrid category={category} />);

  //     expect(wrapper).toMatchSnapshot();
  //   });

  test('It should show items when images are loaded', () => {
    const data = [
      {
        id: 'dggg54Jh',
        url: 'https://localhost/images/87.png',
        title: 'Anything',
      },
    ];

    useFetchGifs.mockReturnValue({
      data,
      loading: false,
    });

    const wrapper = shallow(<GifGrid category={category} />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('p').exists()).toBe(false);
    expect(wrapper.find('GifGridItem').length).toBe(data.length);
  });
});
