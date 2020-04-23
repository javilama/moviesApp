import React  from 'react';
import './App.css';
// import ShowMovies from './components/showMovies'
import MovieList from './components/movieList'
import  SideBar  from './components/sideBar';
import Header from './components/header';




 
function App() {
 
  return (
   <div>
     <Header/>
     <SideBar/>
     < MovieList/>

   </div>
  );
}

export default App;
