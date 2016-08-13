import React, {Component, PropTypes} from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './AnchoredPhoto.css';

class AnchoredPhoto extends Component {
  static propTypes = {
    image: PropTypes.file,
  };

  render() {
    return (
      <div className={s.root}>
        <img className={s.container} src={this.props.image} />
      </div>
    );
  }
}

export default withStyles(s)(AnchoredPhoto);
