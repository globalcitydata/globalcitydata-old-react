import React from 'react';
import { Row, Input, Button, Col, Dropdown } from 'react-materialize';
import ReactTooltip from 'react-tooltip';
import $ from 'jquery';
import { tagState } from '../../../utils/data';
import { tags } from '../../../utils/tags';

const QueryDropdown = ({ tag }) => {
  const { label, options } = tag;
  return (
    <Col s={12} m={4} l={2} className="myDropdown">
      <Dropdown
        trigger={
          <Button data-tip data-for={label}>
            {' '}
            {label}
          </Button>
        }
      >
        <Row className="queryDropdownOptions">
          {options.map(option => (
            <DropdownInput key={option.value} option={option} />
          ))}
        </Row>
      </Dropdown>
    </Col>
  );
};

const DropdownInput = ({ option }) => {
  const { value, label, group } = option;
  return (
    <Input s={12} name={group} type="checkbox" value={value} label={label} />
  );
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

class QueryBar extends React.Component {
  state = tagState;

  // handleChange = selectedOptions => {
  //   this.setState({
  //     selectedOptions,
  //   });
  // };

  // handleSubmit = e => {
  //   e.preventDefault();
  //   const value = this.state;
  //   const { selectedOptions } = this.state;
  //   const { dataList, updateDataList } = this.props;
  //   for (const tag of selectedOptions) {
  //     value[tag.group][tag.value] = true;
  //   }
  //   let filteredData;
  //   if (selectedOptions.length == 0) filteredData = dataList;
  //   else {
  //     filteredData = query(dataList, value);
  //     if (!filteredData) filteredData = [];
  //   }
  //   updateDataList(filteredData);
  // };

  render() {
    $('.dropdown-button + .dropdown-content').on('click', e => {
      e.stopPropagation();
    });
    return (
      <div className="queryBarContainer">
        {/* <ParameterTooltip />
        <SpatialScalesTooltip /> */}
        <Row className="blue flex">
          <Col s={12} m={10} l={11}>
            <Row className="flex">
              {tags.map(tag => <QueryDropdown key={tag.label} tag={tag} />)}
            </Row>
          </Col>
          <Col s={12} m={2} l={1}>
            <Button className="querySearch">Search</Button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default QueryBar;
