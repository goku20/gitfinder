import React, { useContext } from "react";
import UserItem from "./UserIteam";
import Spinner from "../layout/Spinner";
import GithubContext from "../../context/github/guthubContext";

const Users = () => {
  const GithubContext = useContext(GithubContext);

  const { loading, users } = githubContext;

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

const userStyle = {
  display: "grind",
  grindTemplateColumns: "repeat(3, 1fr)",
  grinGap: "1rem",
};
export default Users;
