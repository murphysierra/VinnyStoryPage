import React, { Component, PropTypes } from 'react';
import emptyFunction from 'fbjs/lib/emptyFunction';
import s from './App.css';
import Header from '../Header';
import Footer from '../Footer';
import VideoLoop from '../VideoLoop';
import Photo from '../Photo';
import TextContent from '../TextContent';
import campusBmxOne from '../../public/images/campusBmxOne.jpg';
import campusBmxTwo from '../../public/images/campusBmxTwo.jpg';
import textPlaceHolder from '../../public/contentPlaceHolder.txt';

class App extends Component {

  static propTypes = {
    context: PropTypes.shape({
      insertCss: PropTypes.func,
      setTitle: PropTypes.func,
      setMeta: PropTypes.func,
    }),
    children: PropTypes.element.isRequired,
    error: PropTypes.object,
  };

  static childContextTypes = {
    insertCss: PropTypes.func.isRequired,
    setTitle: PropTypes.func.isRequired,
    setMeta: PropTypes.func.isRequired,
  };

  getChildContext() {
    const context = this.props.context;
    return {
      insertCss: context.insertCss || emptyFunction,
      setTitle: context.setTitle || emptyFunction,
      setMeta: context.setMeta || emptyFunction,
    };
  }

  componentWillMount() {
    const { insertCss } = this.props.context;
    this.removeCss = insertCss(s);
  }

  componentWillUnmount() {
    this.removeCss();
  }

  render() {
    return !this.props.error ? (
      <div>
        <Header />
          <VideoLoop />
          <TextContent content="FRIK"/>
          <Photo image={campusBmxOne} />
          <TextContent content={textPlaceHolder} />
          <Photo image={campusBmxTwo} />
        <Footer />
      </div>
    ) : this.props.children;
  }

}

export default App;
