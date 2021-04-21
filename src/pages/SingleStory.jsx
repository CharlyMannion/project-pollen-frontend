import React, { Component } from "react";
import axios from "axios";
import Loader from "../components/Loader";
import ErrorDisplay from "../components/ErrorDisplay";
import Fade from "react-reveal/Fade";

class SingleStory extends Component {
  state = {
    story_info: {},
    isLoading: true,
  };

  fetchStoryById = () => {
    axios.get(`https://project-pollen-backend.herokuapp.com/api/stories/${this.props.id}`)
    .then(({ data }) => {
        this.setState({
          story_info: data,
          isLoading: false,
          error: null,
        });
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
    this.fetchStoryById();
  }

  render() {
    const { story_info, isLoading, error } = this.state;
    if (error) return <ErrorDisplay {...error} />;
    if (isLoading) return <Loader />;

    return (
      <Fade>
      <main className="single-page-story">
        <h2>{story_info.name}</h2>
        <p
          className="avatar"
          src={story_info.avatar_url}
          alt="missing story image..."
        ></p>
        <p>{story_info.story.title}</p>
      </main>
      </Fade>
    );
  }
}

export default SingleStory;
