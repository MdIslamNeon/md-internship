import React from "react";
import Skeleton from "./UI/Skeleton.jsx";

function ExploreItemsLoading() {
  return (
    <>
      <div>
        <select id="filter-items" defaultValue="">
          <option value="">Default</option>
          <option value="price_low_to_high">Price, Low to High</option>
          <option value="price_high_to_low">Price, High to Low</option>
          <option value="likes_high_to_low">Most liked</option>
        </select>
      </div>
      {new Array(8).fill(0).map((_, index) => (
        <div
          key={index}
          className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12"
          style={{ display: "block", backgroundSize: "cover" }}
        >
          <div className="nft__item">
            <div className="author_list_pp">
              <Skeleton width="50px" height="50px" borderRadius="50%" />
            </div>
            <div className="nft__item_wrap">
              <Skeleton width="100%" height="250px" />
            </div>
            <div className="nft__item_info">
              <div>
                <Skeleton width="100px" height="20px" />
              </div>
              <Skeleton width="60px" height="20px" />

              <div className="nft__item_price"><Skeleton width='20px'/></div>
              <div className="nft__item_like">
                <span><Skeleton width='10px' /></span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default ExploreItemsLoading;
