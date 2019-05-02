import React from 'react';
import ReactDOM from 'react-dom';
import GifList from './components/GifList';
import SearchBar from './components/SearchBar';
import request from 'superagent';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      gifs: []
    };
    this.handleTermChange = this.handleTermChange.bind(this);
  }
  handleTermChange = (term) => {
    const url = `http://api.giphy.com/v1/gifs/search?q=${term.replace(/\s/g, '+')}&api_key=PbaFtE6wuzwt1CxQ1PQdxXFj8XSb170b`;
    request.get(url, (err, res) => {
      this.setState({ gifs: res.body.data });
    });
  };
  render() {
    return (
      <div>
        <SearchBar onTermChange={this.handleTermChange} />
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}
export default App;
ReactDOM.render(<App />, document.getElementById('app'));
