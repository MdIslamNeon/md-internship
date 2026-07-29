import React from "react";
import Skeleton from "./UI/Skeleton";

function AuthorBannerLoading() {
  return (
    <div className="d_profile de-flex">
      <div className="de-flex-col">
        <div className="profile_avatar">
          <Skeleton width="150px" height="150px" borderRadius="50%" />
          <i className="fa fa-check"></i>
          <div className="profile_name">
            <h4>
              <Skeleton width="150px" height="24px" />
              <span className="profile_username">
                <Skeleton width="120px" height="20px" />
              </span>
              <span id="wallet" className="profile_wallet">
                <Skeleton width="200px" height="20px" />
              </span>
              <Skeleton width="60px" height="32px" />
            </h4>
          </div>
        </div>
      </div>
      <div className="profile_follow de-flex">
        <div className="de-flex-col">
          <div className="profile_follower">
            <Skeleton width="100px" height="20px" />
          </div>
          <Skeleton width="110px" height="40px" />
        </div>
      </div>
    </div>
  );
}

export default AuthorBannerLoading;
