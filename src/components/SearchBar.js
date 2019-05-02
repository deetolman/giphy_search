import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = { term: '' };
  }
  onInputChange(term) {
    this.setState({ term });
    this.props.onTermChange(term);
  }
  render() {
    return (
      <div className="search">
        <input onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }
}
SearchBar.propTypes = {
  onTermChange: PropTypes.func.isRequired
};

export default SearchBar;
