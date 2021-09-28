import React, { Component } from "react";
import Axios from "axios";
import MainContainer from "./feedcomponents/MainContainer";
import CreateComment from "./CreateComment";
import NavigationBar from "../navigationbar/navigationbar";
import MobileNav from "../../components/mobilenav/MobileNav";
import {FeedBox, Wrapper, NavCircle, PageTitle} from "./style";

export default class feed extends Component {
  constructor(props) {
    super(props);

    this.state = {
      feed: [],
      showCreateComment: false,
      id: 0,
    };
  }

  getFeed() {
    if (localStorage.getItem("token") !== undefined) {
      Axios.get("https://frozen-hamlet-18508.herokuapp.com/api/feed") //eventually change this to followers driven feed
        .then((res) => {
          this.setState({ ...this.state, feed: res.data.message });
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      Axios.get("https://frozen-hamlet-18508.herokuapp.com/api/feed")
        .then((res) => {
          this.setState({ ...this.state, feed: res.data.message });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  produceFeed() {
    let buffer = [];
    this.state.feed.forEach((obj) => {
      buffer.push(
        <MainContainer
          obj={obj}
          state={this.state}
          setState={this.setState.bind(this)}
        />
      );
    });
    return buffer;
  }

  componentDidMount() {
    this.getFeed();
  }

  render() {
    return (
      <Wrapper>
        {console.log(this.state.feed)}
        <NavCircle>
          <MobileNav />
        </NavCircle>
        <NavigationBar />
        {this.state.showCreateComment ? (
          <CreateComment
            state={this.state}
            setState={this.setState.bind(this)}
            id={this.state.id}
          />
        ) : null}
        <FeedBox>
          <PageTitle> Workout Feed </PageTitle>
          {this.produceFeed()}
        </FeedBox>
      </Wrapper>
    );
  }
}
