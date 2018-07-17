import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import Nav from '../components/Nav';
import Footer from '../components/Footer';

// Views
import Home from './Home/Home';
import Collaborators from './Collaborators/Collaborators';
import Publications from './Publications/Publications';
import Contact from './Contact/Contact';
import DataSubmit from './DataSubmit/DataSubmit';
import DataDetail from './DataDetail/DataDetail';

// API
import { fetchDataList, addData } from '../utils/api';

// CSS
import './App.css';
import DataList from './Home/Sections/DataList';

// Main App
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataList: null,
      shownDataList: null,
      showPurpose: true,
    };
    this.updateDataList = this.updateDataList.bind(this);
    this.updateShownDataList = this.updateShownDataList.bind(this);
    this.onAddData = this.onAddData.bind(this);
  }

  async componentDidMount() {
    const dataList = await fetchDataList();
    this.setState({
      dataList,
      shownDataList: dataList,
    });
  }

  async onAddData(data) {
    await addData(data);
    const { dataList } = this.state;
    this.updateDataList([data, ...dataList]);
  }

  updateDataList(dataList) {
    this.setState({
      dataList,
    });
  }

  updateShownDataList(shownDataList) {
    this.setState({
      shownDataList,
      showPurpose: false,
    });
  }

  render() {
    const { dataList, shownDataList, showPurpose } = this.state;
    return (
      <Router>
        <div>
          <Nav />
          <main className="main">
            <Switch>
              <Route
                exact
                path="/"
                render={({ props }) => (
                  <Home
                    {...{ props }}
                    dataList={dataList}
                    shownDataList={shownDataList}
                    updateDataList={this.updateShownDataList}
                    showPurpose={showPurpose}
                  />
                )}
              />
              <Route exact path="/collaborators" component={Collaborators} />
              <Route exact path="/publications" component={Publications} />
              <Route exact path="/contact" component={Contact} />
              <Route
                exact
                path="/submit-data"
                render={({ props }) => (
                  <DataSubmit {...{ props }} onAddData={this.onAddData} />
                )}
              />
              <Route path="/data/:dataURL" render={({ props, match }) => (
                <DataDetail {...{ props }} dataList={dataList} match={match}
                />
              )} />
              <Route render={() => <div className='container center'><p>404</p></div>} />
            </Switch>
          </main>

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
