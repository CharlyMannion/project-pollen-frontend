import React, { Component } from "react";
import Carousel from 'react-elastic-carousel';
import axios from "axios";
import Fade from "react-reveal/Fade";
import Loader from "../components/Loader";
import ErrorDisplay from "../components/ErrorDisplay";
import CarouselStoryCard from "../components/CarouselStoryCard";
// import Item from '../styledComponents/Item';

class StoryCarousel extends Component {
  state = {
    stories: [],
    isLoading: true,
  };

  fetchStories = () => {
      axios.get('https://project-pollen-backend.herokuapp.com/api/stories')
      .then(({data}) => {
        this.setState({ stories: data, isLoading: false, error: null });
      })
      .catch(({ response }) => {
        this.setState({
          error: {
            status: response.status,
            message: response.data.msg,
          },
        });
      });
  };

  componentDidMount() {
    this.fetchStories();
  }

  render() {
    const { stories, isLoading, error } = this.state;
    if (error) return <ErrorDisplay {...error} />;
    if (isLoading) return <Loader />;

    return (
        <Fade>
          <main className="carousel-container">
            <Carousel>
            {stories.map((story) => {
              return <CarouselStoryCard {...story} key={story.name} />;
              // return <Item><CarouselStoryCard {...story} key={story.name} /></Item>;
            })}
            </Carousel>
          </main>
        </Fade>
    );
  }
}

export default StoryCarousel;