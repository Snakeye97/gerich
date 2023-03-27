import React from 'react';
import { BsInstagram,BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Gallery.css';

const Gallery = () => {


  return (
  <div className='app__gallery flex__center'>
    <div className="app__gallery-content">
      <SubHeading title='Instagram'/>
      <h1 className="headtext__cormorant">Photo Gallery</h1>
      <p className="opensans" style={{color:'#aaa', marginTop:'2rem'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
      <button className='custom__button' type='button'>View More</button>
    </div>

    <div className="app__gallery-images"></div>
  </div>
  )
};

export default Gallery;
