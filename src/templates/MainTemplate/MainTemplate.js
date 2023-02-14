import React from 'react';
import Tabs from '../../atoms/Tabs';
import './MainTemplate.css';

const MainTemplate = ({
  children,
}) => {
  return (
    <div className='container'>
      <header className='container__header'>
        <h1>Trocadilho Awards</h1>
        <Tabs currentTab={{id: 'LISTA DE TROCADILHOS', selected: true}} />
      </header>
      {children}
    </div>
  );
};

export default MainTemplate;
