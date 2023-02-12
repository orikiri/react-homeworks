import './App.css';
import BadgeExample from './components/BadgeExample';
import Card from './components/Card';

function App() {
  const items = [
    {id: 1, type: 'Sweatshirts', content: 'Sweat Pullover L/S Hoodie' , price: '3 999' }, 
    {id: 2,type: 'Bottoms', content: 'Wide Fit Jeans' , price: '4 999' }, 
    {id: 3,type: 'Outer', content: 'Trench Coat' , price: '13 999' }, 
  ]

  const types = ['secondary', 'primary', 'success', 'danger', 'warning', 'info', 'light' ]
  
  return (
    <div className="App">
        <Card items={items}/>
        <BadgeExample types={types}/>
    </div>
  );
}

export default App;
