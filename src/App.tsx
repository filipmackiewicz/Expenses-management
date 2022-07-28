import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './modules/home/Home';
import { Wrapper } from './modules/wrapper/Wrapper';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Wrapper />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
