import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search-bar';

const API_KEY = 'AIzaSyAWg2pysDX9ZMjctb1VVsP53Vu-s0XsuQo';

YTSearch({ key: API_KEY, term: 'surfboards' }, function(data) {
    console.log(data);
});

const App = () => {
    return (
        <div>
            <SearchBar/>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('.container'));
