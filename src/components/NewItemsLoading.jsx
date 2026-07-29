import React from "react";
import Skeleton from "./UI/Skeleton";

function NewItemsLoading() {
  return (
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
      </div>
    </div>
  );
}

export default NewItemsLoading;
