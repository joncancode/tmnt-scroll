import React, { Component } from 'react';
import './Don.css';
import { TweenLite, TimelineLite, SteppedEase } from 'gsap';
import ScrollMagic from './ScrollMagic';
import don from '../images/don.jpg';

class Don extends Component {
  componentDidMount() {
    var controller = new ScrollMagic.Controller();

    var itemD = '.transitionD';
    var tl = new TimelineLite();

    tl.add(TweenLite.to('.App', .8, { backgroundColor: 'black' }));
    tl.add(TweenLite.to('.App', .8, { backgroundColor: '#7300e6' }));
    tl.add(TweenLite.to('.para-text', 0.5, { opacity: 1, x: 20 }));
    tl.add(TweenLite.to('.don-heading', 0.5, { opacity: 1, x: 20 }));
    tl.add(TweenLite.to('.don', 0.5, { opacity: 1, x: 30 }));

    var scene1 = new ScrollMagic.Scene({ triggerElement: itemD})
      .setTween(tl)
      .addTo(controller);
  }

  render() {
    return (
      <div className="container">
      <div className="transitionD">(Bo image)</div>
        <div className="don-container">
        <div className="don-heading">
          <h2 className="don-name">Donatello</h2>
          <p className="don-description">The Brain</p>
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
          <img className="don" src={don} width="200" height="330" />
        </div>
      </div>
    );
  }
}

export default Don;
