import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Components
import Nav from '../components/Nav';
import Footer from '../components/Footer';

// Views
import Home from './Home/Home';
import Collaborators from './Collaborators/Collaborators';
import Publications from './Publications/Publications';
import Contact from './Contact/Contact';
import DataSubmit from './DataSubmit/DataSubmit';

// API
import { fetchDataList } from '../utils/api';

// CSS
import './App.css';

// Main App
class App extends React.Component {
  state = {
    dataList: null
  };

  async componentDidMount() {
    const dataList = await fetchDataList();
    this.updateDataList(dataList);
  }

  updateDataList(dataList) {
    this.setState({
      dataList
    });
  }

  render() {
    return (
      <Router>
        <div>
          <Nav />
          {/* Main Page */}
          <Route
            exact
            path="/"
            render={({ props }) => (
              <Home
                {...{ props }}
                dataList={this.state.dataList}
                updateDataList={this.state.dataList}
              />
            )}
          />
          <Route exact path="/collaborators" component={Collaborators} />
          <Route exact path="/publications" component={Publications} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/submit-data" component={DataSubmit} />
          {/* Footer */}
          <hr />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
