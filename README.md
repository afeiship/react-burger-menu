# react-burger-menu
> Burger menu for react.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @jswork/react-burger-menu
```

## properties
| Name      | Type    | Required | Default | Description                           |
| --------- | ------- | -------- | ------- | ------------------------------------- |
| className | string  | false    | -       | The extended className for component. |
| value     | bool    | false    | false   | The changed value.                    |
| onChange  | func    | false    | noop    | The change handler.                   |
| options   | object  | false    | -       | Drawer options.                       |
| trigger   | func    | false    | noop    | The trigger element.                  |
| extra     | element | false    | -       | The extra element.                    |


## usage
1. import css
  ```scss
  @import "~@jswork/wsui-backdrop";
  @import "~@jswork/wsui-drawer";
  @import "~@jswork/react-drawer/dist/style.scss";
  @import "~@jswork/react-burger-menu/dist/style.scss";

  // customize your styles:
  $react-burger-menu-options: ()
  ```
2. import js
  ```js
  import ReactDemokit from '@jswork/react-demokit';
  import React from 'react';
  import ReactDOM from 'react-dom';
  import ReactBurgerMenu from '@jswork/react-burger-menu';
  import './assets/style.scss';

  class App extends React.Component {
    render() {
      return (
        <ReactDemokit
          className="p-3 app-container"
          url="https://github.com/afeiship/react-burger-menu">
          <ReactBurgerMenu
            trigger={(props) => {
              return (
                <button className="button" {...props}>
                  CustomizeTrigger
                </button>
              );
            }}
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

  ```

## documentation
- https://afeiship.github.io/react-burger-menu/


## license
Code released under [the MIT license](https://github.com/afeiship/react-burger-menu/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/react-burger-menu
[version-url]: https://npmjs.org/package/@jswork/react-burger-menu

[license-image]: https://img.shields.io/npm/l/@jswork/react-burger-menu
[license-url]: https://github.com/afeiship/react-burger-menu/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/react-burger-menu
[size-url]: https://github.com/afeiship/react-burger-menu/blob/master/dist/react-burger-menu.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/react-burger-menu
[download-url]: https://www.npmjs.com/package/@jswork/react-burger-menu
