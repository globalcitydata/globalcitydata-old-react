import React from 'react';
import { Router, Route, Switch } from 'react-router-dom'; // eslint-disable-line
import { arrayOf, objectOf, func, bool, string } from 'prop-types';
import { dataType } from '../utils/data';

// Views
import Home from '../views/Home/Home';
import Collaborators from '../views/Collaborators/Collaborators';
import Publications from '../views/Publications/Publications';
import Contact from '../views/Contact/Contact';
import DataSubmit from '../views/DataSubmit/DataSubmit';
import DataDetail from '../views/DataDetail/DataDetail';
import TestView from '../tests/TestView/TestView';
import NoMatch from '../views/NoMatch/NoMatch';

const MyRoutes = ({
  dataList,
  fullDataList,
  publications,
  showPurpose,
  updateDataList,
}) => (
  <Switch>
    <Route
      exact
      path="/"
      render={({ props }) => (
        <Home
          {...{ props }}
          dataList={dataList}
          fullDataList={fullDataList}
          showPurpose={showPurpose}
          updateDataList={updateDataList}
        />
      )}
    />
    <Route exact path="/collaborators" component={Collaborators} />
    <Route
      exact
      path="/publications"
      render={({ props }) => (
        <Publications {...{ props }} publications={publications} />
      )}
    />
    <Route exact path="/contact" component={Contact} />
    <Route
      exact
      path="/submit-data"
      render={({ props }) => <DataSubmit {...{ props }} />}
    />
    <Route
      path="/data/:dataURL"
      render={({ props, match }) => (
        <DataDetail {...{ props }} match={match} dataList={fullDataList} />
      )}
    />
    <Route exact path="/tests" component={TestView} />
    <Route component={NoMatch} />
  </Switch>
);

export default MyRoutes;

MyRoutes.propTypes = {
  dataList: arrayOf(dataType),
  fullDataList: arrayOf(dataType),
  publications: objectOf(string),
  showPurpose: bool.isRequired,
  updateDataList: func.isRequired,
};

MyRoutes.defaultProps = {
  dataList: null,
  fullDataList: null,
  publications: null,
};
