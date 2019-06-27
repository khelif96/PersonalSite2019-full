import React, { PureComponent } from 'react';
import classnames from 'classnames';
import styles from './Logo.module.css';

class Logo extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

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
