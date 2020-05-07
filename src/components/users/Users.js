import React from "react";
import UserItem from "./UserIteam";
import Spinner from "../layout/Spinner";

import PropTypes from "prop-types";

const Users = ({ users, loading }) => {
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={userStyle}>
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

Users.PropTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

const userStyle = {
  display: "grind",
  grindTemplateColumns: "repeat(3, 1fr)",
  grinGap: "1rem",
};
export default Users;
