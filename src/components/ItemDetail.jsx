import React from "react";
import { Link } from "react-router-dom";
import EthImage from "../images/ethereum.svg";

function ItemDetail({ item }) {
  return (
    <div className="row">
      <div className="col-md-6 text-center">
        <img
          src={item.nftImage}
          className="img-fluid img-rounded mb-sm-30 nft-image"
          alt=""
        />
      </div>
      <div className="col-md-6">
        <div className="item_info">
          <h2>{item.title}</h2>

          <div className="item_info_counts">
            <div className="item_info_views">
              <i className="fa fa-eye"></i>
              {item.views}
            </div>
            <div className="item_info_like">
              <i className="fa fa-heart"></i>
              {item.likes}
            </div>
          </div>
          <p>{item.description}</p>
          <div className="d-flex flex-row">
            <div className="mr40">
              <h6>Owner</h6>
              <div className="item_author">
                <div className="author_list_pp">
                  <Link to="/author">
                    <img className="lazy" src={item.ownerImage} alt="" />
                    <i className="fa fa-check"></i>
                  </Link>
                </div>
                <div className="author_list_info">
                  <Link to="/author">{item.ownerName}</Link>
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
                  <Link to="/author">
                    <img className="lazy" src={item.creatorImage} alt="" />
                    <i className="fa fa-check"></i>
                  </Link>
                </div>
                <div className="author_list_info">
                  <Link to="/author">{item.creatorName}</Link>
                </div>
              </div>
            </div>
            <div className="spacer-40"></div>
            <h6>Price</h6>
            <div className="nft-item-price">
              <img src={EthImage} alt="" />
              <span>{item.price}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
