import styled from 'styled-components';

const LandingPageDiv = styled.div`
  background-repeat: no-repeat;
  background-color: #cccccc;
  height: 100vh;
  background-position: center;
  background-size: cover;

  .landing-page-logo {
    padding: 4% 0;
    align-content: center;
    width: 414px;
    text-align: center;
    margin-left: 6.38vw;

    .landing-page-logo-icon {
      width: 150px;
      margin: 0 auto;
    }

    .landing-page-logo-h1 {
      font-family: 'Norwester', sans-serif;
      color: #d3553f;
      font-size: 3rem;
      margin: 3% 0;
    }

    .landing-page-logo-p {
      font-family: 'Montserrat', sans-serif;
      text-align: center;
      font-size: 1rem;
      font-stretch: ultra-expanded;
      letter-spacing: 2px;
      font-weight: 800;
    }
  }
`;
export default LandingPageDiv;
