import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import './../../css/styles.css'

const AutoplaySlider = withAutoplay(AwesomeSlider);


function Slider() {
  return (
    <AutoplaySlider
      play={true}
      cancelOnInteraction={false} // should stop playing on user interaction
      interval={6000}
      className="container"
    >
      <div data-src="/images/afterwork.png" />
      <div data-src="/images/programming.png" />
      <div data-src="/images/chat-pana.png"/>
    </AutoplaySlider>
  );
}

export default Slider;
