import React from "react";
import { Link } from "@reach/router";
import Fade from "react-reveal/Fade";

const ArtistCard = (props) => {
  return (
    <Fade>
      <div className="artist-card">
        <div>
            <img src="" alt=""/>
        </div>
        <div>
            <h3>SAM SMITH</h3>
            <p></p>
            <a href="">VISIT SAM'S WEBSITE</a>  
        </div>
      </div>
    </Fade>
  );
};

export default StoryCard;