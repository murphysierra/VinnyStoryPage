import React, { Component, PropTypes } from 'react';
import emptyFunction from 'fbjs/lib/emptyFunction';
import s from './App.css';
import Header from '../Header';
import Footer from '../Footer';
import VideoLoop from '../VideoLoop';
import Photo from '../Photo';
import AnchoredPhoto from '../AnchoredPhoto';
import TextContent from '../TextContent';
import TextPhotoContent from '../TextPhotoContent';
import EmtpyOverlay from '../EmptyOverlay';
import campusBmxOne from '../../public/images/campusBmxOne.jpg';
import campusBmxTwo from '../../public/images/campusBmxTwo.jpg';
import campusBmxThree from '../../public/images/campusBmxThree.jpg';
import contentPlaceHolder from '../../public/contentPlaceHolder.txt';
import Overlay from '../Overlay';
import { Parallax, Background } from 'react-parallax';

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
          <AnchoredPhoto image={campusBmxOne} />
          <EmtpyOverlay />
          <TextPhotoContent textContent={contentPlaceHolder}
                            photoContent={campusBmxThree} />
          <Parallax bgImage={campusBmxTwo} strength={200}>
            <br/>
            <p> {contentPlaceHolder} </p>
          </Parallax>
          <TextContent />
          <Parallax bgImage={campusBmxThree} strength={400}>
            <Overlay />
          </Parallax>
        <TextContent />
        <Parallax bgImage={campusBmxThree} strength={200}>
          <div className={s.space} >
            <Overlay textContent={contentPlaceHolder} />
          </div>
        </Parallax>
        <TextContent  />
        <Parallax strength={400}>
          <Background>
            <VideoLoop />
          </Background>
          <Overlay />
        </Parallax>
        <TextContent />
        <Footer />
      </div>
    ) : this.props.children;
  }

}

export default App;
