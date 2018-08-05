import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import SmoothScroll from 'smooth-scroll';

// Routes
import MyRoutes from '../routes/routes';

// Components
import Nav from '../components/Nav';
import Footer from '../components/Footer';

// Utils
import { fetchPublishedDataList } from '../utils/api';
import { getPublications } from '../utils/searchAndFilter';

// CSS
import './App.css';

// Main App
class App extends React.Component {
  state = {
    dataList: null,
    shownDataList: null,
    publications: null,
    showPurpose: true,
  };

  async componentDidMount() {
    const dataList = await fetchPublishedDataList();
    this.setState({ dataList, shownDataList: dataList });
    const publications = getPublications(dataList);
    this.setState({ publications });
  }

  updateDataList = shownDataList => {
    this.setState({ shownDataList, showPurpose: false });
  };

  render() {
    const scroll = new SmoothScroll('a[href*="#"]', { // eslint-disable-line
      speed: 1000,
      easing: 'easeInOutCubic',
    }); // this is picked up by smooth-scroll package
    const { dataList, shownDataList, publications, showPurpose } = this.state;
    return (
      <Router>
        <div>
          <Nav />
          <main className="main">
            <MyRoutes
              dataList={shownDataList}
              fullDataList={dataList}
              publications={publications}
              showPurpose={showPurpose}
              updateDataList={this.updateDataList}
            />
          </main>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
