import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import '../stylesheets/Slider.scss';
import productOverview from '../assets/product-overview.svg';
import bugReporting from '../assets/bug-reporting.svg';
import crashReporting from '../assets/crash-reporting.svg';

const Slider = () => {
  return (
    <div className="slider">
      <Carousel
        autoPlay
        emulateTouch
        infiniteLoop
        showArrows={false}
        showStatus={false}
        showThumbs={false}
      >
        <div className="slider-item">
          <img src={productOverview} alt="" />
          <p className="legend">Accelerate Your Entire Mobile Team Workflow</p>
        </div>

        <div className="slider-item">
          <img src={bugReporting} alt="" />
          <p className="legend">
            The Most Comprehensive Bug Reporting Tool for Mobile Apps
          </p>
        </div>

        <div className="slider-item">
          <img src={crashReporting} alt="" />
          <p className="legend">Secure Crash Reporting With Real-Time Alerts</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
