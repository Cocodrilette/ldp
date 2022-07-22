import './styles/App.css';
import './styles/colorify.css';

import Navbar from './components/navbar';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.buttons = [
      {
        name: 'Share',
        iconName: 'share',
        route: '/share',
        handleClick: () => {
          console.log('Share');
        }
      },
      {
        name: 'Add',
        iconName: 'add',
        route: '/add',
        handleClick: () => {
          console.log('Add');
        }
      },
      {
        name: 'Saved',
        iconName: 'inventory_2',
        route: '/saved',
        handleClick: () => {
          console.log('Saved');
        }
      },
    ]
    this.homeButton = {
      name: 'Home',
      iconName: 'home',
      route: '/',
      handleClick: () => {
        console.log('Home');
      }
    }
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
