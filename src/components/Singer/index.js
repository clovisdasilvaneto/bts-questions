import React from "react";

function Singer({ image, onClick, name }) {
  return (
    <div className="profile" onClick={onClick}>
      <img src={image} alt={name} />
      <div className="profile-name">{name}</div>
    </div>
  );
}

export default Singer;
