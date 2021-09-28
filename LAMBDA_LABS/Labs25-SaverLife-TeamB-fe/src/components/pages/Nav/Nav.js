import React from 'react';
import { Link } from 'react-router-dom';
import { Budgets } from '../Budgets';
import {
  NavWrapper,
  NavContents,
  SLLogo,
  NavButtons,
  Button,
} from './styles/NavStyles';
import Media from 'react-media';

function Nav({ authService }) {
  return (
    <NavWrapper>
      <NavContents>
        <Link to={'/'}>
          <SLLogo src="https://www.saverlife.org/assets/logo-saverlife-a4b213a1d9e8e51559d7f70d9f479f1473f536e12c8c4543654d5b3964004b0f.svg" />
        </Link>

        <NavButtons>
          <Media
            query="(max-width: 765px)"
            render={() => (
              <Link to={'/'}>
                <Button>History</Button>
              </Link>
            )}
          />
          <Link to={'/budget'}>
            <Button className="budget" type="primary">
              Budget
            </Button>
          </Link>

          <Link to={'/refer'}>
            <Button className="refer" type="primary">
              Refer
            </Button>
          </Link>

          <Button
            className="logout"
            type="primary"
            onClick={() => authService.logout()}
          >
            Logout
          </Button>
        </NavButtons>
      </NavContents>
    </NavWrapper>
  );
}

export default Nav;
