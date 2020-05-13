import React from 'react';
import {BrowserRouter as Router,Route, Link, Switch} from 'react-router-dom';
import Characters from './Characters';
import CharacterDetails from './CharacterDetails';
import './App.css';


const Home = (props) => {
  return(
    <div className= "home_page">
      <h1>Time for Rick and Morty</h1>
      <img className= "poster" src=
      "https://cdn11.bigcommerce.com/s-1n8r405nxd/images/stencil/2000x2000/products/6104/10383/20364-1-Rick_Morty_Portal_Poster-Cheapest_Affordable_Online_Wholesale_Waterbedsnstuff__78431.1536271014.jpg?c=2" 
      alt="Rick and Morty poster"/>
      </div>
  )
}

const NotFound = () => <div>404 Not Found </div>



function App() {
  return (
    <div className="App">
      <Router>
        <div>
         <Link to ="/"> <em>Home  </em></Link> 
         <Link to ="/characters"><em>  Characters </em> </Link>
         <hr />
        
         </div>
        <Switch>
          <Route path ="/" exact component ={Home} />
          <Route exact path ="/characters" component= {Characters} />
          <Route path= "/characters/:id" component= {CharacterDetails}  />
          <Route path = "*" component ={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
