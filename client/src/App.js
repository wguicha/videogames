import Cards from './components/Cards/Cards';
import NewGame from './components/NewGame/NewGame';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { Routes, Route } from 'react-router-dom';
import { fetchGames, uploadGenres } from './redux/actions';
import Presentation from './components/Presentation/Presentation';
import PageNotFound from './components/PageNotFound/PageNotFound';

function App() {

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchGames());
    dispatch(uploadGenres());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <Routes>
        <Route path="/" element={<Presentation/>} />
        <Route path="/home" element={<Cards/>} />
        <Route path="/newgame" element={<NewGame/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path='*' element={<PageNotFound />}/>
      </Routes>
    </div>
  );
}

export default App;
