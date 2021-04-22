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
      console.log(data.story.paragraphs, "STORY DATA")
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
        <br/>
        <body>
          <h2>{story_info.name}</h2>
          <br/>
          <p>{story_info.story.title}</p>
        </body>
        <figure>
          <img
          className="avatar"
          src={story_info.image}
          alt="missing story image..."
          ></img>
          <figcaption class="caption">{story_info.story.title}</figcaption>
         </figure>
         <section/>
            {/* {story_info.story.paragraphs.map((parapraph) => {
              return <p>{paragraph}</p>
            })} */}
          <p>{story_info.story.paragraphs[0]}</p>
          <p>{story_info.story.paragraphs[1]}</p>
          <p>{story_info.story.paragraphs[2]}</p>
         <section/>
      </main>
      </Fade>
    );
  }
}

export default SingleStory;
