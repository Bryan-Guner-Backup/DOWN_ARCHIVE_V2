import styled from 'styled-components';

const EditRolesContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-top: 32px;
  margin-bottom: 32px;
  /* padding-left: 10%; */

  h2 {
    padding-bottom: 8px;
    margin-bottom: 8px;
    font-size: 1.25rem;
    font-weight: 700;
    color: #ffffff;
  }

  h3 {
    font-size: 1.5rem;
    color: #ffffff;
  }

  .roles-head {
    display: flex;
    flex-direction: column;
    align-items: center;
    h2 {
      width: 433px;
    }
  }
  .line {
    width: 90%;
    text-align: center;
    margin: 0 auto 1rem;
    border-bottom: 1px solid #2c2f33;
    
  }

  .buttons-head {
    display: flex;
    flex-direction: column;
    align-items: center;
    
    .create-role-button {
    padding: 10px 24px;
    margin-top: 0.4rem;
    margin-bottom: 2rem;
    margin-right: 18.7rem;
    background: linear-gradient(to right, #0084ff, #0099ff);
    border: none;
    border-radius: 3px;
    font-family: 'Nunito', sans-serif;
    font-size: 0.875rem;
    font-weight: 600;
    color: #ffffff;
    cursor: pointer;
    transition: 0.25s;

    i {
      margin-right: 4px;
      font-size: 0.75rem;
    }

    :hover {
      opacity: 0.7;
    }
  }
  .toggled {
    opacity: 0.5;
  }
  }
  .roles {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .role-title-bar {
    display: flex;
    width: 400px;
    justify-content: space-between;
    margin-bottom: 0px;

    .disabled {
      color: dimgray;
    }

    .buttons {
      display: flex;
      justify-content: flex-end;
      width: 120px;

      a {
        text-decoration: none;
        color: #ffffff;
        font-size: 1.1rem;
        background-color: #2C2F34;
        padding: 8px 10px 2px;
        margin-left: 8px;
        border-radius: 2px;

        :hover {
          color: dimgray;
        }
      }

      .success {
        background-color: #13bd5a;
        color: #2c2f33;
      }

      .bin-logo {
        width: 20px;
        filter: invert(100%);
        cursor: pointer;
        padding-bottom: 6px;

        :hover {
          opacity: 0.5;
        }
      }
      .hide {
        display: none;
      }
    }
  }

  .role-body {
    display: flex;
    margin-bottom: 3rem;
  }

  
  form {
    display: flex;
    flex-direction: column;
    width: 435px;

    .role-name-input {
      width: 92%;
    }
    .checkboxes {
      display: flex;

      .checkbox-container {
        margin-top: 1rem;
      }

      input[type='checkbox'] {
        margin-right: 0.4rem;
        border: 1px solid white;
      }

      label {
        position: relative;
        top: -1px;

        :disabled {
          color: dimgray;
        }
      }

      input:disabled + label {
        color: dimgray;
      }

      .check-col {
        display: flex;
        flex-direction: column;
        margin-right: 2rem;
      }
    }

    .error {
      margin-top: 4px;
      font-size: 0.875rem;
      font-weight: 600;
      color: #ea4335;
      animation: fadeOut ease 5s;
    }

    @keyframes fadeOut {
      0% {
        opacity: 0;
      }
      10% {
        opacity: 1;
      }
      50% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }

    .success-message {
      color: #14e069;
      margin-bottom: 1rem;
      animation: fadeOut ease 5s;
    }

    input {
      padding: 10px;
      background-color: #2c2f33;
      border: none;
      border-radius: 3px;
      font-family: 'Nunito', sans-serif;
      font-size: 1rem;
      font-weight: 500;
      color: #ffffff;

      :disabled {
        color: dimgray;
      }

      ::placeholder {
        color: dimgray;
      }
    }

    label {
      margin: 5px 0 4px;
      font-size: 1rem;
      font-weight: 500;
      color: #ffffff;
    }

    label.disabled {
      color: dimgray;
    }

    .buttons {

      .edit-role {
        padding: 10px 24px;
        background-color: #2c2f33;
        border: none;
        border-radius: 3px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
          0 6px 20px 0 rgba(0, 0, 0, 0.19);
        font-family: 'Nunito', sans-serif;
        font-size: 0.875rem;
        font-weight: 600;
        color: #ffffff;
        transition: 0.25s;
        cursor: pointer;

        i {
          margin-right: 4px;
          font-size: 0.625rem;
        }

        :disabled {
          color: gray;
        }

        :hover {
          opacity: 0.5;
        }
      }
      .success {
        background-color: #14e069;
        color: #2c2f33;
      }
    }
    .ok-button {
      padding: 10px 24px;
      margin-bottom: 16px;
      background-color: #2c2f33;
      border: none;
      border-radius: 3px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
        0 6px 20px 0 rgba(0, 0, 0, 0.19);
      font-family: 'Nunito', sans-serif;
      font-size: 0.875rem;
      font-weight: 600;
      color: #ffffff;
      transition: 0.25s;
      cursor: pointer;
      margin-left: 9rem;
    } 
  }

  .create-role {
    padding: 5% 0;
    border-bottom: 1px solid #2c2f34;
    margin-bottom: 2rem;
  }

  @media (min-width: 768px) {
    width: 95%;
  }

  @media (min-width: 1024px) {
    width: 972.8px;
  }
`;

export default EditRolesContainer;
