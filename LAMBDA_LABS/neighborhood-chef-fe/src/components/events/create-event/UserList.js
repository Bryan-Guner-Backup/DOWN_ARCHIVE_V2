import React from "react";
import { useSelector } from "react-redux";

import InvitedUser from "./InvitedUser.js";
import UninvitedUser from "./UninvitedUser.js";

const UserList = ({ event, filteredList }) => {
  const invitedList = useSelector((state) => state.inviteList);

  return (
    <>
      {invitedList
        .sort((a, b) => a.firstName.localeCompare(b.firstName))
        .map((user) => {
          return (
            Number(user.id) !== event.user_id && (
              <InvitedUser key={user.id} user={user} />
            )
          );
        })}
      {filteredList
        .sort((a, b) => a.firstName.localeCompare(b.firstName))
        .map((user) => {
          return (
            Number(user.id) !== event.user_id && (
              <UninvitedUser key={user.id} user={user} />
            )
          );
        })}
    </>
  );
};

export default UserList;
