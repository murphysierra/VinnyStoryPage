import React, {Component, PropTypes} from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './TextContent.css';
import textPlaceHolder from '../../public/contentPlaceHolder.txt';


class TextContent extends Component {
  static propTypes = {
    content: PropTypes.string,
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          {this.props.content}
          <br/>
          {textPlaceHolder}
        </div>
      </div>
    );
  }
}

export default withStyles(s)(TextContent);
