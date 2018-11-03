import React from 'react';
import { Row, Input, Button, Icon } from 'react-materialize';
import { func, arrayOf } from 'prop-types';

import { dataType } from '../../../utils/data';
import { search } from '../../../utils/searchAndFilter';
import { query } from '../../../utils/searchAndFilter';

// utils
import { scroll } from '../../../utils/scroll';

// Tags
import { tags, tagQuery } from '../../../utils/tags';

class SearchBar extends React.Component {
  state = {
    value: '',
    selectedTags: tagQuery,
  };

  handleSearch = e => {
    e.preventDefault();
    const { selectedTags } = this.state;
    const { dataList, updateDataList } = this.props;
    const newDataList = query(dataList, selectedTags);
    updateDataList(newDataList);
    this.setState({ selectedTags: tagQuery });
    // scroll to results in dataList
    const anchor = document.querySelector('#dataList');
    scroll.animateScroll(anchor);
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
      <Row >
      <section className="searchBar">
        <form onSubmit={this.handleSubmit}>
          <div className="searchBarWrapper">
            <Input
              s={12}
              m={10}
              label="Search for datasets, models and tutorials by typing here or filtering below"
              name="value"
              value={value}
              onChange={this.handleChange}><Icon>search</Icon></Input>
             
              <a data-scroll href="#dataList">
              <Button className="querySearch" onClick={this.handleSubmit}>
                Search
              </Button>
            </a>
          </div>
        </form>
      </section>
      </Row>
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
