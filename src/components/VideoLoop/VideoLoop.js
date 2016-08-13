import React, {Component} from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './VideoLoop.css';

class VideoLoop extends Component {
  render() {
    return (
      <div className={s.root}>
        <iframe src="http://player.vimeo.com/video/141461861"
                className={s.container}
                frameBorder="0" />
      </div>
    );
  }
}

export default withStyles(s)(VideoLoop);
