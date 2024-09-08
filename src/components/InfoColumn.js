import React from 'react';
import './InfoColumn.css';

const InfoColumn = ({ title, content }) => {
  return (
    <div className="info-column">
      <h2>{title}</h2>
      {Array.isArray(content) ? (
        <ul>
          {content.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      ) : (
        <div>{content}</div>
      )}
    </div>
  );
};

export default InfoColumn;
