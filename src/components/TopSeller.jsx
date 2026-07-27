import React from "react";
import { Link } from "react-router-dom";

function TopSeller({ item }) {
  return (
    <li key={item.id}>
      <div className="author_list_pp">
        <Link to="/author">
          <img className="lazy pp-author" src={item.authorImage} alt="" />
          <i className="fa fa-check"></i>
        </Link>
      </div>
      <div className="author_list_info">
        <Link to="/author">{item.authorName}</Link>
        <span>{item.price} ETH</span>
      </div>
    </li>
  );
}

export default TopSeller;
