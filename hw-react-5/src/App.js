import './App.css';
import Container from './Components/Container/Container';
import Header from './Components/Header/Header';
import {useEffect,useState} from 'react'

import Pagination from './Components/Paginate/Pagination';
import Inputbar from './Components/Inputbar/Inputbar';

function App() {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(12);

  const lastCardIndex = currentPage * cardsPerPage;
  const firstCardIndex = lastCardIndex - cardsPerPage;
  const currentCards = data.slice(firstCardIndex,lastCardIndex);


  function paginate(pageNum) {
    setCurrentPage(pageNum)
  }
  function firstPage() {
    setCurrentPage(1)
  }
  function lastPage() {
    setCurrentPage(9)
  }

  useEffect (() => {
    fetch("https://63f4e81e55677ef68bc677d9.mockapi.io/emoji")
    .then((res) => res.json())
    .then((data) => setData(data))
  }, [])

  return (
    <div className="App">
      <Header />
      <Inputbar setTitle={setTitle}/>
      <Container data={currentCards} title={title} allData={data}/>
      <Pagination totalCards={data.length} cardsPerPage={cardsPerPage} paginate={paginate} firstPage={firstPage} lastPage={lastPage} currentPage={currentPage} setCardsPerPage={setCardsPerPage}/>
    </div>
    )
  }

export default App;