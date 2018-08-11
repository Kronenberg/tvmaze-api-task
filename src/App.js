import React, { Component } from 'react';
import { connect } from "react-redux";

import SearchBar from './components/search-bar/search-bar';
import TvShowsTable from './components/tv-shows-table/tv-shows-table';

import './App.css';

class App extends Component {

  componentWillMount() {
    this.props.getQueryAsync("girls");
  }

  render() {
    const { tvShows } = this.props;  
  
    return (
      <div className="App">
    
          <SearchBar 
              getQueryAsync={this.props.getQueryAsync}
          />

          <TvShowsTable 
            tvShowsList={tvShows}
          />

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    tvShows: state.searchShowReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getQueryAsync: (query) => dispatch({ type: "GET_QUERY_ASYNC", payload: query }),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
