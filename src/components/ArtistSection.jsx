import React from "react";
import joBlogs from '../images/marcos-paulo-prado-PnErHCrtXnw-unsplash.jpg';
import samSmith from '../images/dewang-gupta-MHlTjKzcuys-unsplash.jpg';


const ArtistSection = ()=> {
    
  return (
    <section className="artist-section">
        <h2>Our Artists</h2>
        <div className="artists-container">
          <div className="artist-card">
            <div>
                <img src={samSmith} alt="" className="artist-image"/>
            </div>
            <div className="artist-text">
                <h3>SAM SMITH</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <a href="">VISIT SAM'S WEBSITE</a>  
            </div>
          </div>
          <div className="artist-card">
            <div>
                <img src={joBlogs} alt="" className="artist-image"/>
            </div>
            <div className="artist-text">
                <h3>Jo Blogs</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <a href="">VISIT JO'S WEBSITE</a>  
            </div>
          </div>
        </div>
        <p className="artist-section-quote">"People think it can never happen to them, but it can, in the blink of an eye"</p>
    </section>
  );
};

export default ArtistSection;