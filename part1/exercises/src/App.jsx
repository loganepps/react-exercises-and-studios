import './App.css';

import BookList from './components/BookList.jsx';
import ChoresList from './components/ChoresList.jsx';
import HobbyLinks from './components/HobbyLinks.jsx';
import MovieList from './components/MovieList.jsx';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <ChoresList />
      <div className="similarComponents">
      <MovieList />
      <BookList />
      <HobbyLinks />
      </div>
    </div>
  );
}

export default App;
