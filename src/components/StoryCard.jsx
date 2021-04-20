import React from "react";
import { Link } from "@reach/router";

const StoryCard = (props) => {
  return (
      <section className="storyCard">
        <p
          className="avatar"
          src={props.avatar_url}
          alt="missing story image..."
        ></p>
        <Link
          to={`/story/${props.name}`}
          style={{ color: "inherit", textDecoration: "none" }}
        >
          <h3>{props.person}</h3>
        </Link>
        <p>{props.body}</p>
      </section>
  );
};

export default StoryCard;