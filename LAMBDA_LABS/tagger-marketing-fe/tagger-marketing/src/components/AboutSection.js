//import dependencies
import React from "react";
import Adrian from "../img/Adrian.jpg"
import Cam from "../img/Cam.png"
import Brandon from "../img/Brandon.png"
import Anthony from "../img/Anthony.jpg"
import Jack from "../img/Jack.jpg"
import Chris from "../img/Christopher.jpg"
import Monica from "../img/Monica.jpg"

//set Component Function
export default function AboutSection() {
  //render the component
  return (
      <div>
          <h2>This is our team:</h2>
    <div className= "teamlead">
        <h3 className="h3">Team Lead</h3>
        <img src= {Cam} alt = "a picture of our teamlead"/>
        <p>Cam Perry</p>
        <div className= "icon">
        <a href="https://github.com/cpscott1" target="_blank"><i className="fa fa-github" aria-hidden="true"></i></a>
        <a href="https://www.linkedin.com/in/camperry1/" target="_blank"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a>
        </div>
    </div>
    <div className = "parent1">
    <div className = "Anthony">
        <h3 className="h3">Web Developer</h3>
        <img src= {Anthony} alt = "A picture of Anthony"/>
        <p>Anthony Kawa</p>
        <div className= "icon">
        <a href="https://github.com/frankie95667" target="_blank"><i className="fa fa-github" aria-hidden="true"></i></a>
        <a href="https://www.linkedin.com/in/anthony-kawa-7b34043a/" target="_blank"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a>
        </div>
    </div>
    <div className= "Adrian">
        <h3 className="h3">Web Developer</h3>
        <img src= {Adrian} alt= " A picture of adrian"/>
        <p>Adrian Nasaruk</p>
        <div className= "icon">
        <a href="https://github.com/adriannasaruk" target="_blank"><i className="fa fa-github" aria-hidden="true"></i></a>
        <a href="https://www.linkedin.com/in/adrian-nasaruk-73097b183/" target="_blank"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a>
        </div>
    </div>
    <div className= "Christopher">
        <h3 className="h3">DS Software Engineer</h3>
        <img src= {Chris} alt= " A picture of Christopher"/>
        <p>Christopher Filkins</p>
        <div className= "icon">
        <a href="https://github.com/filchyboy" target="_blank"><i className="fa fa-github" aria-hidden="true"></i></a>
        <a href="https://www.linkedin.com/in/chrisfilkins/" target="_blank"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a>
        </div>
    </div>
    </div>
    <div className = "parent2">
    <div className = "Monica">
        <h3 className="h3">DS Software Engineer</h3>
        <img src= {Monica} alt = "A picture of Monica"/>
        <p>Monica Bustamente</p>
        <div className= "icon">
        <a href="https://github.com/Moly-malibu" target="_blank"><i className="fa fa-github" aria-hidden="true"></i></a>
        <a href="https://www.linkedin.com/in/monica-bustamante-b2ba3781/" target="_blank"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a>
        </div>
    </div>
    <div className= "Brandon">
        <h3 className="h3">DS Software Engineer</h3>
        <img src = {Brandon} alt= "A picture of Brandon"/>
        <p>Brandon Mulas</p>
        <div className= "icon">
        <a href="https://github.com/bmulas1535" target="_blank"><i className="fa fa-github" aria-hidden="true"></i></a>
        <a href="https://www.linkedin.com/in/brandon-mulas/" target="_blank"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a>
        </div>
    </div>
    <div className= "Jack">
        <h3 className="h3">DS Software Engineer</h3>
        <img src= {Jack} alt= " A picture of Jack"/>
        <p>Jack Lindberg</p>
        <div className= "icon">
        <a href="https://github.com/Jllin50" target="_blank"><i className="fa fa-github" aria-hidden="true"></i></a>
        <a href="" target="_blank"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a>
        </div>
    </div>
    </div>
    </div>
  );
}
