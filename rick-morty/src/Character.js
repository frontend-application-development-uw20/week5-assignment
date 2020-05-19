import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, Switch, withRouter  } from 'react-router-dom';
import CharDetails from './CharDetails.js'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FlareIcon from '@material-ui/icons/Flare';

const useStyles = makeStyles({
  root: {
    maxWidth: 145,
  },
  media: {
    height: 140,
  },
});

export default class Character extends React.Component 
{    
    // const classes = useStyles();

    state=
        {
          isLoading:true, 
          results:[{  }],
          hasError:false,
          searchInput:''
        }

    componentDidMount()
        {
            fetch('https://rickandmortyapi.com/api/character')
            .then (res => res.json())
            .then(data => this.setState({results:data.results, isLoading:false}))
            .catch(error => this.setState({isLoading:false, hasError:true}));
        }

    searchForCharacter =(e) => 
        {
            e.preventDefault(); 
            console.log(`searching for character ${this.state.searchInput}... `);
        }
    onInputChange=(e) =>
        {
            this.setState({
            searchInput:e.target.value
            });
        }
     
    render()
        {
            
            if(this.state.isLoading)    
            {
                return <div> Loading ... </div>
            }
            if(this.state.hasError)
            {
                return <div> An error occured. Try refreshing.</div>
            }
            return (
                    <Grid container direction="row" spacing={6} justify="center" flex="1" alignItems="center" > 
                      {[0,1,2].map((value) => ( 
                      <Grid item key={value} md={3}> 
                        <div styles={{marginLeft:20}}>
                            { 
                             
                            this.state.results.map 
                                (results => 
                                ( 
                                <div style={{flexGrow:1, flex:1 }}>
                                    {/* {[results].map((value) => (
                                     <Grid item key={value} md={3}> */}
                                     {/* {[0,1,2].map((results.id) => (  */}
                                  
                                    <Card styles={{ marginLeft:20, maxWidth:350}} >
                                    <CardHeader
                                        avatar=
                                            {
                                             <Avatar aria-label="icon" >
                                             <FlareIcon></FlareIcon></Avatar>
                                            }
                                        title=
                                            {
                                              <IconButton styles={{textAlign:"right"}}>
                                              <Link to={`/${results.id}`}> {results.name} </Link>
                                              </IconButton>                   
                                           }
                                    />
                                    <img src={results.image} alt={`${results.id}`}  />
                                    {/* {results.location.name} */}
                                    </Card>  
                                    {/* </Grid>
                                    ))}    */}
                                    
                                </div>
                            ))
                            }
                        </div>
                         </Grid> 
                      ))} 
                     </Grid>
            
                    )
       }
}
