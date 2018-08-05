import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { arrayOf, func, bool, object } from 'prop-types';

// Views
import Home from '../views/Home/Home';
import Collaborators from '../views/Collaborators/Collaborators';
import Publications from '../views/Publications/Publications';
import Contact from '../views/Contact/Contact';
import DataSubmit from '../views/DataSubmit/DataSubmit';
import DataDetail from '../views/DataDetail/DataDetail';
import TestView from '../tests/TestView/TestView';
import NoMatch from '../views/NoMatch/NoMatch';

const MyRoutes = ({ dataList, showPurpose, updateDataList }) => (
  <Switch>
    <Route
      exact
      path="/"
      render={({ props }) => (
        <Home
          {...{ props }}
          dataList={dataList}
          showPurpose={showPurpose}
          updateDataList={updateDataList}
        />
      )}
    />
    <Route exact path="/collaborators" component={Collaborators} />
    <Route exact path="/publications" component={Publications} />
    <Route exact path="/contact" component={Contact} />
    <Route
      exact
      path="/submit-data"
      render={({ props }) => <DataSubmit {...{ props }} />}
    />
    <Route
      path="/data/:dataURL"
      render={({ props, match }) => (
        <DataDetail {...{ props }} dataList={dataList} match={match} />
      )}
    />
    <Route exact path="/tests" component={TestView} />
    <Route component={NoMatch} />
  </Switch>
);

export default MyRoutes;

MyRoutes.propTypes = {
  dataList: arrayOf(object),
  showPurpose: bool.isRequired,
  updateDataList: func.isRequired,
  onAddData: func.isRequired,
};
