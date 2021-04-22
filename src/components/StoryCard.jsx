import React from "react";
import { Link } from "@reach/router";
import Fade from "react-reveal/Fade";

const StoryCard = (props) => {
  return (
    <Fade>
      <section className="story-card">
        <p
          className="avatar"
          src={props.avatar_url}
          alt="missing story image..."
        ></p>
        <Link
          to={`/story/${props._id}`}
          style={{ color: "inherit", textDecoration: "none" }}
        >
          <h3>{props.name}</h3>
        </Link>
        <p>{props.story.title}</p>
      </section>
      </Fade>
  );
};

export default StoryCard;