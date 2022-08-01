import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Expenses } from './modules/expenses/Expenses';
import { Home } from './modules/home/Home';
import { Summary } from './modules/summary/Summary';
import { Wrapper } from './modules/wrapper/Wrapper';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Wrapper />}>
          <Route index element={<Home />} />
          <Route path='/expenses' element={<Expenses />} />
          <Route path='/summary' element={<Summary />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
