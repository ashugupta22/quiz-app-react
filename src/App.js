import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';
import Home from './Components/Home';
import QuestionScreen from './Components/QuestionScreen';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/question' element={<QuestionScreen />}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
