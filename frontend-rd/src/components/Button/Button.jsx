import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

class Button extends PureComponent {
  static propTypes = {
    text: PropTypes.string.isRequired,
    style: PropTypes.oneOf(['normal']),
  };

static defaultProps = {
  style: 'normal',
};

mapStyletoCSS = () => {
  const {
    style,
  } = this.props;

  const buttonStyles = {
    normal: styles.normal,
  };

  return buttonStyles[style];
}

render() {
  const {
    text,
  } = this.props;
  return (
    <div className={this.mapStyletoCSS()}>
      {text}
    </div>
  );
}
}

export default Button;
