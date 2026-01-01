import React, { PureComponent } from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  text: string;
  style?: 'normal';
}

class Button extends PureComponent<ButtonProps> {
  static defaultProps = {
    style: 'normal' as const,
  };

  mapStyletoCSS = () => {
    const {
      style = 'normal',
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
