import React from 'react';
import Select, { components } from 'react-select';
import { Row, Input, Button, Col } from 'react-materialize';

class QueryBar extends React.Component {
  state = {
    selectedOptions: []
  };

  handleChange = selectedOptions => {
    this.setState({
      selectedOptions
    });
  };

  handleSubmit = e => {
    const { selectedOptions } = this.state;
    alert(`Something was submitted: ${selectedOptions}`);
    this.setState({  selectedOptions: []  });
    e.preventDefault();
  };

  render() {
    const colourOptions = [
      { value: 'ocean', label: 'Ocean', color: '#00B8D9' },
      {
        value: 'blue',
        label: 'Blue',
        color: '#0052CC',
        disabled: true
      },
      { value: 'purple', label: 'Purple', color: '#5243AA' },
      { value: 'red', label: 'Red', color: '#FF5630' },
      { value: 'orange', label: 'Orange', color: '#FF8B00' },
      { value: 'yellow', label: 'Yellow', color: '#FFC400' },
      { value: 'green', label: 'Green', color: '#36B37E' },
      { value: 'forest', label: 'Forest', color: '#00875A' },
      { value: 'slate', label: 'Slate', color: '#253858' },
      { value: 'silver', label: 'Silver', color: '#666666' }
    ];

    const flavourOptions = [
      { value: 'vanilla', label: 'Vanilla', rating: 'safe' },
      { value: 'chocolate', label: 'Chocolate', rating: 'good' },
      { value: 'strawberry', label: 'Strawberry', rating: 'wild' },
      { value: 'salted-caramel', label: 'Salted Caramel', rating: 'crazy' }
    ];

    const groupedOptions = [
      {
        label: 'Colours',
        options: colourOptions
      },
      {
        label: 'Flavours',
        options: flavourOptions
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
