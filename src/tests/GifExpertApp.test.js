import { shallow } from 'enzyme';

import { GifExpertApp } from '../GifExpertApp';

describe('Tests on <GifExpertApp />', () => {
  test('It should display correctly', () => {
    const categories = ['One Punch', 'Dragon Ball Z'];

    const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('GifGrid').length).toBe(categories.length);
  });
});
