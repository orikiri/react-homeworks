import logo from './logo.svg';
import './App.css';
import ShowData from './components/ShowData';
import characterImg1 from './images/img1.jpeg'
import characterImg2 from './images/img2.jpeg'


function App() {
  const zoro = {
    characterName: 'Roronoa Zoro',
    ageBeforeTimeskip: 19,
    ageAfterTimeskip: 21,
    birthDate: '11 November',
    nickname: [
      'Pirate Hunter Zoro',
      'King of Hell'
    ],
    affiliations: 'Straw Hat Pirates',
    technic: 'Santoryu Ougi: Ichidai Sanzen Daisen Sekai'
  };

  return (
    <div className="App">
      <div className='characterCard'>
        <div className='characterCard_images'>
          <img src={characterImg1} alt='Zoro img' height='150'></img>
          <img src={characterImg2} alt='Zoro img' height='150'></img>
        </div>
        <h1>{zoro.characterName}</h1>
        <div className='characterCard_info'>
          <ShowData zoro={zoro}/>
        </div>
      </div>
    </div>
  );
}

export default App;
