import React, { Component } from "./node_modules/react";

class UserItem extends Component {
  render() {
    return;
    <div className='card text-center'>
      <img
        src={avatar_url}
        alt=''
        className='round-img'
        style={{ width: "60px" }}
      />
      <h3>{login}</h3>

      <div>
        <a href={html_url} className='btn btn-dark btn-sm my-1s'>
          more
        </a>
      </div>
    </div>;
  }
}

export default UserItem;
