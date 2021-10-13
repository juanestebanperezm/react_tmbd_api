import './App.css';
import React from 'react'
import Row from './Row'
import requests from './requests';
import Banner from './Banner'
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>

      <Banner/>

      <Row title='Tendencias' fetchUrl={requests.fetchTrendingDay} isLargeRow/>
      <Row title='Accion' fetchUrl={requests.fetchDiscoverAction} />
      <Row title='Comedia' fetchUrl={requests.fetchDiscoverComedy} />
      <Row title='Terror' fetchUrl={requests.fetchDiscoverHorror} />
      <Row title='Documentales' fetchUrl={requests.fetchDiscoverDocs} />
    
    </div>
  );
}

export default App;
