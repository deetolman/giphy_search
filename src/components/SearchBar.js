import React from 'react';
import PropTypes from 'prop-types';
import Styles from '../index.css';

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
      <div className={Styles.Search}>
        <input type="text" placeholder="Keyword search.." onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }
}
SearchBar.propTypes = {
  onTermChange: PropTypes.func.isRequired
};

export default SearchBar;
