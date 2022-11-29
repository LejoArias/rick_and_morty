import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import CharacterList from './components/CharacterList';
import Character from './components/Character';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
     <BrowserRouter>
     <Routes>
         <Route exact path='/' element={<Home/>}/>
         <Route exact path='/CharacterList' element={<CharacterList/>}/>
         <Route exact path='/Character' element={<Character/>}/>
         <Route exact path='/*'  element={<NotFound/>}/>
      </Routes>    
     </BrowserRouter>
  );
}

export default App;
