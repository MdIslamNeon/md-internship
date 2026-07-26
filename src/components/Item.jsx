import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Item({ item }) {
  const [time, setTime] = useState(0);

  useEffect(() => {
    function calculateTime() {
      if (!item.expiryDate) {
        setTime(null);
        return;
      }
      setTime(Math.max(item.expiryDate - Date.now(), 0));
    }
    calculateTime();
    const id = setInterval(calculateTime, 1000);
    return () => clearInterval(id);
  }, [item.expiryDate]);

  const totalSeconds = Math.floor(time / 1000);

  const seconds = totalSeconds % 60
  const minutes = Math.floor(totalSeconds / 60) % 60
  const hours = Math.floor(totalSeconds / 3600)

  return (
    <div className="px-2">
      <div className="nft__item">
        <div className="author_list_pp">
          <Link
            to="/author"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Creator: Monica Lucas"
          >
            <img className="lazy" src={item.authorImage} alt="" />
            <i className="fa fa-check"></i>
          </Link>
        </div>
        {time ? <div className="de_countdown">{hours}h {minutes}m {seconds}s</div> : <></>}
    
        <div className="nft__item_wrap">
          <div className="nft__item_extra">
            <div className="nft__item_buttons">
              <button>Buy Now</button>
              <div className="nft__item_share">
                <h4>Share</h4>
                <a href="/" target="_blank" rel="noreferrer">
                  <i className="fa fa-facebook fa-lg"></i>
                </a>
                <a href="/" target="_blank" rel="noreferrer">
                  <i className="fa fa-twitter fa-lg"></i>
                </a>
                <a href="/">
                  <i className="fa fa-envelope fa-lg"></i>
                </a>
              </div>
            </div>
          </div>

          <Link to="/item-details">
            <img
              src={item.nftImage}
              className="lazy nft__item_preview"
              alt=""
            />
          </Link>
        </div>
        <div className="nft__item_info">
          <Link to="/item-details">
            <h4>{item.title}</h4>
          </Link>
          <div className="nft__item_price">{item.price} ETH</div>
          <div className="nft__item_like">
            <i className="fa fa-heart"></i>
            <span>{item.likes}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
