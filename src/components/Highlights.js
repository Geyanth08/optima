import React from 'react';
import Slider from 'react-slick';
import './Highlights.css';

const Highlights = () => {
  const slideImages = [
    '/Images/optima-23-8.jpeg',
    '/Images/optima-23-13.jpeg',
    '/Images/optima-23-6.jpeg',
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const description = (
    <div className="highlight-description">
      <h2>OPTIMA 2024</h2>
      <p>
        In the present day world, <strong>'Optimization'</strong> is the password for the success of every organization.
        The development and implementation of <strong>Operations Research</strong> have had a significant, positive impact
        on the <strong>Performance</strong> of all major organizations and also has found its way in our day-to-day lives through means of
        <strong>electricity</strong>, <strong>transport</strong>, <strong>communication</strong>, etc.
      </p>
      <p>
        The course of <strong>Operations Research</strong> and <strong>Computer Applications</strong> seeks possible avenues to materialize these growing needs.
        And thus, our enthusiastic approach to present to you a perfect blend of technology and creativity culminates in the program of <strong>OPTIMA</strong>.
      </p>
    </div>
  );

  return (
    <div className="highlights-container">
      <div className="carousel-container">
        <Slider {...settings}>
          {slideImages.map((imgSrc, index) => (
            <div key={index} className="carousel-slide">
              <img src={imgSrc} alt={`Highlight ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>
      <div className="description-container">
        {description}
      </div>
    </div>
  );
};

export default Highlights;
