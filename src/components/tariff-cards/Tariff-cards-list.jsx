import React from 'react'
import json from '../../data/traffic.json';
import TariffCard from './Tariff-card';

function TariffCardList() {
  return (
    <React.Fragment>
      <div className='tariff-cards-list'>
        {
          json.map((i) => (
            <TariffCard key={i.id} name={i.name} сurrency={i.сurrency} price={i.price} timeline={i.timeline} speed={i.speed} color={i.color} comment={i.comment} status={i.status}/>
          ))}
      </div>
    </React.Fragment>
  );
}

export default TariffCardList;