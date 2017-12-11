import React, { Component } from 'react';
import './Mike.css';
import { TweenLite, TimelineLite, SteppedEase } from 'gsap';
import ScrollMagic from './ScrollMagic';
import mike from '../images/mike.jpg';

class Mike extends Component {
  componentDidMount() {
    var controller = new ScrollMagic.Controller();

    var itemM = '.mike-heading';
    var tl = new TimelineLite();
    tl.add(TweenLite.to('.App', 1, { backgroundColor: 'black' }));
    tl.add(TweenLite.to('.App', 1.3, { backgroundColor: '#ffa31a' }));
    tl.add(TweenLite.to('.mike-name', 0.3, { opacity: 1, x: 30 }));
    tl.add(TweenLite.to('.mike-name', 0.3, { opacity: 1, x: 30 }));

    var scene1 = new ScrollMagic.Scene({ triggerElement: itemM })
      .setTween(tl)
      .addTo(controller);
  }

  render() {
    return (
      <div className="container">
        <div className="mike-container">
        <div className="mike-heading">
          <h2 className="mike-name">Michelangelo</h2>
          <p className="mike-description">The Party</p>
          <p className="para-text">
            Lorem morbi nec iaculis leo, quis lobortis neque. Ut hendrerit,
            risus in dapibus euismod, nibh leo volutpat elit, vel pharetra odio
            dolor sed tellus. Aliquam erat volutpat. Nulla facilisi. Donec
            dictum nibh a magna dignissim maximus. Suspendisse massa sem,
            blandit at ullamcorper vel, faucibus sed nunc. Etiam interdum sem
            sit amet posuere varius. Aliquam convallis lacus ac risus suscipit
            sodales. In libero ante, euismod eu sollicitudin in, porttitor nec
            mi.
          </p>
          </div>
          <img className="mike" src={mike} width="200" height="330" />
        </div>
      </div>
    );
  }
}

export default Mike;
