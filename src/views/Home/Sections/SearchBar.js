import React from 'react';
import { Row, Input, Button } from 'react-materialize';

class QueryBar extends React.Component {
  state = {
    value: ''
  };

  handleChange = e => {
    this.setState({ value: e.target.value });
  }

  handleSubmit = e => {
    const { value } = this.state;
    alert(`Something was submitted: ${value}`);
    this.setState({ value: '' });
    e.preventDefault();
  }

  render() {
    return (
      <section className="searchBar">
        <form onSubmit={this.handleSubmit}>
          <div className="searchBarWrapper">
            <Input s={12} m={10} label="Search for datasets, models and tutorials" name="value" value={this.state.value} onChange={this.handleChange} />

          </div>
        </form>
      </section>
    );
  }
}

export default QueryBar;
