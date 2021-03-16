import React from 'react';
import 'antd/dist/antd.css';          // Antd Styles
import '@Shared/Styles/styles.scss';  // @Shared Styles
import './assets/sass/styles.scss';   // Project Styles

import {SiteLayout} from './pages/_layout';

import { ButtonComp } from '@Shared/Components/Button';
import { TextComp } from '@Shared/Components/Text';
 
function AppCorporate(){
  const handleClick = (e) => {
    console.log(e);
  }
  return (
    <SiteLayout>
      <div className="App">
        <TextComp>Apsiyon Kurumsal</TextComp>
        <ButtonComp onClick={e => handleClick(e.target.value)} type="primary" size="large" loading="true">Deneme</ButtonComp>
        <ButtonComp onClick={e => handleClick(e.target.value)} type="primary" size="large" loading="true" disabled danger block>Deneme</ButtonComp>
      </div>
    </SiteLayout>
  )
}

export default AppCorporate;