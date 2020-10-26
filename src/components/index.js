import noop from '@feizheng/noop';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ReactDrawer from '@feizheng/react-drawer';

const CLASS_NAME = 'react-burger-menu';

export default class ReactBurgerMenu extends Component {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static propTypes = {
    /**
     * The extended className for component.
     */
    className: PropTypes.string,
    /**
     * The changed value.
     */
    value: PropTypes.bool,
    /**
     * The change handler.
     */
    onChange: PropTypes.func,
    /**
     * Drawer options.
     */
    options: PropTypes.object
  };

  static defaultProps = {
    value: false,
    onChange: noop
  };

  constructor(inProps) {
    super(inProps);
    const { value } = inProps;
    this.state = { value };
  }

  shouldComponentUpdate(inProps) {
    const { value } = inProps;
    if (value !== this.state.value) {
      this.setState({ value });
    }
    return true;
  }

  handleClick = () => {
    this.change(true);
  };

  handleToggle = () => {
    this.change(!this.state.value);
  };

  change(inValue) {
    const { onChange } = this.props;
    const target = { value: inValue };
    this.setState(target, () => {
      onChange({ target });
    });
  }

  render() {
    const { className, children, onChange, options, ...props } = this.props;
    const { value } = this.state;
    return (
      <div
        data-component={CLASS_NAME}
        className={classNames(CLASS_NAME, className)}
        {...props}>
        <button className={`${CLASS_NAME}__trigger`} onClick={this.handleClick}>
          <span></span>
        </button>
        <ReactDrawer
          className={`${CLASS_NAME}__popup`}
          value={value}
          backdrop={{ onClick: this.handleToggle }}
          children={children}
          {...options}
        />
      </div>
    );
  }
}
