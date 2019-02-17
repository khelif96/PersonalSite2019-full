import React, { PureComponent } from 'react';
import styles from './Logo.module.css';

class Logo extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className={styles.logo}>
        <div className={styles.logo_text}>mkhelif</div>
      </div>

    );
  }
}
export default Logo;
