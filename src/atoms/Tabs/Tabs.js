import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Tabs.css';

const tabs = [
  {
    id: 'LISTA DE TROCADILHOS',
    name: 'Lista de Trocadilhos',
    redirectTo: '/lista-trocadilho',
    selected: false,
  },
  {
    id: 'ADICIONAR TROCADILHO',
    name: 'Adicionar novo Trocadilho',
    redirectTo: '/adicionar-trocadilho',
    selected: false,
  },
    {
    id: 'RANKINGS',
    name: 'Melhores Trocadilhos',
    redirectTo: '/ranking',
    selected: false,
    },
];

const Tabs = ({ currentTab }) => {
  const navigate = useNavigate();

  const onClick = (url) => navigate(url);

  return (
    <div className='container'>
      <div className='container__wrapper'>
        {tabs.map((tab) => {
          const color =
            tab.id == currentTab.id && currentTab.selected
              ? '#006E43'
              : '#F2F2F2';
          return (
            <div className='container__tabBox' key={tab.name} color={color}>
              <span className='container__tabBox__tab'
                key={tab.name}
                color={color}
                onClick={() => onClick(tab.redirectTo)}
              >
                {tab.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tabs;
