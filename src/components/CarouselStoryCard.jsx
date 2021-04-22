import React from "react";
import { Link } from "@reach/router";
import Fade from "react-reveal/Fade";

const CarouselStoryCard = (props) => {
  return (
    <Fade>
      <section className="carousel-story">
        <img
          className="avatar"
          src={props.image}
          alt="missing story image..."
        ></img>
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

export default CarouselStoryCard;