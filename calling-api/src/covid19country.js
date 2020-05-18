import React from 'react';

export default class Covid19country extends React.Component {
    state = {
        detail: [],
        CountryName: '',
        Country: '',
        loading: true,
        error: false
    }


    componentDidMount() {
        // console.log(this.props);
        const { CountryName } = this.props.match.params;
        this.setState({ CountryName: CountryName })

        const code = CountryName.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        this.setState({ Country: code })

        // fetch(`https://api.covid19api.com/live/country/${CountryName}/status/confirmed`)
        fetch(`https://api.covid19api.com/total/country/${CountryName}`)
            .then(res => res.json())
            .then(data => {
                console.log(data.Error);
                this.setState({ detail: data, loading: false, error: false })
            }
            )
            .catch(err => this.setState({ loading: false, error: true }))
    }

    render() {
        if (this.state.loading) {
            return <div>....loading</div>;
        }

        if (this.state.error) {
            return <div> Try to reload again! </div>;
        }
        return (
            <>
                <h2> ***   {this.state.Country} ***
                    {/* <img src="https://www.countryflags.io/{country_code}/flat/64.png"> */}
                </h2>
                <div className="detail">
                    {this.state.detail.map((c, idx) => <div key={idx}>
                        <b>{c.Date.substring(0, 10)} Total={parseInt(c.Confirmed).toLocaleString()} </b>
                        ( <span>Death={parseInt(c.Deaths).toLocaleString()}</span> Recovered={parseInt(c.Recovered).toLocaleString()} Active={parseInt(c.Active).toLocaleString()} )
                </div>
                    )
                    }
                </div>
            </>
        )
    }

}

