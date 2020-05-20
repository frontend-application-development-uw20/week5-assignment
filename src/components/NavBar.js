import React from 'react';
import { Link } from 'react-router-dom';
import '../App.scss';

class NavBar extends React.Component {

    render() {
        return (
            <header className="navBar">
                <nav>
                    <div className="navItem">
                        <Link to="/"><h2>Superhero Finder</h2></Link>
                    </div>
                    <ul>
                        <Link to="/"><li>Home</li></Link>
                        <Link to="/favorites"><li>Favorites</li></Link>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default NavBar;