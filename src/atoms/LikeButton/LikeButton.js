import React from "react";
import "./LikeButton.css";

const LikeButton = ({ onClick}) => {
  return <button className="like-button" onClick={onClick}>deixe seu like!</button>;
};

export default LikeButton;
