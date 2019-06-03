import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import ReactMarkdown from 'react-markdown';

import styles from './TextBox.module.css';

class TextBox extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    escapeHtml: PropTypes.bool,
  };

  static defaultProps = {
    className: undefined,
    escapeHtml: false,
  }

  render() {
    const {
      children,
      className,
      escapeHtml,
    } = this.props;
    return (
      <div className={classnames(className, styles.text_box)}>
        <ReactMarkdown escapeHtml={escapeHtml} source={children} />
      </div>

    );
  }
}
export default TextBox;
