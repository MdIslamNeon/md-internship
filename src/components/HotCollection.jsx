import React from "react";
import { Link } from "react-router-dom";

function HotCollection({ nft }) {
  return (
    <div key={nft.id}>
      <div className="nft_coll">
        <div className="nft_wrap">
          <Link to={`/item-details/${nft.nftId}`}>
            <img src={nft.nftImage} className="lazy img-fluid" alt="" />
          </Link>
        </div>
        <div className="nft_coll_pp">
          <Link to="/author">
            <img className="lazy pp-coll" src={nft.authorImage} alt="" />
          </Link>
          <i className="fa fa-check"></i>
        </div>
        <div className="nft_coll_info">
          <Link to="/explore">
            <h4>{nft.title}</h4>
          </Link>
          <span>ERC-{nft.code}</span>
        </div>
      </div>
    </div>
  );
}

export default HotCollection;
