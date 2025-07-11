import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Skills.css';
import Projects from './Project';

const skills = [
  {
    name: 'React.js',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'
  },
  {
    name: 'Angular',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg'
  },
  {
    name: 'JavaScript (ES6+)',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png'
  },
  {
    name: 'HTML / CSS',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg'
  },
  {
    name: 'Git & GitHub',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg'
  },
  {
    name: 'Responsive Design',
    image:
      'https://cdn-icons-png.flaticon.com/512/2490/2490439.png'
  }
];

const Skills = () => {
const settings = {
  dots: true,
  infinite: true,
  centerMode: true,
  centerPadding: '40px',
  slidesToShow: 3,
  speed: 500,
  arrows: true,
  beforeChange: (oldIndex, newIndex) => {
    console.log("Changing from", oldIndex, "to", newIndex);
  },
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        centerPadding: '40px'
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        centerPadding: '0px'
      }
    }
  ]
};


  return (
    <section id="skills" className="skills-section">
      <h2>My Skills</h2>
      <div className="skills-slider-container">
        <Slider {...settings}>
          {skills.map((skill, index) => (
            <div key={index} className="skill-slide">
              <div className="skill-card">
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="skill-icon"
                />
                <p>{skill.name}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
        <Projects />
    </section>
  );
};

export default Skills;
