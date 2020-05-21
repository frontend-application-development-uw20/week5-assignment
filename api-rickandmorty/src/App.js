import React from 'react';
import {BrowserRouter as Router,Route, Link, Switch} from 'react-router-dom';
import Characters from './Components/Characters';
import CharacterDetails from './Components/CharacterDetails';
import Locations from './Components/Locations';
import LocationDetails from './Components/LocationDetails';
import Episodes from './Components/Episodes';
import EpisodeDetails from './Components/EpisodeDetails'
import './App.css';


const Home = (props) => {
  return(
    
    <div className= "home-page">
      
       <a href= "https://en.wikipedia.org/wiki/Rick_and_Morty" ><h1>Time for Rick and Morty</h1></a>
        {/* <a href= "https://en.wikipedia.org/wiki/Rick_and_Morty" content= "rick and morty wiki"/> */}
      <img className= "poster" src=
      "https://cdn11.bigcommerce.com/s-1n8r405nxd/images/stencil/2000x2000/products/6104/10383/20364-1-Rick_Morty_Portal_Poster-Cheapest_Affordable_Online_Wholesale_Waterbedsnstuff__78431.1536271014.jpg?c=2" 
      alt="Rick and Morty poster"/>
      </div>
  )
}

const NotFound = () => <div> 404 Not Found </div>



function App() {
  return (
    <div className="App">
      <Router>
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons"rel="stylesheet"></link>
        <div>
         <Link to ="/"> <em>Home  </em></Link> 
         <Link to ="/characters"><em>  Characters </em> </Link>
         <Link to ="/locations"><em>  Locations </em> </Link>
         <Link to ="/episodes"><em>  Episodes </em> </Link>

         
         <hr />
        
         </div>
        <Switch>
          <Route path ="/" exact component ={Home} />
          <Route exact path ="/characters" component= {Characters} />
          <Route path= "/characters/:char_id" component= {CharacterDetails}  />
          <Route exact path ="/locations" component= {Locations} />
          <Route path= "/locations/:loc_id" component= {LocationDetails}  />
          <Route exact path ="/episodes" component= {Episodes} />
          <Route path= "/episodes/:ep_id" component= {EpisodeDetails}  />


          <Route path = "*" component ={NotFound} />
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
