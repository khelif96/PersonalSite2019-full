import React, { PureComponent } from 'react';
import classnames from 'classnames';
import styles from './Logo.module.css';

interface LogoProps {
  className?: string;
}

class Logo extends PureComponent<LogoProps> {
  render() {
    const {
      className,
    } = this.props;
    return (
      <div className={classnames(styles.logo, className)}>
        <div className={styles.logo_text}>mkhelif</div>
      </div>

    );
  }
}
export default Logo;
