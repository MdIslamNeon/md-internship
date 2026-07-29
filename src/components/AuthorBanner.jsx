import React from "react";
import { Link } from "react-router-dom";

function AuthorBanner({ authorData, updateCount, counter, updatedCount }) {
  return (
    <div className="d_profile de-flex">
      <div className="de-flex-col">
        <div className="profile_avatar">
          <img src={authorData.authorImage} alt="" />
          <i className="fa fa-check"></i>
          <div className="profile_name">
            <h4>
              {authorData.authorName}
              <span className="profile_username">@{authorData.tag}</span>
              <span id="wallet" className="profile_wallet">
                {authorData.address}
              </span>
              <button id="btn_copy" title="Copy Text">
                Copy
              </button>
            </h4>
          </div>
        </div>
      </div>
      <div className="profile_follow de-flex">
        <div className="de-flex-col">
          <div className="profile_follower">{counter} followers</div>
          <Link to="#" className="btn-main" onClick={updateCount}>
            {updatedCount ? "Unfollow" : "Follow"}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AuthorBanner;
