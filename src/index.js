import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search-bar';
import VideoList from "./components/video-list";
import VideoDetail from "./components/video-detail";

const API_KEY = 'AIzaSyAWg2pysDX9ZMjctb1VVsP53Vu-s0XsuQo';
const SEARCH_TIMEOUT_MILLIS = 300;

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('surfboards');
    }

    videoSearch(term) {
        YTSearch({ key: API_KEY, term: term }, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[ 0 ]
            });
        });
    }

    render() {
        // inner function (the video search itself) will be called only once per 300ms (defined constant)
        const videoSearch = _.debounce((term) => {
            this.videoSearch(term)
        }, SEARCH_TIMEOUT_MILLIS);

        return (
            <div>
                <SearchBar onSearchTermChanged={videoSearch}/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
                    videos={this.state.videos}/>
            </div>
        );
    }

}

ReactDOM.render(<App />, document.querySelector('.container'));
