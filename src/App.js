import React from 'react' 
import './App.css';
import Row from './Row'
import requests from './request'
import Banner from './Banner'
import Nav from './Nav'
function App() {
  return (
    <div className="app">
      <Nav/>   
      <Banner/>
      
      <Row
       title="NETFLIX ORIGINALS"  fetchUrl={requests.fetchNetflixOriginals}  
       isLargeRow
       
       />
      <Row title="Trending Now"  fetchUrl={requests.fetchTrending}   />
      <Row title="Top Rated"  fetchUrl={requests.fetchTopRated}   />
      <Row title="ActionMovies"  fetchUrl={requests.fetchActionMovies}   />
      <Row title="Comedy Movies"  fetchUrl={requests.fetchComedyMovies}   />
      <Row title="Horror movies"  fetchUrl={requests.fetchHorrorMovies}   />
      <Row title="Romance movie"  fetchUrl={requests.fetchRomanceMovies}   />
      <Row title="Documetaries"  fetchUrl={requests.fetchDocumentaries}   />
    </div>
  );
}

export default App;




































// apikey:f64b446e1f7eca5fe20ff5f40f6c820b