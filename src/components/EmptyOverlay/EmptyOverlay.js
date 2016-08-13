import React, {Component, PropTypes} from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './EmptyOverlay.css';

class EmptyOverlay extends Component {

  render() {
    return (
      <div className={s.root}>

      </div>
    );
  }
}

export default withStyles(s)(EmptyOverlay);
