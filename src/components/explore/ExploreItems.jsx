import React, { useState } from "react";
import { Link } from "react-router-dom";
import ExploreItem from "../ExploreItem";

const ExploreItems = ({ exploreItems, sort }) => {
  const [visibleCount, setVisibleCount] = useState(8);

  const visibleItems = exploreItems.slice(0, visibleCount);
  const hasMore = visibleCount < exploreItems.length;

  function showMoreCards(event) {
    event.preventDefault();
    setVisibleCount((count) => count + 4);
  }

  return (
    <>
      <div>
        <select id="filter-items" defaultValue="" onChange={sort}>
          <option value="">Default</option>
          <option value="price_low_to_high">Price, Low to High</option>
          <option value="price_high_to_low">Price, High to Low</option>
          <option value="likes_high_to_low">Most liked</option>
        </select>
      </div>
      {visibleItems.map((item) => (
        <ExploreItem key={item.id} item={item} />
      ))}
      {hasMore && (
        <div className="col-md-12 text-center">
          <Link
            to=""
            id="loadmore"
            className="btn-main lead"
            onClick={showMoreCards}
          >
            Load more
          </Link>
        </div>
      )}
    </>
  );
};

export default ExploreItems;
