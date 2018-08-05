import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import SmoothScroll from 'smooth-scroll';

// Routes
import MyRoutes from '../routes/routes';

// Components
import Nav from '../components/Nav';
import Footer from '../components/Footer';

// API
import { fetchPublishedDataList } from '../utils/api';

// CSS
import './App.css';

// Main App
class App extends React.Component {
  state = {
    dataList: null,
    showPurpose: true,
  };

  async componentDidMount() {
    const dataList = await fetchPublishedDataList();
    this.setState({ dataList });
  }

  updateDataList = dataList => this.setState({ dataList, showPurpose: false });

  updateShowPurpose = showPurpose => this.setState({ showPurpose });

  render() {
    const scroll = new SmoothScroll('a[href*="#"]', {
      speed: 1000,
      easing: 'easeInOutCubic',
    }); // works like this;
    const { dataList, showPurpose } = this.state;
    return (
      <Router>
        <div>
          <Nav />
          <main className="main">
            <MyRoutes
              dataList={dataList}
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
