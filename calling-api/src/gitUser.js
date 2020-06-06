import React from 'react';

export default class gitUser extends React.Component {
    state = {
        user: {},
        loading: false,
        error: false,
        searchUser: ''
    }

    // componentDidMount() {
    //     fetch('https://api.github.com/users/t1mwillis')
    //         .then(res => res.json())
    //         .then(data => this.setState({ user: data, loading: false }))
    //         .catch(err => this.setState({ loading: false, error: true }));
    // }

    searchForUser = (e) => {
        e.preventDefault();
        console.log(this.state.searchUser);
        fetch(`https://api.github.com/users/${this.state.searchUser}`)
            .then(res => res.json())
            // .then(data => this.setState({ user: data, loading: false }))
            .then(data => {
                console.log(data)
                this.setState({ user: data, loading: false, searchUser: '' })
            })
            .catch(err => this.setState({ loading: false, error: true }));
    }

    inputData = (e) => {
        this.setState({ searchUser: e.target.value })
    }
    render() {
        const { login, avatar_url } = this.state.user;

        if (this.state.error) {
            return <div>Problem loading the page.</div>
        }
        if (this.state.loading) {
            return <div>......... loading page...</div>
        }

        return (
            <div>
                <h1>User</h1>
                <form className="search-form" onSubmit={this.searchForUser}>
                    <input type="text" value={this.state.searchUser}
                        onChange={this.inputData} />
                    <button type="submit"> Search </button>
                </form>
                <p>{login}</p>
                <img src={avatar_url} alt={login} />
            </div>
        )
    }
}
