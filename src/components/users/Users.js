import React, { Component } from "react";
import UserItem from "./UserIteam";
class Users extends Component {
  //   state = {
  //     users: [
  //       {
  //         id: "1",
  //         login: "guru",
  //         avatar_url:
  //           "https://avatars2.githubusercontent.com/u/56821782?s=400&v=4",
  //         html_url: "https://github.com/goku20",
  //       },
  //       {
  //         id: "2",
  //         login: "mojombo",
  //         avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
  //         html_url: "https://github.com/mojombo",
  //       },
  //       {
  //         id: "3",
  //         login: "defunk",
  //         avatar_url: "https://avatars0.githubusercontent.com/u/3?v=4",
  //         html_url: "https://github.com/defunkt",
  //       },
  //       {
  //         id: "4",
  //         login: "wycats",
  //         avatar_url: "https://avatars0.githubusercontent.com/u/4?v=4",
  //         html_url: "s://github.com/wycats",
  //       },
  //     ],
  //   };

  render() {
    return (
      // <div style={userStyle}>
      //   {this.state.users.map(user => (
      //     <UserItem key={user.id} user={user} />
      //   ))}
      // {/* </div> */}
      <div style={userStyle}>
        {this.props.users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
}
const userStyle = {
  display: "grind",
  grindTemplateColumns: "repeat(3, 1fr)",
  grinGap: "1rem",
};
export default Users;
