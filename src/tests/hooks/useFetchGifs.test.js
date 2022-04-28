import { renderHook } from '@testing-library/react-hooks';
import { useFetchGifs } from '../../hooks';

describe('Tests on hook useFetchGifs', () => {
  test('It should return initial state', async () => {
    const category = 'One Punch';

    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs(category)
    );
    const { data, loading } = result.current;

    await waitForNextUpdate();

    expect(data).toEqual([]);
    expect(loading).toBe(true);
  });

  test('It should return an array of images and the property loading with false value', async () => {
    const category = 'One Punch';

    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs(category)
    );

    await waitForNextUpdate();

    const { data, loading } = result.current;

    expect(data.length).toEqual(10);
    expect(loading).toBe(false);
  });
});
