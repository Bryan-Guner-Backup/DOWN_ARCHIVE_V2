import React from 'react';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import '../../../../styles/sass/left-side-menu.scss';
import { IconContext } from 'react-icons';
import Logo from '../../../../styles/imgs/B2P_Symbol_Green.png';

function LeftSideBar(props) {
  return (
    <div className="bigBoyContainer">
      <IconContext.Provider value={{ color: 'grey' }}>
        <nav className={props.sidebar ? 'nav-menu active' : 'nav-menu'}>
          <Link to="#" className="close-icon">
            <AiIcons.AiOutlineClose onClick={() => props.setSidebar(false)} />
          </Link>
          <div className="nav-content">
            <img src={Logo} alt="Bridge of Prosperty Logo" />
            <h2>B2P Logo</h2>
          </div>
        </nav>
      </IconContext.Provider>
    </div>
  );
}

export default LeftSideBar;
