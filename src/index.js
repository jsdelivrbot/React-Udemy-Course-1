import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search-bar';

const API_KEY = 'AIzaSyAWg2pysDX9ZMjctb1VVsP53Vu-s0XsuQo';

const App = () => {
    return (
        <div>
            <SearchBar/>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('.container'));
