import { selector, useRecoilValue } from 'recoil';
import { clickState } from './atoms';

const clickStateSelector = selector({
  key: 'clickedCount', // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const clicks = get(clickState);
    return clicks;
  },
});

export function Footer() {
  const count = useRecoilValue(clickStateSelector);
  return (
    <div className='mt-5'>
      Clicked: {count}
    </div>
  );
}
