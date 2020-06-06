import React from 'react';

export default class Covid19province extends React.Component {
    state = {
        detail: [],
        Country: '',
        province: '',
        loading: true,
        error: false
    }


    componentDidMount() {
        const { CountryName, CountryCode } = this.props.match.params;
        this.setState({ CountryName: CountryName, CountryCode: CountryCode })

        const code = CountryName.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        this.setState({ Country: code })

        fetch(`https://api.covid19api.com/live/country/${CountryName}/status/confirmed`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
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
                <h2>***   {this.state.Country} ***</h2>
                <table className="table table-striped" >

                    <thead>
                        <tr>
                            <th>Date</th> <th>Province</th> <th>Confirmed</th> <th>Death</th> <th>Recovered</th> <th>Active</th>
                        </tr>
                    </thead>
                    <tbody>  {this.state.detail.map((c, idx) =>
                        <tr key={idx}>
                            <td> {c.Date.substring(0, 10)}</td>
                            <td> {c.Province}</td>
                            <td> {parseInt(c.Confirmed).toLocaleString()} </td>
                            <td> {parseInt(c.Deaths).toLocaleString()} </td>
                            <td>{parseInt(c.Recovered).toLocaleString()} </td>
                            <td>{parseInt(c.Active).toLocaleString()}</td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </>
        )
    }
}

