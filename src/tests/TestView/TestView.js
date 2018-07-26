import React from 'react';
import { queryData } from '../../utils/api';
import { Dropdown, Button, Input, Row, Col } from 'react-materialize';

const handleClick = async () => {
  const query = {
    parameters: ['environment', 'infrastructure'],
    type: ['dataset'],
  };
  const dataList = await queryData(query);
  console.log('dataList', dataList);
};

const handleDropdown = e => console.log(e.target);

const TestView = () => (
  <div className="container">
    <h1>I'm a development page for testing.</h1>
    <button onClick={handleClick} type="submit">
      Submit
    </button>
    <br />
    <div className="dropdownContainer">
      <Row>
        <Col>
          <Dropdown trigger={<Button onClick={handleDropdown}>Content Type</Button>}>
            <Row className="queryDropdownOptions">
              <Input s={12} name='group1' type='checkbox' value='red' label='Red' />
              <Input s={12} name='group1' type='checkbox' value='yellow' label='Yellow' defaultValue='checked' />
            </Row>
          </Dropdown>
        </Col>

        <Col>
          <Dropdown trigger={<Button onClick={handleDropdown}>Parameters</Button>}>
            <Row className="queryDropdownOptions">
              <Input s={12} name='group1' type='checkbox' value='red' label='Red' />
              <Input s={12} name='group1' type='checkbox' value='yellow' label='Yellow' defaultValue='checked' />
            </Row>
          </Dropdown>
        </Col>

        <Col>
          <Dropdown trigger={<Button onClick={handleDropdown}>Outcomes</Button>}>
            <Row className="queryDropdownOptions">
              <Input s={12} name='group1' type='checkbox' value='red' label='Red' />
              <Input s={12} name='group1' type='checkbox' value='yellow' label='Yellow' defaultValue='checked' />
            </Row>
          </Dropdown>
        </Col>

        <Col>
          <Dropdown trigger={<Button onClick={handleDropdown}>Spatial Scales</Button>}>
            <Row className="queryDropdownOptions">
              <Input s={12} name='group1' type='checkbox' value='red' label='Red' />
              <Input s={12} name='group1' type='checkbox' value='yellow' label='Yellow' defaultValue='checked' />
            </Row>
          </Dropdown>
        </Col>

        <Col>
          <Dropdown trigger={<Button onClick={handleDropdown}>Temporal Scales</Button>}>
            <Row className="queryDropdownOptions">
              <Input s={12} name='group1' type='checkbox' value='red' label='Reddddddddd dasdf sd' />
              <Input s={12} name='group1' type='checkbox' value='yellow' label='Yellow' defaultValue='checked' />
            </Row>
          </Dropdown>
        </Col>

        <Col>
          <Dropdown trigger={<Button onClick={handleDropdown}>World Regions</Button>}>
            <Row className="queryDropdownOptions">
              <Input s={12} name='group1' type='checkbox' value='red' label='Red' />
              <Input s={12} name='group1' type='checkbox' value='yellow' label='Yellow' defaultValue='checked' />
            </Row>
          </Dropdown>
        </Col>

        <Col>
          <Button className="querySearch">Search</Button>
        </Col>

      </Row>
    </div>
  </div>
);

export default TestView;
