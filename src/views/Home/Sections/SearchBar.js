import React from 'react';

class QueryBar extends React.Component {
  state = {
    value: ''
  };

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleSubmit(e) {
    const { value } = this.state;
    alert(`Something was submitted: ${value}`);
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Search:
            <input type="text" value="search for datasets and models" onChange={this.handleChange} />
          </label>
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default QueryBar;
