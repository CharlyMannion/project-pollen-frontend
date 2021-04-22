import React from "react";
import { Link } from "@reach/router";
import Fade from "react-reveal/Fade";

const StoryCard = (props) => {
  return (
    <Fade>
      <section className="story-card">
        <img
          className="avatar"
          src={props.image}
          alt="missing story image..."
        ></img>
        <div>
        <Link
          to={`/story/${props._id}`}
          style={{ color: "inherit", textDecoration: "none" }}
        >
          <h3>{props.name}</h3>
        </Link>
        <p>{props.story.title}</p>
        </div>
      </section>
    </Fade>
  );
};

export default StoryCard;