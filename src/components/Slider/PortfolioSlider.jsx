import React from 'react'
import Portfolio from '../Portfolio'
import Div from '../Div'
import Slider from 'react-slick';

export default function PortfolioSlider() {
  const portfolioData = [
    {
      title:'Science',
      subtitle:'See Details',
      href:'/portfolio/portfolio-details',
      src:'/images/portfolio_1.jpeg'
    },
    {
      title:'Engineering',
      subtitle:'See Details',
      href:'/portfolio/portfolio-details',
      src:'/images/portfolio_2.jpeg'
    },
    {
      title:'Business',
      subtitle:'See Details',
      href:'/portfolio/portfolio-details',
      src:'/images/portfolio_0.jpg'
    },
    {
      title:'Medicine',
      subtitle:'See Details',
      href:'/portfolio/portfolio-details',
      src:'/images/portfolio_3.jpeg'
    }
  ]
  
  /** Slider Settings **/
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 3,
    speed: 500,
    dots: true,
    arrows:false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };
  
  return (
    <Slider {...settings} className='cs-slider cs-style3 cs-gap-24'>
      {portfolioData.map((item, index)=> (
        <Div key={index}>
          <Portfolio 
            title={item.title} 
            subtitle={item.subtitle}
            href={item.href}
            src={item.src}
          />
        </Div>
      ))}
    </Slider>
  )
}
