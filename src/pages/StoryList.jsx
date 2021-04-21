import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Loader from "../components/Loader";
import ErrorDisplay from "../components/ErrorDisplay";
import StoryCard from "../components/StoryCard";

class ShoeList extends Component {
  state = {
    stories: [{person: "Mark", body: "Mark fell on hard times..."}, {person: "Edwin", body: "Edwin came from a broken home..."}],
    isLoading: false,
  };

//   fetchStories = () => {
//     axios
//       .get(`https://project-pollen.herokuapp.com/api/stories/`, {
//         params: { stories: this.props.slug },
//       })
//       .then(({ data: { stories } }) => {
//         this.setState({ stories, isLoading: false, error: null });
//       })
//       .catch(({ response }) => {
//         this.setState({
//           error: {
//             status: response.status,
//             message: response.data.msg,
//           },
//         });
//       });
//   };

//   componentDidMount() {
//     this.fetchStories();
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (prevProps.slug !== this.props.slug) {
//       axios
//         .get(`https://be-scheuster.herokuapp.com/api/stories/`, {
//           params: { stories: this.props.slug },
//         })
//         .then(({ data: { stories } }) => {
//           this.setState({ stories, isLoading: false });
//         });
//     }
//   }

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

export default ShoeList;