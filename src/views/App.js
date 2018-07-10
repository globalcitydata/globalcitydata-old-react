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
import { fetchDataList, addData } from '../utils/api';

// CSS
import './App.css';

// Main App
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataList: null,
      shownDataList: null,
      showPurpose: true
    };
    this.updateDataList = this.updateDataList.bind(this);
    this.updateShownDataList = this.updateShownDataList.bind(this);
  }
  

  async componentDidMount() {
    const dataList = await fetchDataList();
    this.setState({
      dataList: dataList,
      shownDataList: dataList
    })
  }

  async onAddData(data) {
    await addData(data);
    const { dataList } = this.state;
    this.updateDataList([data, ...dataList]);
  }

  updateDataList(dataList) {
    this.setState({
      dataList
    });
  } 

  updateShownDataList(shownDataList) {
    this.setState({
      shownDataList: shownDataList,
      showPurpose: false
    });
  }

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <main className="main">
            <Route
              exact
              path="/"
              render={({ props }) => (
                <Home {...{ props }} 
                dataList={this.state.dataList} 
                shownDataList={this.state.shownDataList} 
                updateDataList={this.updateShownDataList}
                showPurpose={this.state.showPurpose}/>
              )}
            />
            <Route exact path="/collaborators" component={Collaborators} />
            <Route exact path="/publications" component={Publications} />
            <Route exact path="/contact" component={Contact} />
            <Route
              exact
              path="/submit-data"
              render={({ props }) => (
                <DataSubmit {...{ props }} onAddData={this.addData} />
              )}
            />
          </main>

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
