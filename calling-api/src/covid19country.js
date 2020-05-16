import React from 'react';

export default class Covid19country extends React.Component {
    state = {
        detail: [],
        CountryName: ''
    }

    componentDidMount() {
        console.log(this.props);
        const { CountryName } = this.props.match.params;
        this.setState({ CountryName: CountryName })
        console.log(CountryName);
        // console.log(CountryName.replace(/\s+/g, '-').toLowerCase());

        // const code = CountryName.replace(/\s+/g, '-').toLowerCase();
        // console.log(code);

        // fetch(`https://api.covid19api.com/live/country/${CountryName}`)
        fetch(`https://api.covid19api.com/total/country/${CountryName}`)
            .then(res => res.json())
            .then(data => this.setState({ detail: data }));
    }

    render() {
        return (
            <>
                <h2> {this.state.CountryName}  </h2>
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

