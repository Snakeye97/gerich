import React from 'react';

import { SubHeading,MenuItem } from '../../components';
import { data, images } from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className='app__specialMenu flex__center section__padding' id='menu'>
    <div className="app__specialMenu-title">
      <SubHeading title='Menu that fits you palatte'/>
      <h1 className='headtext__cormorant'>Today’s Special</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app_specialMenu-menu_wine"></div>
    </div>
  </div>
);

export default SpecialMenu;
