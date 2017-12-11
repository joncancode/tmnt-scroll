import React, { Component } from 'react';
import './Intro.css';
import { TweenLite, TweenMax, TimelineLite, Power0 } from 'gsap';
import ScrollMagic from './ScrollMagic';

class Intro extends Component {
  componentDidMount() {
    var controller = new ScrollMagic.Controller();

    var item = '.intro-text';
    var tl = new TimelineLite();
    tl.add(TweenLite.to('.intro-text', 1.5, {opacity: 1, x: 100}));

    var scene1 = new ScrollMagic.Scene({ triggerElement: item })
      .setTween(tl)
      .addTo(controller);
  }

  render() {
    return (
      <div className="container">
          <h2 className="top-heading">Start</h2>
              <p class="intro-text">Lorem morbi nec iaculis leo, quis lobortis neque. Lorem morbi nec iaculis leo, quis lobortis neque. Lorem morbi nec iaculis leo, quis lobortis neque. Ut hendrerit, risus in dapibus euismod, nibh leo volutpat elit, vel pharetra odio dolor sed tellus. Aliquam erat volutpat. Nulla facilisi. Donec dictum nibh a magna dignissim maximus. Suspendisse massa sem, blandit at ullamcorper vel, faucibus sed nunc. Etiam interdum sem sit amet posuere varius. Aliquam convallis lacus ac risus suscipit sodales. In libero ante, euismod eu sollicitudin in, porttitor nec mi.</p>
        </div>
    );
  }
}

export default Intro;
