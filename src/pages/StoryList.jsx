import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Loader from "../components/Loader";
import ErrorDisplay from "../components/ErrorDisplay";
import StoryCard from "../components/StoryCard";

class ShoeList extends Component {
  state = {
    story: [{person: "Mark", body: "Mark fell on hard times..."}],
    isLoading: false,
  };

//   fetchStory = () => {
//     axios
//       .get(`https://project-pollen.herokuapp.com/api/stories/`, {
//         params: { story: this.props.slug },
//       })
//       .then(({ data: { story } }) => {
//         this.setState({ story, isLoading: false, error: null });
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
//     this.fetchStory();
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (prevProps.slug !== this.props.slug) {
//       axios
//         .get(`https://be-scheuster.herokuapp.com/api/stories/`, {
//           params: { story: this.props.slug },
//         })
//         .then(({ data: { story } }) => {
//           this.setState({ story, isLoading: false });
//         });
//     }
//   }

  render() {
    const { story, isLoading, error } = this.state;
    if (error) return <ErrorDisplay {...error} />;
    if (isLoading) return <Loader />;

    return (
      <Fade>
        <main className="storyList">
          {story.map((element) => {
            return <StoryCard {...element} key={element.name} />;
          })}
        </main>
      </Fade>
    );
  }
}

export default ShoeList;