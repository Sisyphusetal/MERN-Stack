import './App.css';
import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Main from './views/Main'
import Detail from './views/Detail'
import Update from './views/Update'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/products' element={<Main />} />
        <Route path='/products/:id' element={<Detail/>}/>
        <Route path='/products/:id/edit' element={<Update/>}/>
      </Routes>
    </div>
  );
}

export default App;
