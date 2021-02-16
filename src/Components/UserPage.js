import React from "react";
import Navbar from "./Navbar";
import Repositories from "./Repositories";
import Tabs from "./Tabs";
import UserProfile from "./UserProfile";
import Search from "./Search";
import avatar from "./avatar.svg"


function UserPage(props) {
  

  return (
    <div>
      <Navbar image={props.user ? props.user.avatarUrl : avatar } userName={props.user ? props.user.login : '' }>
        <Search onSearch={props.onSearch} />

      </Navbar>
      {props.user && <>
        <UserProfile
          name={props.user.name}
        image={props.user.avatarUrl}
        location={props.user.location}
        blog={props.user.websiteUrl}
        twitter={props.user.twitterUsername}
        followers={props.user.followers.totalCount}
        following={props.user.following.totalCount}
      />
      <Tabs />
      <Repositories repositories={props.user.repositories.nodes} />
      </>}
     
    </div>
  );
}

export default UserPage;
