import React from 'react';
import "./card.css"

function Card(props) {
  return (
    <div className="card">
        <img className="card-image" src={props.item.image} alt={props.alt} />
        <div>
            <span>
                <p className="card-location">{props.item.location}</p>
                <a className="card-link"href={props.item.goggleMap}>View on Goggle Map</a>
            </span>
            <h3 className="card-title">{props.item.title}</h3>
            <p className="card-date">{props.item.startDate} - {props.item.endDate}</p>
            <p className="card-description">{props.item.description}</p>
        </div>
    </div>
  );
}
export default Card;