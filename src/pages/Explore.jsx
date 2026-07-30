import React, { useEffect, useState } from "react";
import SubHeader from "../images/subheader.jpg";
import ExploreItems from "../components/explore/ExploreItems";
import axios from "axios";
import ExploreItemsLoading from "../components/ExploreItemsLoading";

const Explore = () => {

  const [exploreItems, setExploreIems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortMethod, setSortMethod] = useState('');

  useEffect(() => {
    async function fetchExploreItems() {
      setLoading(true);
      try {
        const {data} = await axios.get(`https://us-central1-nft-cloud-functions.cloudfunctions.net/explore?filter=${sortMethod}`);
        setExploreIems(data);
      }
      catch (error) {
        console.log(error);
      }
      finally {
        setLoading(false);
      }
    }
    fetchExploreItems();
  }, [sortMethod]);


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function setSortedOption(event) {
    setSortMethod(event.target.value);
  }

  return (
    <div id="wrapper" data-aos='fade-in'>
      <div className="no-bottom no-top" id="content">
        <div id="top"></div>

        <section
          id="subheader"
          className="text-light"
          style={{ background: `url("${SubHeader}") top` }}
        >
          <div className="center-y relative text-center">
            <div className="container">
              <div className="row">
                <div className="col-md-12 text-center">
                  <h1>Explore</h1>
                </div>
                <div className="clearfix"></div>
              </div>
            </div>
          </div>
        </section>

        <section aria-label="section">
          <div className="container">
            <div className="row">
              {loading ? <ExploreItemsLoading /> : <ExploreItems exploreItems={exploreItems} sort={setSortedOption}/>}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Explore;
