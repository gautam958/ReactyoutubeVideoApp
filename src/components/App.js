import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apies/youtube';
import VideoList from '../components/VideoList';
import VideoDetail from '../components/VideoDetail';


class App extends React.Component {

    state = { videos: [], selectedvideo: null }

    componentDidMount() {
        this.onTermSubmit('buildings');
    }

    onTermSubmit = async (term) => {

        const response = await youtube.get("/search", {
            params: {
                q: term
            }
        });

        this.setState({
            videos: response.data.items,
            selectedvideo: response.data.items[0]
        })

    };

    onVideoSelect = (video) => {
        // console.log('from the app!', video);
        this.setState({ selectedvideo: video });
    }
    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedvideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList onVideoSelect={this.onVideoSelect}
                                videos={this.state.videos} />
                        </div>
                    </div>
                </div>
                I have {this.state.videos.length} videos.
            </div>
        )
    }
}

export default App;