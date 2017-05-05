import React from 'react';

const VideoListItem = ({ video, onVideoSelect }) => {    // identical to ES5 (props.video) => { ... }
    const imageUrl = video.snippet.thumbnails.default.url;
    const title = video.snippet.title;

    return (
        <!-- below we use the function as a click lister in order to execute in only on click on the <ul> -->
        <ul onClick={() => onVideoSelect(video)} className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imageUrl}/>
                </div>

                <div className="media-body">
                    <div className="media-heading">{title}</div>
                </div>
            </div>
        </ul>
    );
};

export default VideoListItem;