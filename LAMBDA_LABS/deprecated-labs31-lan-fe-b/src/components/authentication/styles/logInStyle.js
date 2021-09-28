import styled from 'styled-components';

const LogInContainer = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;

  form {
    max-width: 372.6px;
    width: 90%;
    display: flex;
    flex-direction: column;

    img {
      height: 32px;
      width: 32px;
      margin-bottom: 12px;
    }

    h2 {
      margin-bottom: 24px;
      font-size: 1.75rem;
      font-weight: 600;
      color: #ffffff;
    }

    label {
      font-size: 1rem;
      color: #ffffff;
    }

    input {
      padding: 10px;
      margin-bottom: 12px;
      background-color: #2c2f33;
      border: none;
      border-radius: 3px;
      font-family: 'Nunito', sans-serif;
      font-size: 1rem;
      color: #ffffff;
    }

    button {
      padding: 10px;
      margin: 12px 0 8px;
      background: linear-gradient(to right, #0072ff, #00c6ff);
      border: none;
      border-radius: 3px;
      font-family: 'Nunito', sans-serif;
      font-size: 1rem;
      color: #ffffff;
      transition: 0.25s;
      cursor: pointer;

      :hover {
        opacity: 0.5;
      }
    }

    .prompt {
      font-size: 0.875rem;
      color: #ffffff;

      a {
        color: #ffffff;
        transition: 0.25s;

        :hover {
          opacity: 0.5;
        }
      }
    }
  }
`;

export default LogInContainer;
