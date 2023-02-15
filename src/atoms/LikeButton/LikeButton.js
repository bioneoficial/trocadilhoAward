import React from "react";
import "./LikeButton.css";

const LikeButton = ({ onClick}) => {
  return <button className="likeButton" onClick={onClick}>deixe seu like!</button>;
};

export default LikeButton;
