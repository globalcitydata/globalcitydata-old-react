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
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <form>
          <Row>
            <Input s={10} label="Search for datasets and models" name="value" value={this.state.value} onChange={this.handleChange} />
            <Button s={2} waves="light" onClick={this.handleSubmit}>Search</Button>
          </Row>
        </form>
      </div>
    );
  }
}

export default QueryBar;
