import React, { Component } from 'react';
import './Raph.css';
import { TweenLite, TimelineLite, SteppedEase } from 'gsap';
import ScrollMagic from './ScrollMagic';
import raph from '../images/raph.jpg';

class Raph extends Component {
  componentDidMount() {
    var controller = new ScrollMagic.Controller();

    var itemR = '.transitionR';
    var tl = new TimelineLite();
    tl.add(TweenLite.to('.App', .8, { backgroundColor: 'black' }));
    tl.add(TweenLite.to('.App', .8, { backgroundColor: '#cc0000' }));
    tl.add(TweenLite.to('.para-text', 0.5, { opacity: 1, x: 20 }));
    tl.add(TweenLite.to('.raph-heading', 0.5, { opacity: 1, x: 20 }));
    tl.add(TweenLite.to('.raph', 0.5, { opacity: 1, x: 30 }));

    var scene1 = new ScrollMagic.Scene({ triggerElement: itemR })
      .setTween(tl)
      .addTo(controller);
  }

  render() {
    return (
      <div className="container">
        <div className="transitionR">(Sai image)</div>
        <div className="raph-container">
        <div className="raph-heading">
          <h2 className="raph-name">Raphael</h2>
          <p className="raph-description">The Attitude</p>
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
          <img className="raph" src={raph} width="200" height="330" />
        </div>
      </div>
    );
  }
}

export default Raph;
