import { Route, Routes } from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';
import MainPage from './Client Side code for pages/MainPage';

function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainPage/>}/>       
        </Routes>
      </BrowserRouter>
    
  )
}

export default App;
