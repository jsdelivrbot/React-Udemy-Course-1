import React, { Component } from 'react';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };
    }

    onInputChange(term) {
        this.setState({ term });
        this.props.onSearchTermChanged(term);
    }

    render() {
        // this trick with the state (value={...}) gives us the opportunity
        // to control the visual component (the input tag) only with the manipulation
        // with the data
        return (
            <div className="search-bar">
                <input
                    value={this.state.term}
                    onChange={ event => this.onInputChange(event.target.value) }
                />
            </div>
        );
    }
}
