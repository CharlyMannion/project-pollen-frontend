import React, { Component } from "react";
import Loader from "../components/Loader";
import ErrorDisplay from "../components/ErrorDisplay";
import Fade from "react-reveal/Fade";
// import axios from "axios";

class SingleStory extends Component {
  state = {
    story_info: {person: "Mark", body: "Mark fell on hard times..."},
    isLoading: false,
  };

//   fetchStoryById = () => {
//     axios
//       .get(`https://project-pollen.herokuapp.com/api/storys/${this.props.name}`)
//       .then(({ data }) => {
//         this.setState({
//           story_info: data.stories[0],
//           isLoading: false,
//           error: null,
//         });
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
//     this.fetchStoryById();
//   }

  render() {
    const { story_info, isLoading, error } = this.state;
    if (error) return <ErrorDisplay {...error} />;
    if (isLoading) return <Loader />;

    return (
      <Fade>
      <main className="single_page_story">
        <h2>{story_info.person}</h2>
        <p
          className="avatar"
          src={story_info.avatar_url}
          alt="missing story image..."
        ></p>
        <p>{story_info.body}</p>
      </main>
      </Fade>
    );
  }
}

export default SingleStory;
