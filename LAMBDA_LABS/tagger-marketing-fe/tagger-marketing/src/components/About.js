//import dependencies
import React from "react";

import { Player } from "video-react";

//set Component Function
export default function About() {
  //render the component
  return (
    <div className="wrapper">
      <div className="about">
        <div className="about-content-container">
          <div className="register-container">
            <div className="tagline">
              <h3>
                Tagger is not just a faster email, <br/>
                it's Smarter Email.
              </h3>
            </div>
            <div className="about-form-container">
              <h3 className="heavy">Intelligent Search:</h3><p>No need for a specific keyword and phrase.</p><br/>
              <h3 className="heavy">Relationship Analytics:</h3><p> Tagger learns about the relationship between you and your contacts to better prioritize your inbox search.</p><br/>
              <h3 className="heavy">Automated Tags:</h3><p>Machine Learning will automatically apply tags to better organize your emails and messages.</p><br/>
              <h3 className="heavy">Localized Environment:</h3><p> Your emails and credentials are stored locally on your computer for added privacy and security.</p><br/>
              <h3 className="heavy">Offline Capability:</h3><p> Access your email, compose new messages, and que up to be sent the moment you access the internet without prompting.</p><br/>
            </div>
          </div>
          <div className="about-image-container">
            <iframe
              className='media'
              src="https://drive.google.com/file/d/1hWgtgHQWiy11NycB7RYzcqBwC4UybmxO/preview"
              width="640"
              height="480"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
