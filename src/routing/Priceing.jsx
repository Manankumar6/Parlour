import React from 'react';
import PriceCard from './PriceCard';

const Priceing = () => {
  return (
    
    <>
        <h1 className='abt_heading'>Price List</h1>
    <div className="price_main">
      {PriceCard.map((card, index) => (
          <div className="price_menu" key={index}>
          <img src={card.imgSrc} alt={card.title} className="card_image" />
          <h2 className="card_title">{card.title}</h2>
          <table className="table_container">
            <thead>
              <tr >
                <th>Service</th>
                <th>Price (₹)</th>
              </tr>
            </thead>
            <tbody>
              {card.service.map((service, serviceIndex) => (
                <tr key={serviceIndex} >
                  <td>{service.name}</td>
                  <td>{service.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
      </>
  );
};

export default Priceing;
