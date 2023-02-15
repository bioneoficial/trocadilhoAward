import React from "react";
import "./LikeButton.css";

const LikeButton = ({ onClick}) => {
  return <button className="likeButton" onClick={onClick}>DEIXE SEU LIKE!</button>;
};

export default LikeButton;
