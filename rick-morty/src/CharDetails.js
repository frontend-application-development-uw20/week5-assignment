import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, Switch, withRouter  } from 'react-router-dom';
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
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';


let flag=0; 
export default class CharDetails extends React.Component 
{
    state={
        results:{
            location:{}, 
    }
   }
    componentDidMount()
    {
        const {id} =this.props.match.params; 
        console.log(`searching id = ${id}`);
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then (res => res.json())
        .then(data => this.setState({results:data}))
    }

    
    render () 
    {
        const {results} =this.state; 
        console.log({results});
       
        return (
             <div>
                 {
                    
                //  this.state.results.map(results => 
                //               (
                <Grid container spacing={4} styles={{ marginLeft:20}}>
                        <Grid item xs={4}/> 
                        <Grid item xs={4}> 
                            <Card styles={{maxWidth:245, marginLeft:20}} > 
                                <CardHeader
                                avatar=
                                {
                                    <Avatar aria-label="icon" >
                                    <AssignmentIndIcon  />
                                    </Avatar>
                                }
                                    titleTypographyProps={{variant:'h5'}}
                                    title={results.name}
                                    subheaderTypographyProps={{variant:'h6'}}
                                    subheader={results.species}
                                />
                            
                                <CardMedia style={{height: 0,paddingTop: '66.25%',}}
                                image={results.image}
                                title="character"
                                />
                                                    
                                <CardContent>  
                                    <Typography> 
                                        <br/>
                                        <b>Gender:</b>   {results.gender}  <br/>
                                        <b>Status:</b>   {results.status} <br/>
                                        <b>Location:</b>   {results.location ? results.location.name : null }
                                        <br/> <b>Origin:</b> {results.origin ? results.origin.name : null }                                                                           
                                     </Typography>
                                </CardContent>
                            </Card> <br></br> <br/>
                        </Grid>
                </Grid>
                //                  ))
                }
                        
             </div>
             
        );
    }
}