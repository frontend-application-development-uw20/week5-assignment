import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Youtube extends Component {
    state = {
        global: {},
        date: '',
        countries: [],
        loading: true,
        error: false
    }

    componentDidMount() {
        fetch('https://api.covid19api.com/summary')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                console.log(data.Error);
                // this.setState({ countries: data.Countries, loading: false, error: false })
                this.setState({ countries: data.Countries, global: data.Global, date: data.Date, loading: false, error: false })
            }
            )
            .catch(err => this.setState({ loading: false, error: true }))
    }

    render() {
        const { NewConfirmed, NewDeaths, NewRecovered, TotalConfirmed, TotalDeaths, TotalRecovered } = this.state.global;

        if (this.state.loading) {
            return <div>....loading</div>;
        }

        if (this.state.error) {
            return <div> Try to reload again! </div>;
        }

        return (
            <main>
                <h1>Year 2020 came with a virus. Please undo it!</h1>
                <img src="https://www.amc.edu/patient/services/infectious_disease/images/corona-virus-static-web_1.jpg" alt="covid19" width="250" height="150" border="0"></img>
                <h3> As of {this.state.date.substr(0, 10)}</h3>
                <nav>
                    <div>New Confirmed={parseInt(NewConfirmed).toLocaleString()} </div>
                    <div>New Deaths={parseInt(NewDeaths).toLocaleString()}</div>
                    <div> New Recovered={parseInt(NewRecovered).toLocaleString()}</div>
                    <div>Total Confirmed={parseInt(TotalConfirmed).toLocaleString()}</div>
                    <div>Total Deaths={parseInt(TotalDeaths).toLocaleString()}</div>
                    <div>Total Recovered={parseInt(TotalRecovered).toLocaleString()}</div>
                </nav>
                <div className="box">
                    {this.state.countries.map((c) => (
                        < div key={c.CountryCode} >
                            <Link to={`/covid19/${c.Slug}`}>{c.Country} </Link>
                            {/* <Link to={`/covid19/${c.Country}`}>{c.Country} </Link> */}
                          Total Confirmed =  <span>  {parseInt(c.TotalConfirmed).toLocaleString()} </span>
                        </div >
                    )
                    )
                    }
                </div>
            </main >
        )
    }
}
