import styled from 'styled-components';
import devices from '../../../utils/devices';

export const HeaderContainer = styled.div`
  position: absolute;
  top: 20rem;
  max-width: 50rem;
  margin-left: 4.3rem;

  @media ${devices.tablet} {
    top: 16rem;
    margin: 0;
    text-align: center;
    padding: 0 2rem;
  }

  .cta-title {
    font-size: 3rem;
    font-weight: bold;
    color: white;
    width: 100%;
    margin: 1rem 0;

    @media ${devices.mobile} {
      font-size: 2.2rem;
    }
  }

  .cta-button {
    width: 15rem;

    button {
      font-size: 1.4rem;
      padding: 0.8rem;
    }

    .link {
      text-decoration: none;
    }

    @media ${devices.tablet} {
      margin: 2rem auto;
    }
  }
`;
