import React from 'react';
import { TOKEN } from './api-key';

const symbol = 'aapl,ba,bac,c,cost,fb,goog,ibm,sbux,wfc,xom';
// console.log(TOKEN);

export default class StockExchange extends React.Component {
    state = {
        stocks: {}
    }
    componentDidMount() {
        fetch(`https://sandbox.iexapis.com/v1/stock/market/batch?types=quote&symbols=${symbol}&range=5y&token=Tpk_75d790f2b76d4a679397fb709159c807`)
            // fetch(`https://sandbox.iexapis.com/stable/stock/${symbol}/quote?token=Tpk_75d790f2b76d4a679397fb709159c807`)
            //fetch(`https://sandbox.iexapis.com/stable/stock/${symbol}/quote?token=${TOKEN}`)
            .then(res => res.json())
            .then(data => this.setState({ stocks: data }));
    }


    render() {
        console.log(this.state);

        return (
            <div>
                <h1>Stock </h1>
                {/* {this.state.stocks.map(s => (
                    <div>
                        {}
                    </div>

                ))} */}
            </div>
        )
    }
}
