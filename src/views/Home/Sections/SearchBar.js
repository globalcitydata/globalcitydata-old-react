import React from 'react';
import { Row, Input, Button } from 'react-materialize';
import { func, arrayOf } from 'prop-types';

import { dataType } from '../../../utils/data';
import { search } from '../../../utils/searchAndFilter';

// utils
import { scroll } from '../../../utils/scroll';

class SearchBar extends React.Component {
  state = {
    value: '',
  };

  handleChange = e => this.setState({ value: e.target.value });

  handleSubmit = e => {
    e.preventDefault();
    const { dataList, updateDataList } = this.props;
    const { value } = this.state;
    const newDataList = search(dataList, value);
    updateDataList(newDataList);
    this.setState({ value: '' });
    // scroll to results in dataList
    const anchor = document.querySelector('#dataList');
    scroll.animateScroll(anchor);
  };

  render() {
    const { value } = this.state;
    return (
      <section className="searchBar">
        <form onSubmit={this.handleSubmit}>
          <div className="searchBarWrapper">
            <Input
              s={12}
              m={10}
              label="Search for datasets, models and tutorials"
              name="value"
              value={value}
              onChange={this.handleChange}
            />
          </div>
        </form>
      </section>
    );
  }
}

export default SearchBar;

SearchBar.propTypes = {
  dataList: arrayOf(dataType),
  updateDataList: func.isRequired,
};

SearchBar.defaultProps = {
  dataList: null,
};
