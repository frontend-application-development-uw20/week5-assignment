import React from "react";
import { BrowserRouter as Redirect, Link } from "react-router-dom";
import Homeworld from "./Homeworld";
import Films from "./Films";
import Vehicles from "./Vehicles";
import Starships from "./Starships";

export default class CharacterDeepDive extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      person: null,
      params: null,
      homeworld: null,
      starships: [],
      vehicles: [],
      species: [],
      films: [],
      redirect: null,
      loading: true,
    };
  }
  componentDidMount() {
    this.fetchPerson();
  }
  componentDidUpdate() {
    if (this.props.match.params.urlString !== this.state.params) {
      this.fetchPerson();
    }
  }
  fetchPerson() {
    const { urlString } = this.props.match.params;
    fetch(
      `https://swapi.dev/api/people/?search=${urlString.replace(/-/gi, " ")}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.count > 0) {
          this.setState(
            {
              person: data,
              params: urlString,
              homeworld: null,
              films: [],
              species: [],
              vehicles: [],
              starships: [],
            },
            () => {
              this.fetchDetails(data.results[0]);
              this.setState({ loading: false });
            }
          );
        } else {
          this.setState({ redirect: "/404" });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  fetchDetails = (data) => {
    fetch(data.homeworld)
      .then((response) => response.json())
      .then((d) => {
        this.setState({ homeworld: d });
      })
      .catch((error) => {
        console.log(error);
      });

    const films = [];
    data.films.map((a, i) =>
      fetch(a)
        .then((response) => response.json())
        .then((d) => {
          films.push(d);
          this.setState({ films: films });
        })
        .catch((error) => {
          console.log(error);
        })
    );

    const species = [];
    data.species.map((a, i) =>
      fetch(a)
        .then((response) => response.json())
        .then((d) => {
          species.push(d);
          this.setState({ species: species });
        })
        .catch((error) => {
          console.log(error);
        })
    );

    const vehicles = [];
    data.vehicles.map((a, i) =>
      fetch(a)
        .then((response) => response.json())
        .then((d) => {
          vehicles.push(d);
          this.setState({ vehicles: vehicles });
        })
        .catch((error) => {
          console.log(error);
        })
    );

    const starships = [];
    data.starships.map((a, i) =>
      fetch(a)
        .then((response) => response.json())
        .then((d) => {
          starships.push(d);
          this.setState({ starships: starships });
        })
        .catch((error) => {
          console.log(error);
        })
    );
  };

  render() {
    const CharacterDetails = (props) => {
      if (
        this.state.person === undefined ||
        (this.state.person === null && this.state.loading === true)
      ) {
        if (this.state.redirect !== null) {
          return <Redirect to={this.state.redirect} />;
        }
        return <div className="spinner-border page-centered"></div>;
      } else {
        const data = this.state.person.results[0];
        return (
          <>
            <div id="starwarsdetails" className="row justify-content-center">
              <div className="crawl col-9">
                <h2>{data.name}</h2>
                <Films d={this.state.films} person={data} />
                <Homeworld
                  d={this.state.homeworld}
                  s={this.state.species}
                  person={data}
                />
                <Vehicles d={this.state.vehicles} person={data} />
                <Starships d={this.state.starships} person={data} />
              </div>
            </div>
            <div id="return">
              <Link to={`/`}>Return to the list of characters</Link>
            </div>
          </>
        );
      }
    };
    return (
      <>
        <CharacterDetails />
      </>
    );
  }
}
