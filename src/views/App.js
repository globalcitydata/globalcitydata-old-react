import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import {fetchDataList} from '../utils/api';

// Components
import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer';

// Views
import Home from './Home/Home';
import Collaborators from './Collaborators/Collaborators';
import Publications from './Publications/Publications';
import Contact from './Contact/Contact';

// Main App
class App extends React.Component {
  state = {
    dataList: null,
  };

  componentDidMount() {
    const dataList = fetchDataList();
    this.updateDataList(dataList);
  }

  updateDataList(dataList) {
    this.setState({
      dataList: dataList,
    });
  }

  render() {
    return (
      <Router>
        <div>
          {/* Nav */}
          <Nav />
          <hr />

          {/* Main Page */}
          <Route
            exact
            path="/"
            render={props => (
              <Home
                {...props}
                dataList={this.state.dataList}
                updateDataList={this.state.dataList}
              />
            )}
          />
          <Route exact path="/collaborators" component={Collaborators} />
          <Route exact path="/publications" component={Publications} />
          <Route exact path="/contact" component={Contact} />

          {/* Footer */}
          <hr />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
