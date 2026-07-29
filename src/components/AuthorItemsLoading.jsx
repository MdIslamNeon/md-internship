import React from "react";
import Skeleton from "./UI/Skeleton";

function AuthorItemsLoading() {
  return (
    <div className="de_tab_content">
      <div className="tab-1">
        <div className="row">
          {new Array(8).fill(0).map((_, index) => (
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" key={index}>
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

                  <div className="nft__item_price"><Skeleton width="50px" height="20px" /></div>
                  <div className="nft__item_like">
                    <Skeleton width="10px" height="10px" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AuthorItemsLoading;
