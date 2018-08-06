import React from 'react';
import { Row, Input, Button, Col, Dropdown } from 'react-materialize';
import ReactTooltip from 'react-tooltip';
import $ from 'jquery';
import { func, arrayOf } from 'prop-types';
import { dataType } from '../../../utils/data';
import { query } from '../../../utils/searchAndFilter';

// Tags
import { tags, tagQuery } from '../../../utils/tags';

const QueryDropdown = ({ tag, handleChange }) => {
  const { label, options } = tag;
  return (
    <Col s={12} m={4} l={2} className="myDropdown">
      <Dropdown
        trigger={
          <Button data-tip data-for={label}>
            {label}
          </Button>
        }
      >
        <Row className="queryDropdownOptions">
          {options.map(option => (
            <DropdownInput
              key={option.value}
              option={option}
              handleChange={handleChange}
            />
          ))}
        </Row>
      </Dropdown>
    </Col>
  );
};

const DropdownInput = ({ option, handleChange }) => {
  const { value, label, group } = option;
  return (
    <Input
      s={12}
      name={group}
      type="checkbox"
      checked={false}
      value={value}
      label={label}
      onChange={handleChange}
    />
  );
};

class QueryBar extends React.Component {
  state = { selectedTags: tagQuery };

  handleSubmit = e => {
    e.preventDefault();
    const { selectedTags } = this.state;
    const { dataList, updateDataList } = this.props;
    const newDataList = query(dataList, selectedTags);
    updateDataList(newDataList);
    this.setState({ selectedTags: tagQuery });
  };

  handleChange = e => {
    const { name: group, value } = e.target;
    const { selectedTags } = this.state;
    const i = selectedTags[group].indexOf(value);
    if (i !== -1) {
      selectedTags[group].splice(i, 1);
    } else {
      selectedTags[group].push(value);
    }
    this.setState({ selectedTags });
  };

  render() {
    // $('.dropdown-button + .dropdown-content').on('click', e => {
    //   e.stopPropagation();
    // });
    return (
      <div className="queryBarContainer">
        {/* <ParameterTooltip />
        <SpatialScalesTooltip /> */}
        <Row className="blue flex">
          <Col s={12} m={10} l={11}>
            <Row className="flex">
              {tags.map(tag => (
                <QueryDropdown
                  key={tag.label}
                  tag={tag}
                  handleChange={this.handleChange}
                />
              ))}
            </Row>
          </Col>
          <Col s={12} m={2} l={1}>
            <Button className="querySearch" onClick={this.handleSubmit}>
              Search
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default QueryBar;

QueryBar.propTypes = {
  dataList: arrayOf(dataType),
  updateDataList: func.isRequired,
};

QueryBar.defaultProps = {
  dataList: null,
};

// const ParameterTooltip = () => (
//   <ReactTooltip id="Parameters" effect="solid">
//     <ul>
//       <li>
//         - Social & economic (population demographics, economy, households,
//         policy, etc)
//       </li>
//       <li>
//         - Environmental characteristics (soil, temperature, vegetation, etc)
//       </li>
//       <li>
//         - Infrastructure & food supply (Supply of energy, water, transportation,
//         etc)
//       </li>
//       <li>- Urban form (density, spatial layout)</li>
//     </ul>
//   </ReactTooltip>
// );

// const SpatialScalesTooltip = () => (
//   <ReactTooltip id="Spatial Scales" effect="solid">
//     <ul>
//       <li>
//         - Intra-urban (fine spatial detail within a city, census tract, block
//         group or finer)
//       </li>
//       <li>- Whole City (aggregate data for one or more cities)</li>
//       <li>
//         - National Urban (aligned data for all cities or urban areas in a
//         country)
//       </li>
//     </ul>
//   </ReactTooltip>
// );
