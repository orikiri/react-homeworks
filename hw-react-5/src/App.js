import './App.css';
import Container from './Components/Container/Container';
import Header from './Components/Header/Header';
import {useEffect,useState} from 'react'
import classes from './Components/Container/Container.module.css'

function App() {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState('');

  useEffect (() => {
    fetch("https://63f4e81e55677ef68bc677d9.mockapi.io/emoji")
    .then((res) => res.json())
    .then((data) => setData(data))
  }, [])

  return (
    <div className="App">
      <Header />
      <section>
          <input className={classes.Input} type='text' placeholder='Найти свой емоджи...' onChange={(e) => setTitle(e.target.value)} />
        </section>
      <Container data={data} title={title}/>
    </div>
    )
  }

export default App;