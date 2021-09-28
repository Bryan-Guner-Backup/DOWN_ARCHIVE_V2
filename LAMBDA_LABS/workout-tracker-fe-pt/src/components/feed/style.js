import styled from "styled-components";

export const CommentForm = styled.div`
  position: fixed;
  z-index: 2;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Svg = styled.svg`
  fill: rgb(29, 161, 242);
  cursor: pointer;
`;

export const Background = styled.div`
  position: fixed;
  z-index: 2;
  height: 100vh;
  width: 100%;
  opacity: 0.7;
  background-color: gray;
  border-bottom: 2px solid gray;
  background-color: rgb(21, 32, 43);
`;

export const Top = styled.div`
  width: 100%;
  height: 2em;
  border-bottom: 2px solid gray;
  background-color: rgb(21, 32, 43);
  display: flex;
  line-height: 2em;
`;

export const MiddleComment = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  background-color: rgb(21, 32, 43);
  color: white;
`;

export const Ico = styled.img`
  width: 25px;
  height: 25px;
`;

export const Name = styled.h1`
  padding-left: 0.5em;
  text-transform: capitalize;
`;

export const Container = styled.div`
  width: 100%;
  cursor: pointer;
  background: white;
  box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.1), 0 3px 20px 0 rgba(0, 0, 0, 0.1);
  padding: 1rem;
  margin-top: 1rem;
  h1 {
    text-align: left;
    text-transform: capitalize;
  }
`;
export const Title = styled.div`
  display: flex;
  align-items: center;
`;

export const Content = styled.div`
  padding-left: 2em;
  padding-bottom: 1em;
  width: 100%;
  border-bottom: 1px solid gray;
`;

export const Bottom = styled.div`
  width: 100%;
  height: 3em;
  border-top: 2px solid gray;
  background-color: rgb(21, 32, 43);
  display: flex;
  color: white;
  justify-content: flex-end;
  line-height: 2.5em;
  align-items: center;
`;

export const Submit = styled.div`
  padding: 0 0.5em;
  margin-right: 1em;
  background-color: rgb(29, 161, 242);
  border-radius: 10px;
  height: 90%;
  cursor: pointer;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
`;

export const Middle = styled.div`
  display: flex;
  width: 75%;
  justify-content: center;
  flex-direction: column;
`;

export const Input = styled.div`
  width: 100%;
  height: 20em;
  background-color: rgb(21, 32, 43);
  padding-top: 5%;
`;

export const TextArea = styled.div`
  margin-left: 8%;
  width: 90%;
  height: 100%;
  color: white;
  background-color: rgb(21, 32, 43);
  word-wrap: break-word;
  overflow-wrap: break-word;
  line-height: 20px;
  white-space: normal;
  opacity: 0.7;
`;

export const Comment = styled.div`
  padding-left: 1em;
  border-left: 1px solid black;
  margin-left: 10px;
`;

export const FeedBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 75%;
  margin: 0 auto;
  margin-top: 25%;
  @media (min-width: 600px) {
    margin-top: 20%;
  }
  @media (min-width: 768px) {
    margin-top: 0%;
  }
`;

export const PageTitle = styled.h2 `
font-size: 24px;
margin-bottom: 1.5rem;
@media (min-width: 768px) {
margin-top: 2.5rem;
}
`

export const Buttons = styled.button `
border: none;
background: #277fe5;
color: white;
border-radius: .2rem;
margin: .5rem .3rem 0rem 0rem;
padding: .5rem;
cursor: pointer;
:hover {
  opacity: .7;
}
`

//MobileNav
export const NavCircle = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
`;
