import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// Routes
import MyRoutes from '../routes/routes';

// Components
import Nav from '../components/Nav';
import Footer from '../components/Footer';

// API
import { fetchDataList, fetchPublishedDataList, addData } from '../utils/api';

// CSS
import './App.css';

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
    const shownDataList = await fetchPublishedDataList();
    this.setState({
      dataList,
      shownDataList,
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
    const { shownDataList, showPurpose } = this.state;
    return (
      <Router>
        <div>
          <Nav />
          <main className="main">
            <MyRoutes
              dataList={shownDataList}
              updateDataList={this.updateShownDataList}
              showPurpose={showPurpose}
              onAddData={this.onAddData}
            />
          </main>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
