import React from "react";
import Skeleton from "./UI/Skeleton";
import { Link } from "react-router-dom";

function HotCollectionsLoading() {
  return (
    <>
      <div className="nft_coll">
        <div className="nft_wrap">
          <Skeleton width="100%" height="200px" />
        </div>
        <div className="nft_coll_pp">
          <Skeleton width="60px" height="60px" borderRadius="50%" />
        </div>
        <div className="nft_coll_info">
          <div>
            <Skeleton width="100px" height="20px" />
            {/* title  — font-size 16px */}
          </div>
          <Skeleton width="60px" height="16px" />
          {/* code   — font-size 14px */}
        </div>
      </div>
    </>
  );
}

export default HotCollectionsLoading;
