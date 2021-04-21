import React, { Component } from "react";
import axios from "axios";
import Fade from "react-reveal/Fade";
import Loader from "../components/Loader";
import ErrorDisplay from "../components/ErrorDisplay";
import StoryCard from "../components/StoryCard";

class StoryList extends Component {
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

  // the below functionality is only really needed if filteing stories e.g. by category
  // componentDidUpdate(prevProps, prevState) {
  //   console.log(prevProps, "previous props")
//     if (prevProps.slug !== this.props.slug) {
//       axios
//         .get(`https://be-scheuster.herokuapp.com/api/stories/`, {
//           params: { stories: this.props.slug },
//         })
//         .then(({ data: { stories } }) => {
//           this.setState({ stories, isLoading: false });
//         });
//     }
  // }

  render() {
    const { stories, isLoading, error } = this.state;
    if (error) return <ErrorDisplay {...error} />;
    if (isLoading) return <Loader />;

    return (
        <Fade>
          <main className="storyList">
            {stories.map((story) => {
              return <StoryCard {...story} key={story.name} />;
            })}
          </main>
        </Fade>
    );
  }
}

export default StoryList;