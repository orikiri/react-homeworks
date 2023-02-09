import logo from './logo.svg';
import './App.css';
import characterImg from './images/img2.jpeg';
import ShowData from './components/ShowData';

function App() {
  const posterLuffy = {
    name: 'Monkey･︎D･︎Luffy',
    price: '400,000,000-',
    status: 'dead or alive'
  }

  return (
    <div className="App">
      <div className='poster'>
        <p className='wanted'>WANTED</p>
        <div className='posterImg'>
          <img src={characterImg} alt='Luffy photo'></img>
        </div>
        <div className='posterInfo'>
          <ShowData posterLuffy={posterLuffy}/>
        </div>
        <div className='posterMarine'>
          <p className='marine'>Kono sakuhin ha fiction dethunode jitsu zaisuru jinbutsu dantai sonota no soshiki to do itsu no meishou ga gekichu ni toujyou shitatoshitemo jitsuzai na monotoha issai mukankeideth</p>
          <p className='marine_name'>MARINE</p>
        </div>
      </div>
    </div>
  );
}

export default App;
