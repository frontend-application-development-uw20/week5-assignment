import React from 'react';
import { Link } from 'react-router-dom';

export default class Covid19country extends React.Component {
    state = {
        detail: [],
        Country: '',
        loading: true,
        error: false
        , CountryName: ''
        , CountryCode: ''
    }

    componentDidMount() {
        // console.log(this.props);
        const { CountryName, CountryCode } = this.props.match.params;
        this.setState({ CountryName: CountryName, CountryCode: CountryCode })

        const code = CountryName.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        this.setState({ Country: code })

        fetch(`https://api.covid19api.com/total/country/${CountryName}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data.Error);
                this.setState({ detail: data, loading: false, error: false })
            }
            )
            .catch(err => this.setState({ loading: false, error: true }))
    }

    render() {
        // console.log(this.state.CountryName);
        if (this.state.loading) {
            return <div>....loading</div>;
        }

        if (this.state.error) {
            return <div> Try to reload again! </div>;
        }
        return (
            <>
                {< img src={`https://www.countryflags.io/${this.state.CountryCode}/flat/64.png`} width="200px" alt="flag" />}

                <Link to={`/covid19/${this.state.CountryName}/${this.state.CountryCode}/Province`}> <h2>***   {this.state.Country} ***</h2> </Link>

                <div className="detail">
                    {this.state.detail.map((c, idx) =>
                        <div key={idx}>
                            <b>{c.Date.substring(0, 10)} Total={parseInt(c.Confirmed).toLocaleString()} </b>
                        ( <span>Death={parseInt(c.Deaths).toLocaleString()}</span> Recovered={parseInt(c.Recovered).toLocaleString()} Active={parseInt(c.Active).toLocaleString()} )
                        </div>
                    )}
                </div>
            </>
        )
    }
}

