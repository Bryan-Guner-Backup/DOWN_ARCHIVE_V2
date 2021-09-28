import styled from 'styled-components';

const QuestionsContainer = styled.div`
  width: 400px;
  margin: 0 auto;
  margin-bottom: 64px;

  .room-title {
    h2 {
      color: #ffffff;
      margin-bottom: 1rem;
      font-size: 1.8rem;
    }
  }

  .room-banner {
    width: 100%;
    height: 30vh;
    object-fit: cover;
  }

  .room-description {
    color: #ffffff;
    font-size: 1.2rem;
    margin-top: 2rem;
  }

  .no-posts-found {
    display: flex;
    justify-content: center;
    align-items: center;

    p {
      margin: 64px 0;
      font-size: 1rem;
      font-weight: 500;
      color: #ffffff;
      display: flex;
      align-items: center;

      i {
        margin-right: 8px;
        font-size: 0.875rem;
      }
    }
  }

  .youve-reached-the-end {
    font-size: 1rem;
    font-weight: 500;
    color: #ffffff;
    text-align: center;
  }

  @media (min-width: 768px) {
    width: 70%;
  }

  @media (min-width: 1024px) {
    width: 900px;
  }
`;

export default QuestionsContainer;
