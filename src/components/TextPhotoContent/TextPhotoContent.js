import React, {Component, PropTypes} from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './TextPhotoContent.css';

class TextContent extends Component {
  static propTypes = {
    photoContent: PropTypes.file,
    textContent: PropTypes.string,
  };

  render() {
    return (
      <table className={s.root}>
        <tbody>
        <tr className={s.container}>
          <td className={s.textContainer} >
          {this.props.textContent}
          </td>
          <td />
          <td>
            <img className={s.photoContainer} src={this.props.photoContent} />
          </td>
        </tr>
        </tbody>
      </table>
    );
  }
}

export default withStyles(s)(TextContent);
