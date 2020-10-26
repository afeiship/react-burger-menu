import ReactDemokit from '@feizheng/react-demokit';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactBurgerMenu from '../src/main';
import './assets/style.scss';

class App extends React.Component {
  render() {
    return (
      <ReactDemokit
        className="p-3 app-container"
        url="https://github.com/afeiship/react-burger-menu">
        <ReactBurgerMenu
          onChange={(e) => {
            console.log('status changed:', e.target.value);
          }}>
          <p>
            道可道，非常道；名可名，非常名。 无名，天地之始，有名，万物之母。
          </p>
          <p>故常无欲，以观其妙，常有欲，以观其徼。</p>
          <p>此两者，同出而异名，同谓之玄，玄之又玄，众妙之门。</p>
        </ReactBurgerMenu>
      </ReactDemokit>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
