import React, { PureComponent, ReactNode } from 'react';
import classnames from 'classnames';
import ReactMarkdown from 'react-markdown';

import styles from './TextBox.module.css';

interface TextBoxProps {
  children: string; // ReactMarkdown expects a string
  className?: string;
  escapeHtml?: boolean;
}

class TextBox extends PureComponent<TextBoxProps> {
  static defaultProps = {
    className: undefined,
    escapeHtml: false,
  }

  render() {
    const {
      children,
      className,
    } = this.props;
    return (
      <div className={classnames(className, styles.text_box)}>
        <ReactMarkdown>{children}</ReactMarkdown>
      </div>

    );
  }
}
export default TextBox;
