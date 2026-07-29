import React from "react";
import Skeleton from './UI/Skeleton.jsx'

function TopSellerLoading() {
  return (
    <li>
      <div className="author_list_pp">
        <Skeleton width='50px' height='50px' borderRadius='50%' />
        <i className="fa fa-check"></i>
      </div>
      <div className="author_list_info">
        <Skeleton width='90px' height='20px' />
        <span><Skeleton width='35px' height='20px'/></span>
      </div>
    </li>
  );
}

export default TopSellerLoading;
