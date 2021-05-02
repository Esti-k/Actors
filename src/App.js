import logo from './logo.svg';
import './App.css';
import ActorsPage from './components/ActorsPage';
import Card from './components/Card';
import Actor from './data-models/Actor';
// import Card from '.components/Card'

function App() {

  const Actor1 = new Actor('Tom', 'Hanks', '1983-04-14', 'https://m.media-amazon.com/images/M/MV5BMTQ2MjMwNDA3Nl5BMl5BanBnXkFtZTcwMTA2NDY3NQ@@._V1_UY317_CR2,0,214,317_AL_.jpg', 'https://www.imdb.com/name/nm0000158');
  const Actor2 = new Actor('Tom', 'Cruise',  '1962-07-03','https://m.media-amazon.com/images/M/MV5BMTk1MjM3NTU5M15BMl5BanBnXkFtZTcwMTMyMjAyMg@@._V1_UY317_CR14,0,214,317_AL_.jpg', 'https://www.imdb.com/name/nm0000158');
  const Actor3 = new Actor('Jennifer', 'Lawrence', '1990-08-15', 'https://m.media-amazon.com/images/M/MV5BOTU3NDE5MDQ4MV5BMl5BanBnXkFtZTgwMzE5ODQ3MDI@._V1_UX214_CR0,0,214,317_AL_.jpg', 'https://www.imdb.com/name/nm0000158');  
  const Actor4 = new Actor('Tom', 'Hanks', '1960-04-14', 'https://m.media-amazon.com/images/M/MV5BMTQ2MjMwNDA3Nl5BMl5BanBnXkFtZTcwMTA2NDY3NQ@@._V1_UY317_CR2,0,214,317_AL_.jpg', 'https://www.imdb.com/name/nm0000158');  
  const ActorsArray = [Actor1, Actor2, Actor3, Actor4];
  return (
    <div>
      <ActorsPage cardData={ActorsArray}></ActorsPage>
    </div>
  );
}

export default App;
