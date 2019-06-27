
import React, { PureComponent } from 'react';
import propTypes from 'prop-types';
import classnames from 'classnames';
import styles from './BurgerIcon.module.css';

class BurgerIcon extends PureComponent {
  static propTypes = {
    buttonClicked: propTypes.func.isRequired,
  }

  static defaultProps = {
    buttonClicked: () => console.log('Clicked'),
  }

  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }

  clicked = () => {
    const {
      active,
    } = this.state;
    this.setState({ active: !active });
    const {
      buttonClicked,
    } = this.props;
    buttonClicked();
  }

  render() {
    const {
      active,
    } = this.state;
    const {
      className,
    } = this.props;
    return (
      <div className={classnames(styles.container, className, active ? styles.change : null)} onClick={this.clicked}>
        <div className={styles.bar1} />
        <div className={styles.bar2} />
        <div className={styles.bar3} />
      </div>
    );
  }
}
export default BurgerIcon;
