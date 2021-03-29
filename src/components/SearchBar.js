import React from 'react';

class SearchBar extends React.Component {
    // constructor(props) {
    //     super(props); 
    // }
    state = { term: '' };
    onInputChange = (event) => {
        this.setState({ term: event.target.value })
    }
    OnFormSubmit = (event) => {
        event.preventDefault();

        // TODO: Make Sure we call
        // Call API
        this.props.onFormSubmit(this.state.term);



    }
    render() {
        return (
            <div className="search-bar ui segment">
                <form className="ui form" onSubmit={this.OnFormSubmit}>
                    <div className="field">
                        <label>Video Search</label>
                        <input type="text"
                            onChange={this.onInputChange}
                            value={this.state.term} />
                    </div>
                </form>
            </div>
        );
    }
}
export default SearchBar;