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
      <h2>OPTIMA Club</h2>
      <p>
        <strong>OPTIMA</strong> is the official technical club of the Department of Computer Applications at NIT Trichy, run by students from the <strong>M.Sc Computer Science</strong> and <strong>M.Tech Data Analytics</strong> programs. It provides a platform for technical growth through <strong>hackathons</strong>, <strong>coding contests</strong>, and <strong>workshops</strong>.
      </p>
      <p>
        The club fosters hands-on learning, bridging academic knowledge with real-world applications, and connects students with industry trends and innovations in <strong>Information Technology</strong>.
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
