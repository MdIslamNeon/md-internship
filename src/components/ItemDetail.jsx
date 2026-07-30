import React from "react";
import { Link } from "react-router-dom";
import EthImage from "../images/ethereum.svg";

function ItemDetail({ itemDetails }) {
  return (
    <div className="row">
      <div className="col-md-6 text-center">
        <img
          src={itemDetails.nftImage}
          className="img-fluid img-rounded mb-sm-30 nft-image"
          alt=""
        />
      </div>
      <div className="col-md-6">
        <div className="item_info">
          <h2>{itemDetails.title} #{itemDetails.tag}</h2>
          <div className="item_info_counts">
            <div className="item_info_views">
              <i className="fa fa-eye"></i>
              {itemDetails.views}
            </div>
            <div className="item_info_like">
              <i className="fa fa-heart"></i>
              {itemDetails.likes}
            </div>
          </div>
          <p>{itemDetails.description}</p>
          <div className="d-flex flex-row">
            <div className="mr40">
              <h6>Owner</h6>
              <div className="item_author">
                <div className="author_list_pp">
                  <Link to={`/author/${itemDetails.ownerId}`}>
                    <img className="lazy" src={itemDetails.ownerImage} alt="" />
                    <i className="fa fa-check"></i>
                  </Link>
                </div>
                <div className="author_list_info">
                  <Link to={`/author/${itemDetails.ownerId}`}>{itemDetails.ownerName}</Link>
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
                  <Link to={`/author/${itemDetails.creatorId}`}>
                    <img
                      className="lazy"
                      src={itemDetails.creatorImage}
                      alt=""
                    />
                    <i className="fa fa-check"></i>
                  </Link>
                </div>
                <div className="author_list_info">
                  <Link to={`/author/${itemDetails.creatorId}`}>{itemDetails.creatorName}</Link>
                </div>
              </div>
            </div>
            <div className="spacer-40"></div>
            <h6>Price</h6>
            <div className="nft-item-price">
              <img src={EthImage} alt="" />
              <span>{itemDetails.price}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
