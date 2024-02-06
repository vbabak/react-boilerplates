import { RecoilRoot } from 'recoil';
import { Counter } from './Counter';
import { Footer } from './Footer';

export function App() {
  return (
    <RecoilRoot>
      <div className='container p-10'>
        <Counter></Counter>
        <Footer></Footer>
      </div>
    </RecoilRoot>
  );
}
