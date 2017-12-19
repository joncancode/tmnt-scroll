import React, { Component } from 'react';
import './Leo.css';
import { TweenLite, TimelineLite, SteppedEase } from 'gsap';
import ScrollMagic from './ScrollMagic';
import leo from '../images/leo.jpg';

class Leo extends Component {
  componentDidMount() {
    var controller = new ScrollMagic.Controller();

    var itemL = '.transitionL';
    var tl = new TimelineLite();
    tl.add(TweenLite.to('.App', .8, { backgroundColor: 'black' }));
    tl.add(TweenLite.to('.App', .8, { backgroundColor: '#0000e6' }));
    tl.add(TweenLite.to('.para-text', 0.5, { opacity: 1, x: 20 }));
    tl.add(TweenLite.to('.leo-heading', 0.5, { opacity: 1, x: 20 }));
    tl.add(TweenLite.to('.leo', 0.5, { opacity: 1, x: 30 }));

    var scene2 = new ScrollMagic.Scene({ triggerElement: itemL })
      .setTween(tl)
      .addTo(controller);
  }

  render() {
    return (
      <div className="container">
      <div className="transitionL">(Katana image)</div>
        <div className="leo-container">
          <div className="leo-heading">
            <h2 className="leo-name">Leonardo</h2>
            <p className="leo-description">The Leader</p>
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
          <img className="leo" src={leo} width="200" height="330" />
        </div>
      </div>
    );
  }
}

export default Leo;
