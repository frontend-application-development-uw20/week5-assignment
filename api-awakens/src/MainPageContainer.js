import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CharacterDeepDive from "./CharacterDeepDive";
import HomeList from "./HomeList";
import Page404 from "./Page404";

export default class MainPageContainer extends React.Component {
  state = {
    characters: [],
    loading: true,
  };
  componentDidMount() {
    this.fetchURL("https://swapi.dev/api/people/");
  }

  fetchURL(url) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          characters: this.state.characters.concat(data.results),
        });
        if (data.next !== null) {
          this.fetchURL(data.next);
        } else {
          this.setState({
            loading: false,
          });
        }
      })
      .catch((error) => {
        this.setState({ error: true, loading: false });
      });
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <HomeList
                {...props}
                loading={this.state.loading}
                list={this.state.characters}
              />
            )}
          />
          <Route path="/character/:urlString" component={CharacterDeepDive} />
          <Route path="/404" component={Page404} />} />
          <Route from="/*" component={Page404} />} />
        </Switch>
      </Router>
    );
  }
}
