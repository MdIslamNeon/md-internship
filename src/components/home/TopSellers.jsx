import React, { useEffect, useState } from "react";
import axios from "axios";
import TopSeller from "../TopSeller";
import TopSellerLoading from "../TopSellerLoading";

const TopSellers = () => {
  const [topSellers, setTopSellers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTopSellers() {
      try {
        const { data } = await axios.get(
          "https://us-central1-nft-cloud-functions.cloudfunctions.net/topSellers",
        );
        setTopSellers(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchTopSellers();
  }, []);

  return (
    <section id="section-popular" className="pb-5" data-aos="fade-in">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>Top Sellers</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
          <div className="col-md-12">
            <ol className="author_list">
              {loading
                ? new Array(12).fill(0).map((_, index) => (
                    <TopSellerLoading key={index} />
                  ))
                : topSellers.map((item) => (
                    <TopSeller key={item.id} item={item} />
                  ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopSellers;
