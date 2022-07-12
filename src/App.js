import './App.css';
import {BrowserRouter , Routes , Route} from "react-router-dom";
import Main from './Components/Main';
import Home from './Components/Home';
import Bollywood from './Components/Bollywood';
import Hollywood from './Components/Hollywood';
import Technology from './Components/Technology';
import Food from './Components/Food';
import Fitness from './Components/Fitness';

function App() {
  return (
    <>
    <div>
      <BrowserRouter>
      <Main/>
       <Routes>
        <Route path='/home'element={ <Home/> } />
        <Route path='/bollywood' element={ <Bollywood/> } />
        <Route path='/technology' element={ <Technology/> } />
        <Route path='/hollywood' element={ <Hollywood /> } />
        <Route path='/food' element={ <Food/> } />
        <Route path='/fitness' element={ <Fitness /> } />

       </Routes>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
