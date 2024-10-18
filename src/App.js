import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import IpoList from './components/IpoList.js';
import IpoDetails from './components/IpoDetails';
import { CssBaseline } from '@mui/material';
import { AppBar, Toolbar, Typography } from '@mui/material';

function App() {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            IPO App
          </Typography>
        </Toolbar>
      </AppBar>
      <CssBaseline />
      <Routes>
        <Route exact path="/" element={<IpoList />} />
        <Route path="/details/:id" element={<IpoDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
