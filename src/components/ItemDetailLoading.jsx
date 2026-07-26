import React from "react";
import Skeleton from "./UI/Skeleton";

function ItemDetailLoading() {
  return (
    <div className="row">
      <div className="col-md-6 text-center">
        <Skeleton width="100%" height="600px" borderRadius="8px" />
      </div>
      <div className="col-md-6">
        <div className="item_info">
          <Skeleton width="60%" height="40px" />
          <div className="item_info_counts">
            <Skeleton width="80px" height="30px" borderRadius="4px" />
            <Skeleton width="80px" height="30px" borderRadius="4px" />
          </div>
          <div className="mb-3">
            <Skeleton width="100%" height="18px" />
            <div className="mt-2">
              <Skeleton width="100%" height="18px" />
            </div>
            <div className="mt-2">
              <Skeleton width="70%" height="18px" />
            </div>
          </div>
          <div className="d-flex flex-row">
            <div className="mr40">
              <h6>Owner</h6>
              <div className="item_author">
                <div className="author_list_pp">
                  <Skeleton width="50px" height="50px" borderRadius="50%" />
                </div>
                <div className="author_list_info">
                  <Skeleton width="100px" height="20px" />
                </div>
              </div>
            </div>
            <div></div>
          </div>
          <div className="de_tab tab_simple">
            <div className="de_tab_content">
              <h6>Creator</h6>
              <div className="item_author">
                <div className="author_list_pp">
                  <Skeleton width="50px" height="50px" borderRadius="50%" />
                </div>
                <div className="author_list_info">
                  <Skeleton width="100px" height="20px" />
                </div>
              </div>
            </div>
            <div className="spacer-40"></div>
            <h6>Price</h6>
            <div className="nft-item-price">
              <Skeleton width="70px" height="20px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetailLoading;