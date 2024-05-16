// Card.js
import React from "react";

const CardItems = ({ title, image, status }) => {
  return (
    <div className="card">
      {/* <img src={image[0]} alt={title} /> */}
      {image.map((img, index) => {
           return <img key={index} src={img}  />
         } )}
      <div className="card-body">
        <h2>{title}</h2>
        <p>
          <strong>Author:</strong>
        </p>
        <p>{status}</p>
      </div>
    </div>
  );
};

export default CardItems;

