import React from 'react';
import Select, { components } from 'react-select';
import { Row, Input, Button, Col } from 'react-materialize';
import { tagState } from '../../../utils/data';
import { query } from '../../../utils/searchAndFilter'

class QueryBar extends React.Component {
  state = tagState;

  handleChange = selectedOptions => {
    this.setState({
      selectedOptions
    });
  };

  handleSubmit = e => {
    const value = this.state;
    const { selectedOptions } = this.state;
    const { dataList, updateDataList } = this.props;

    for (let tag of selectedOptions) {
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

    const typeOptions = [
      { value: 'dataset', label: 'Dataset', group: 'contentType' },
      { value: 'model', label: 'Modal', group: 'contentType' },
      { value: 'tutorial', label: 'Tutorial', group: 'contentType' },
    ];

    const outcomeOptions = [
      { value: 'environmentalImpacts', label: 'Environmental Impacts', group: 'outcomes' },
      { value: 'equity', label: 'Equity', group: 'outcomes' },
      { value: 'health', label: 'Health', group: 'outcomes' },
      { value: 'livability', label: 'Livability', group: 'outcomes' },
      { value: 'wellBeing', label: 'Well Being', group: 'outcomes' },
    ];

    const parameterOptions = [
      { value: 'social', label: 'Social', group: 'parameters' },
      { value: 'environment', label: 'Environment', group: 'parameters' },
      { value: 'infrastructure', label: 'Infrastructure', group: 'parameters' },
      { value: 'urbanDesign', label: 'Urban Design', group: 'parameters' },
    ];

    const spatialOptions = [
      { value: 'intraUrban', label: 'Intra Urban', group: 'spatialScales' },
      { value: 'wholeCity', label: 'Whole City', group: 'spatialScales' },
      { value: 'nationalUrban', label: 'National Urban', group: 'spatialScales' },
    ];

    const temporalOptions = [
      { value: 'singleYearSnapshot', label: 'Single Year Snapshot', group: 'temporalScales' },
      { value: 'timeSeries', label: 'Time Series', group: 'temporalScales' },
      { value: 'futuresModeling', label: 'Futures Modeling', group: 'temporalScales' },
    ];

    const worldOptions = [
      { value: 'northAmerica', label: 'North America', group: 'worldRegions' },
      { value: 'southAmerica', label: 'South America', group: 'worldRegions' },
      { value: 'europe', label: 'Europe', group: 'worldRegions' },
      { value: 'africa', label: 'Africa', group: 'worldRegions' },
      { value: 'asia', label: 'Asia', group: 'worldRegions' },
    ]; 

    const groupedOptions = [
      {
        label: 'Content Type',
        options: typeOptions
      },
      {
        label: 'Outcomes',
        options: outcomeOptions
      },
      {
        label: 'Parameters',
        options: parameterOptions
      },
      {
        label: 'Spatial Scales',
        options: spatialOptions
      },
      {
        label: 'Temporal Scales',
        options: temporalOptions
      },
      {
        label: 'World Regions',
        options: worldOptions
      }
    ];

    // Clearing the selected options
    const CustomClearText = () => 'clear all';
    const ClearIndicator = (props) => {
      const {
        children = <CustomClearText />,
        getStyles,
        innerProps: { ref, ...restInnerProps }
      } = props;
      return (
        <div
          {...restInnerProps}
          ref={ref}
          style={getStyles('clearIndicator', props)}
        >
          <div style={{ padding: '0px 5px' }}>{children}</div>
        </div>
      );
    };
    const ClearIndicatorStyles = (base, state) => ({
      ...base,
      cursor: 'pointer',
      color: state.isFocused ? 'blue' : 'black'
    });
    // End clearing the selected options

    return (
      <div className="queryBar">
        <Row>
          <Col s={12} m={10}>
            <Select
              closeMenuOnSelect={false}
              components={{ ClearIndicator }}
              styles={{ clearIndicator: ClearIndicatorStyles }}
              isMulti
              options={groupedOptions}
              onChange={this.handleChange}
            />
          </Col>
          <Button s={12} m={2} waves="light" onClick={this.handleSubmit}>
            Filter
          </Button>
        </Row>
      </div>
    );
  }
}

export default QueryBar;
