import React from 'react';

import "./Style.css";

const UserProfile = (props) => {
    return (
      <div className="user_profile">
        <img
          className="p-2 avatar"
          src={props.image}
          width="150"
          height="150"
          alt="profileImage"
        />
        <div className="userProfileDetails">
          <h5 className="text-center">{props.name}</h5>
          <div className="userInfo">
            <div className="userProfileDetail">
              <i className="fa fa-map-marker pr-1" />
              <span>{props.location} . </span>
            </div>

            <div className="userProfileDetail">
              <i className="fa fa-globe pr-1" />
              <span>{props.blog}. </span>
            </div>

            <div className="userProfileDetail">
              <i className="fa fa-twitter pr-1" />
              <span>{props.twitter} . </span>
            </div>

            <div className="userProfileDetail">
              <i className="fa fa-group pr-1" />
              <span> {props.followers} Followers . </span>
            </div>

            <div className="userProfileDetail">
              <i className="fa fa-heart pr-1" />
              <span> {props.following} Following . </span>
            </div>
          </div>
        </div>
      </div>
    );
}

export default UserProfile;