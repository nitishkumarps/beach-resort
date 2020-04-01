import React from "react";
import loadingGif from "../images/gif/loading-gear.gif";
/**
 * @author
 * @function Loading
 **/

const Loading = props => {
  return (
    <div className="loading">
      <h4>rooms data loading...</h4>
      <img src={loadingGif} alt="" />
    </div>
  );
};

export default Loading;
