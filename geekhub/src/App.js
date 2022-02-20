import React, { Fragment } from 'react';
import PublicHeader from './Components/Menus/publicheader.geekhub.js';
import Home from './Components/Home/Home.geekhub.js';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Fragment>
          <PublicHeader />
          <Routes>
            <Route path="/" exact element={<Home />} />
          </Routes>
        </Fragment>
      </Router>
    </div>
  );
}

export default App;
