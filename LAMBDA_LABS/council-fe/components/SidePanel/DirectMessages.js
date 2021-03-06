import React from "react";
import firebase from "../../firebase";
// import {
//   List,
//   ListItem,
//   Icon,
//   Overlay,
//   Header,
//   Input,
//   Button
// } from "react-native-elements";
import { View, Text } from 'native-base';
import { connect } from "react-redux";
import { setCurrentChannel, setPrivateChannel } from "../../actions";

class DirectMessages extends React.Component {
  state = {
    user: this.props.currentUser,
    users: [],
    usersRef: firebase.firestore().ref("users"),
    connectedRef: firebase.firestore().ref(".info/connected"),
    presenceRef: firebase.firestore().ref("presence"),
    activeChannel: ""
  };

  componentDidMount() {
    if (this.state.user) {
      this.addListeners(this.state.user.uid);
    }
  }

  addListeners = currentUserUid => {
    let loadedUsers = [];
    this.state.usersRef.on("child_added", snap => {
      if (currentUserUid !== snap.key) {
        let user = snap.val();
        user["uid"] = snap.key;
        user["status"] = "offline";
        loadedUsers.push(user);
        this.setState({ users: loadedUsers });
      }
    });

    this.state.connectedRef.on("value", snap => {
      if (snap.val() === true) {
        const ref = this.state.presenceRef.child(currentUserUid);
        ref.set(true);
        ref.onDisconnect().remove(err => {
          if (err !== null) {
            console.error(err);
          }
        });
      }
    });

    this.state.presenceRef.on("child_added", snap => {
      if (currentUserUid !== snap.key) {
        this.addStatusToUser(snap.key);
      }
    });

    this.state.presenceRef.on("child_removed", snap => {
      if (currentUserUid !== snap.key) {
        this.addStatusToUser(snap.key, false);
      }
    });
  };

  addStatusToUser = (userId, connected = true) => {
    const updatedUsers = this.state.users.reduce((acc, user) => {
      if (user.uid === userId) {
        user["status"] = `${connected ? "online" : "offline"}`;
      }
      return acc.concat(user);
    }, []);
    this.setState({ users: updatedUsers });
  };

  isUserOnline = user => user.status === "online";

  changeChannel = user => {
    const channelId = this.getChannelId(user.uid);
    const channelData = {
      id: channelId,
      name: user.name
    };
    this.props.setCurrentChannel(channelData);
    this.props.setPrivateChannel(true);
    this.setActiveChannel(user.uid);
  };

  setActiveChannel = userId => {
    this.setState({ activeChannel: userId });
  };

  getChannelId = userId => {
    const currentUserId = this.state.user.uid;
    return userId < currentUserId
      ? `${userId}/${currentUserId}`
      : `${currentUserId}/${userId}`;
  };

  render() {
    const { users, activeChannel } = this.state;

    return (
      <View>
        {/* <Overlay>
          <ListItem>
            <span>
              <Icon name="mail" /> DIRECT MESSAGES
            </span>{" "}
            ({users.length})
          </ListItem>
          <List>
            {users.map(user => (
              <ListItem
                key={user.uid}
                disabled={user.uid === activeChannel}
                onPress={() => this.changeChannel(user)}
                containerStyle={{ opacity: 0.7, fontStyle: "italic" }}
              >
                <Icon
                  name="circle"
                  color={this.isUserOnline(user) ? "green" : "red"}
                />
                @ {user.name}
              </ListItem>
            ))}
          </List>
        </Overlay> */}
      </View>
    );
  }
}

export default connect(
  null,
  { setCurrentChannel, setPrivateChannel }
)(DirectMessages);
