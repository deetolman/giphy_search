import React from 'react';

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = { term:'' }
  }
  onChange(term) {
    this.setState({term});
    this.props.onTermChange(term);
  }
  render() {
    return (
      <div className="search">
        <input onChange={event => this.onChange(event.target.value)} />
      </div>
    );
  }
}

export default SearchBar;
