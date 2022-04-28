import { getGifs } from '../../helpers';

describe('Test on getGifs helper', () => {
  test('Must bring 10 items', async () => {
    const gifs = await getGifs('Ironman');

    expect(gifs.length).toBe(10);
  });
});
