import React from 'react';
import Character from './Character.js'
import './App.css';
import { BrowserRouter as Router, Route, Link, Redirect, Switch, withRouter  } from 'react-router-dom';
import CharDetails from './CharDetails.js';
import HomeIcon from '@material-ui/icons/Home';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { teal, blue } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding:20, 
    backgroundColor:teal 
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Home =() => (
  <div> 
    This is the home page
  </div>
);

const WrappedHome = withRouter(Home); 

const NotFound =() => (
  <div> 
    404: Page Not Found
  </div>
);

const Details=(props) => {
  console.log(props);
   return <div> Character Details Page </div>; 
}

const SearchChar = (props) => {
  console.log(props); 
  const searchchar=props.match.params.searchedChar; 
  //const { searchchar } = useParams();
  return (
    <div style={{backgroundColor:searchchar}}> Here's your searched character details  </div>
  )
}

function App() {
  const classes = useStyles();

  return (  
    <div className="App" >
        <AppBar position="static" className={classes.root}>
       <h1> Rick and Martin Characters</h1>   
        </AppBar>
      
       <Router>
          <Toolbar > <Link  to="/"> <div style={{fontSize:20}}> <HomeIcon style={{fontSize:32,  verticalAlign:"bottom" }}/> Home  </div> </Link> </Toolbar>
          <Switch>
          <Route path="/" exact component={Character} />
          <Route path="/:id" component={CharDetails} />
          <Route path="*" exact component={NotFound} />
          </Switch>
       </Router>       
    </div>
  );
}

export default App;
