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
            <h4>
              Vinny's story section 1 header <br/>
              Author Person <br />
              Other Info About Stuff
            </h4>
            {this.props.textContent}
          </td>
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
