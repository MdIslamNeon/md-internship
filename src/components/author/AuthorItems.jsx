import React from "react";
import { Link } from "react-router-dom";

const AuthorItems = ({nftCollections, authorImage}) => {
  return (
    <div className="de_tab_content">
      <div className="tab-1">
        <div className="row">
          {nftCollections.map((nftObject) => (
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" key={nftObject.id}>
              <div className="nft__item">
                <div className="author_list_pp">
                  <Link to="">
                    <img className="lazy" src={authorImage} alt="" />
                    <i className="fa fa-check"></i>
                  </Link>
                </div>
                <div className="nft__item_wrap">
                  
                  <Link to="/item-details">
                    <img
                      src={nftObject.nftImage}
                      className="lazy nft__item_preview"
                      alt=""
                    />
                  </Link>
                </div>
                <div className="nft__item_info">
                  <Link to="/item-details">
                    <h4>{nftObject.title}</h4>
                  </Link>
                  <div className="nft__item_price">{nftObject.price} ETH</div>
                  <div className="nft__item_like">
                    <i className="fa fa-heart"></i>
                    <span>{nftObject.likes}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AuthorItems;
