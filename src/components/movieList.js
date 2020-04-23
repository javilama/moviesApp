import React, { Component } from 'react';
import axios from 'axios';
import ShowMovies from './showMovies'


// const URL = 'https://api.themoviedb.org/3/movie/550?api_key=4c440728e3f5d8bcca34a940211e92d7';
const URL = 'https://api.themoviedb.org/3/movie/upcoming?api_key=4c440728e3f5d8bcca34a940211e92d7&language=en-US&page=1'

class viewMovies extends Component {
 
    constructor(props){
        super(props)
        this.state = {
            data:[]
         }
        
    }
 

 componentDidMount() {
    axios.get(URL)
 .then(res=> {
     const movies = res.data
     let data = []
     for ( let item of movies.results){
        data.push(item)
      }
      this.setState({
          data
      })
    //  console.log(this.state);
 })

 }
 


//    getMovies= async ()=>{
//     let res = await fetch(URL)
//     let movies = await res.json()
//     // let data = []
//       console.log(movies)
//       this.setState(movies)
//    }
   


    render() {
        return (
            <div>
                <ShowMovies movies={this.state.data} />
               
            </div>
        );
    }
}

export default viewMovies;