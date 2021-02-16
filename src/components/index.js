import noop from '@jswork/noop';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ReactDrawer from '@jswork/react-drawer';

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
    options: PropTypes.object,
    /**
     * The trigger element.
     */
    trigger: PropTypes.func,
    /**
     * The extra element.
     */
    extra: PropTypes.element
  };

  static defaultProps = {
    trigger: noop,
    value: false,
    onChange: noop
  };

  get Trigger() {
    const { trigger } = this.props;
    return trigger === noop
      ? (props) => {
          return (
            <button className={`${CLASS_NAME}__trigger`} {...props}>
              <span></span>
            </button>
          );
        }
      : trigger;
  }

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
    const {
      className,
      children,
      onChange,
      options,
      trigger,
      extra,
      ...props
    } = this.props;
    const { value } = this.state;

    return (
      <div
        data-component={CLASS_NAME}
        className={classNames(CLASS_NAME, className)}
        {...props}>
        <this.Trigger onClick={this.handleClick} />
        <ReactDrawer
          className={`${CLASS_NAME}__popup`}
          value={value}
          backdrop={{ onClick: this.handleToggle }}
          children={children}
          {...options}
        />
        {extra}
      </div>
    );
  }
}
