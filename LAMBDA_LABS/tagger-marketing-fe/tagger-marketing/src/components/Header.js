//import dependencies
import React from "react";
import tagger from '../img/tagger_ss.PNG';
import {Link} from "react-router-dom"

//set Component Function
export default function Header() {
  //render the component
 
  return (
    <div className="wrapper">
      <div className="header">
        <div className="title">
          <h1>TaggerEmail</h1>
        </div>
        <button className="heavy" onClick={() => window.open("https://www.dropbox.com/s/ye5l5974q8ynm3x/Tagger%20Setup%201.1.1.exe?dl=1")}>App Download</button>
        <div className="head-content-container">
          <div className="register-container">
            <div className="tagline">
              <h3>
                Intelligent Email: <br />
                Working Beyond the Keyword
              </h3>
            </div>
            <div className="form-container">
              <p>
                The average person has two email accounts, and recieves between
                90-100 emails per day.
              </p>
              <p className='heavy'>That's 65,700 emails per year!</p>
              <p>
                That number only goes up the more emails you have due to your
                work, your websites, entrepreneurial ventures, and not all
                emails needed to be deleted right away, and not all emails are
                readily available through the traditional search system.
              </p>
              <p>
                Tagger removes the need to remember specific keywords by
                utilizing machine learning to learn about your relationships
                with your contacts to better sift through your inboxes to find
                that email, even if you can't remember the email specifics.
              </p>
            </div>
          </div>
          <div className="image-container">
            <img src={tagger} alt='tagger' className='tagger-img' />
          </div>
        </div>
      </div>
    </div>
  );
}
