import './App.css';
import Button from './components/Button/Button';
import Feature from './components/Feature/Feature';
import NameSurname from './components/NameSurname/NameSurname';
import Sanchello from './components/Sanchello/Sanchello';
import TextAlign from './components/TextAlign/TextAlign';

function App() {
  return (
    <div className="App">
      <div className='textAlign'>
        <div className='textAlign_btn'>
          <h2>Задание 1</h2>
          <p>Написать компонент который меняет выравнивание текста (text-align) у элемента h2 по кликам на кнопки</p>
          <TextAlign />
        </div>
        <div className='toggle'>
          <h2>Задание 2</h2>
          <p>Написать компонент который меняет выравнивание текста (text-align) у элемента h2. По клику на кнопку Toggle, меняется выравнивание: сначала по левому краю, потом по центру, потом по правому краю.</p>
          <Button />
        </div>
      </div>
      <div className='nameSurname'>
        <div className='alertName'>
          <h2>Задание 3</h2>
          <p>Сделать форму, в которой будет два поля с именем и фамилией при отправке формы, на экран выводится сообщение с текстом «Имя Фамилия»</p>
          <NameSurname />
        </div>
        <div className='sanchello'>
          <h2>Задание 4</h2>
          <p>Сделайте поле для ввода имени, а под ним строку "Привет, %name%". При вводе текста в поле, должен меняться текст под ним. Если имя это "Санчелло", то строка должна быть "Саня, верни долг!!!" Рядом с полем для ввода, должна быть кнопка отчистить.</p>
          <Sanchello />
        </div>
      </div>
      <div className='feature'>
        <h2>Задание 5</h2>
        <p>Создайте компонент Feature, он принимает заголовок, подзаголовок, описание, картинку и расположение. Картинка может располагаться либо слева, либо справа. То есть нужно менять колонки местами.</p>
        <Feature />
      </div>
    </div>
  );
}

export default App;
