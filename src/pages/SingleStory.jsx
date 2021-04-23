import React, { Component } from "react";
import axios from "axios";
import Loader from "../components/Loader";
import ErrorDisplay from "../components/ErrorDisplay";
import Fade from "react-reveal/Fade";
import CharitySection from '../components/CharitySection';

class SingleStory extends Component {
  state = {
    story_info: {},
    isLoading: true,
  };

  fetchStoryById = () => {
    axios.get(`https://project-pollen-backend.herokuapp.com/api/stories/${this.props.id}`)
    .then(({ data }) => {
      console.log(data.story, "STORY DATA")
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
        <div className="story-column-one">
          <h1>{story_info.story.title}</h1><br/>
          <p1>{story_info.story.quotes[0]}</p1><br/><br/>
          <img className="avatar" src={story_info.image} alt="missing story image..."></img><br/>
          <p3>{story_info.story.paragraphs[0]}</p3><br/>
          <p3>{story_info.story.paragraphs[1]}</p3><br/><br/>
          <p4>{story_info.story.quotes[1]}</p4><br/><br/>
          <p3>{story_info.story.paragraphs[2]}</p3><br/>
          <p3>{story_info.story.paragraphs[3]}</p3><br/><br/>
          <p4>{story_info.story.quotes[2]}</p4><br/><br/>
          <p3>{story_info.story.paragraphs[4]}</p3><br/><br/>
          <p2>Manchester Homeless Charity needs your help. To help others like {story_info.name} facing homelessness, donate today. As little as £5 will provide a meal and a bed to someone in need.</p2><br/>
        </div>
        <div className="story-column-two">
          <img className="avatar" src={story_info.image} alt="missing story image..."></img><br/><br/>
          <p2>Manchester Homeless Charity needs your help. To help others like {story_info.name} facing homelessness, donate today. As little as £5 will provide a meal and a bed to someone in need.</p2><br/>
        </div>
      </main>
      <CharitySection />
      </Fade>
    );
  }
}


export default SingleStory;
