import '../tariff-cards/tariffCard.module.css';

function TariffCard(props) {
  return (
      <div className="tariff-card">
          <div className="tc-name">
            <h4>{props.name}</h4>
          </div>
          <div className="tc-price">
            <p className='p-currency'>{props.сurrency}</p>
            <h4 className="p-number">{props.price}</h4>
            <p className="p-timeline">/{props.timeline}</p>
          </div>
          <div>
            <p>{props.speed}</p>
          </div>
          <div className="tc-comment">
            <p>{props.comment}</p>
          </div>
      </div>
  );
}

export default TariffCard;