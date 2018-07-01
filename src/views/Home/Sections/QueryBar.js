import React from 'react';
import Select, { components } from 'react-select';
import {Row, Input} from 'react-materialize';

class QueryBar extends React.Component {
  state = {};

  render() {
    const options = [
      { value: 'chocolate', label: 'Chocolate' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'vanilla', label: 'Vanilla' }
    ];

    return (
      // <div>
      //   <Select isMulti closeMenuOnSelect={false} options={options} placeholder="Content Type" />
      //   <Select isMulti closeMenuOnSelect={false} options={options} placeholder="Parameters" />
      //   <Select isMulti closeMenuOnSelect={false} options={options} placeholder="Outcomes" />
      //   <Select isMulti closeMenuOnSelect={false} options={options} placeholder="Spatial Scales" />
      //   <Select isMulti closeMenuOnSelect={false} options={options} placeholder="Temporal Scales" />
      //   <Select isMulti closeMenuOnSelect={false} options={options} placeholder="World Region" />
      // </div>
      <Row>
        <Input s={12} type='select' label="Filter for datasets and models">
          <option value='1'>Option 1</option>
          <option value='2'>Option 2</option>
          <option value='3'>Option 3</option>
        </Input>
      </Row>
    );
  }
}

export default QueryBar;
