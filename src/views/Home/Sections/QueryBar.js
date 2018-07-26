import React from 'react';
import { Row, Input, Button, Col, Dropdown } from 'react-materialize';
import { tagState } from '../../../utils/data';
import { query } from '../../../utils/searchAndFilter';
import { tags } from '../../../utils/tags';

class QueryBar extends React.Component {
  state = tagState;

  handleChange = selectedOptions => {
    this.setState({
      selectedOptions,
    });
  };

  handleDropdown = e => console.log(e.target);

  handleSubmit = e => {
    const value = this.state;
    const { selectedOptions } = this.state;
    const { dataList, updateDataList } = this.props;

    for (const tag of selectedOptions) {
      value[tag.group][tag.value] = true;
    }

    let filteredData;
    if (selectedOptions.length == 0) filteredData = dataList;
    else {
      filteredData = query(dataList, value);
      if (!filteredData) filteredData = [];
    }

    updateDataList(filteredData);

    // should clear query state at this point
    e.preventDefault();
  };
  render() {


    console.log(tags);

    return (
      <div className="dropdownContainer">
        <Row>
          <Col>
            <Dropdown trigger={<Button onClick={this.handleDropdown}>Content Type</Button>}>
              <Row className="queryDropdownOptions">
                <Input s={12} name='group1' type='checkbox' value='red' label='Red' />
                <Input s={12} name='group1' type='checkbox' value='yellow' label='Yellow' defaultValue='checked' />
              </Row>
            </Dropdown>
          </Col>

          <Col>
            <Dropdown trigger={<Button onClick={this.handleDropdown}>Parameters</Button>}>
              <Row className="queryDropdownOptions">
                <Input s={12} name='group1' type='checkbox' value='red' label='Red' />
                <Input s={12} name='group1' type='checkbox' value='yellow' label='Yellow' defaultValue='checked' />
              </Row>
            </Dropdown>
          </Col>

          <Col>
            <Dropdown trigger={<Button onClick={this.handleDropdown}>Outcomes</Button>}>
              <Row className="queryDropdownOptions">
                <Input s={12} name='group1' type='checkbox' value='red' label='Red' />
                <Input s={12} name='group1' type='checkbox' value='yellow' label='Yellow' defaultValue='checked' />
              </Row>
            </Dropdown>
          </Col>

          <Col>
            <Dropdown trigger={<Button onClick={this.handleDropdown}>Spatial Scales</Button>}>
              <Row className="queryDropdownOptions">
                <Input s={12} name='group1' type='checkbox' value='red' label='Red' />
                <Input s={12} name='group1' type='checkbox' value='yellow' label='Yellow' defaultValue='checked' />
              </Row>
            </Dropdown>
          </Col>

          <Col>
            <Dropdown trigger={<Button onClick={this.handleDropdown}>Temporal Scales</Button>}>
              <Row className="queryDropdownOptions">
                <Input s={12} name='group1' type='checkbox' value='red' label='Reddddddddd dasdf sd' />
                <Input s={12} name='group1' type='checkbox' value='yellow' label='Yellow' defaultValue='checked' />
              </Row>
            </Dropdown>
          </Col>

          <Col>
            <Dropdown trigger={<Button onClick={this.handleDropdown}>World Regions</Button>}>
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
      // <div className="queryBar">
      //   <Row>
      //     <Col s={12} m={10}>
      //       <Select
      //         closeMenuOnSelect={false}
      //         components={{ ClearIndicator }}
      //         styles={{ clearIndicator: ClearIndicatorStyles }}
      //         isMulti
      //         options={groupedOptions}
      //         onChange={this.handleChange}
      //       />
      //     </Col>
      //     <Button s={12} m={2} waves="light" onClick={this.handleSubmit}>
      //       Filter
      //     </Button>
      //   </Row>
      // </div>
    );
  }
}

export default QueryBar;
