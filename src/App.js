import './styles/App.css';
import './styles/colorify.css';

import Navbar from './components/navbar';
// import UserLicence from './components/userLicence';
// import AddNewLicense from './components/addNewLicense';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    }
    this.licenseData = {
      name: '',
      license: '',
      qrCodeImage: '',
      urlInput: '',
    }

    this.buttons = [
      {
        name: 'Share',
        iconName: 'share',
        route: '/share',
        onClick: () => {
          console.log('Share');
        }
      },
      {
        name: 'Add',
        iconName: 'add',
        route: '/add',
        handleOpen: () => {
          this.handleOpen();
        }
      },
      {
        name: 'Saved',
        iconName: 'inventory_2',
        route: '/saved',
        onClick: () => {
          console.log('Saved');
        }
      },
    ]
    this.homeButton = {
      name: 'Home',
      iconName: 'home',
      route: '/',
      handleHome: () => {
        this.handleHome();
      }
    }
    this.handleHome = this.handleHome.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
  }

  handleHome() {
    if (this.state.isOpen) {
      this.setState({
        isOpen: false,
      });
    }
  }

  handleOpen() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return (
      <div className="App">
        <div className="mainContainer">
        <div className='content'>
          {/* <UserLicence /> */}
        </div>
          <nav>
            <Navbar
              buttons={this.buttons}
              homeButton={this.homeButton}
            />
          </nav>
        </div>
      </div>
    );
  }
}


export default App;
