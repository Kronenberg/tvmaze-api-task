import React from 'react';
import PropTypes from 'prop-types';
import { sortNestedObjectsByPropertyName } from '../../helpers/sortByNestedObjects';

// @CSS
import './tv-shows-table.css';
const noAvatar = "http://www.pxleyes.com/images/contests/avatar%20wars/thumbs/avatar%20wars_4a5f5b501b376.jpg";

class TvShowsTable extends React.Component {
    
    static propTypes = {
        tvShowsList: PropTypes.object
    };

    constructor(props) {
        super(props);
        this.state = { tvShows: [] };
      }

    componentWillReceiveProps(nextProps) {
        this.setState({
            tvShows: nextProps.tvShowsList.shows
        });
    }

      sortBy = (key) => { 
          
        const { tvShows } = this.state;
       // I've made custom sorting function just for this task
        this.setState({ 
            tvShows: sortNestedObjectsByPropertyName(key, tvShows) 
        });
      }

  render() {
    const { tvShowsList } = this.props;
    const tvShowList = tvShowsList.success && this.state.tvShows ? this.state.tvShows
    .map(item => (
        <tr key={item.show.id}>
            <td>{item.show.image ? 
                <img src={item.show.image.original} alt="tv-show-avatar"/> : 
                <img src={noAvatar} alt="tv-show-avatar"/>}
            </td>
            <td>{item.show.name}</td>
            <td>{item.show.language}</td>
            <td>{item.show.genres.length > 0 ? item.show.genres.join(' ') : '...'}</td>
            <td>{item.show.status}</td>
            <td className="green">{item.show.rating.average || "..."}</td>
        </tr>
    )
) : <tr></tr>;
    return (
      <div  className="tv-shows-table">
        <table className="tv-shows-table">
            <thead>
            <tr>
                <th>Icon</th>
                <th onClick={() => this.sortBy('show.name')}>Name</th>
                <th>Language</th>
                <th>Genre</th>
                <th>Status</th>
                <th onClick={() => this.sortBy('show.rating.average')}>Rating</th>
            </tr>
            </thead>
            <tbody>
                {tvShowList}
            </tbody>
        </table>
        {  tvShowsList.pending ? <div>
            <h1>Loading...</h1>
        </div> : <div></div> }
        {  tvShowsList.success && this.state.tvShows.length === 0 ? <div>
            <h1>Nothing was found matching your request</h1>
        </div> : <div></div> }
      </div>
    );
  }
}

export default TvShowsTable;