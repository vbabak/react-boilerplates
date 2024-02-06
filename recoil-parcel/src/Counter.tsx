import { useRecoilState } from 'recoil';
import { clickState } from './atoms';

export function Counter() {
  const [clicks, setClicks] = useRecoilState(clickState);

  const onClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <div>
      <button onClick={onClick} className="p-2 rounded bg-blue-500 hover:bg-blue-600 transition">
        Increase Counter
      </button>
    </div>
  );
}
