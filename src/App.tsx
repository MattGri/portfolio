import React from 'react';
import Main from './components/Main';
import Sidenav from './components/Sidenav';
import Work from './components/Work';

function App() {
  return (
    <div className="App">
      <Sidenav />
      <Main />
      <Work />
    </div>
  );
}

export default App;
