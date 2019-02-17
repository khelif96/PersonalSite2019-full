import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './TextBox.css';

class TextBox extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
  };

  static defaultProps = {
    className: undefined,
  }

  render() {
    const {
      children,
      className,
    } = this.props;
    return (
      <div className={classnames(className, 'text_box')}>
        {children}
      </div>

    );
  }
}
export default TextBox;
