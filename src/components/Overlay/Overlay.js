import React, {Component, PropTypes} from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Overlay.css';

class Overlay extends Component {
  static propTypes = {
    textContent: PropTypes.string,
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.content} >
          {this.props.textContent}
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Overlay);
