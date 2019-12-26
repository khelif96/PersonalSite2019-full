
import React, { PureComponent } from 'react';
import propTypes from 'prop-types';
import classnames from 'classnames';
import styles from './BurgerIcon.module.css';

// class BurgerIcon extends PureComponent {
//   static propTypes = {
//     onClick: propTypes.func.isRequired,
//   }
//
//   static defaultProps = {
//     onClick: () => console.log('Clicked'),
//   }
//
//   constructor(props) {
//     super(props);
//     this.state = {
//       active: false,
//     };
//   }
//
//   clicked = () => {
//     const {
//       active,
//     } = this.state;
//     this.setState({ active: !active });
//     const {
//       onClick,
//     } = this.props;
//     onClick();
//   }
//
//   render() {
//     const {
//       active,
//     } = this.state;
//     const {
//       className,
//     } = this.props;
//
//   }
// }

const BurgerIcon = ({ onClick, className, active }) => {
  return (
    <div className={classnames(styles.container, className, !active ? styles.change : null)} onClick={() => onClick()}>
      <div className={styles.bar1} />
      <div className={styles.bar2} />
      <div className={styles.bar3} />
    </div>
  );
}
export default BurgerIcon;
