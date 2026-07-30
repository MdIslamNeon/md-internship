import React, { useEffect, useState } from "react";
import authorBannerImage from "../images/author_banner.jpg";
import AuthorBanner from "../components/AuthorBanner";
import AuthorBannerLoading from "../components/AuthorBannerLoading";
import AuthorItems from "../components/author/AuthorItems";
import { useParams } from "react-router-dom";
import axios from "axios";
import AuthorItemsLoading from "../components/AuthorItemsLoading";

const Author = () => {
  const { id } = useParams();
  const [authorData, setAuthorData] = useState({});
  const [loading, setLoading] = useState(true);
  const [counter, setCounter] = useState(0);
  const [updatedCount, setUpdatedCount] = useState(false);

  useEffect(() => {
    async function fetchAuthorData() {
      setLoading(true);
      try {
        const {data} = await axios.get(`https://us-central1-nft-cloud-functions.cloudfunctions.net/authors?author=${id}`);
        setAuthorData(data);
        setCounter(data.followers);
      } 
      catch (error) {
        console.log(error);
      } 
      finally {
        setLoading(false);
      }
    }
    fetchAuthorData();
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function updateCount() {
    setUpdatedCount(true);
    setCounter((prev) => prev + 1);
  }

  return (
    <div id="wrapper">
      <div className="no-bottom no-top" id="content">
        <div id="top"></div>

        <section
          id="profile_banner"
          aria-label="section"
          className="text-light"
          data-bgimage="url(images/author_banner.jpg) top"
          style={{ background: `url(${authorBannerImage}) top` }}
        ></section>

        <section aria-label="section" data-aos='fade-in'>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                {loading ? (
                  <AuthorBannerLoading />
                ) : (
                  <AuthorBanner
                    authorData={authorData}
                    updateCount={updateCount}
                    counter={counter}
                    updatedCount={updatedCount}
                  />
                )}
              </div>
              <div className="col-md-12">
                <div className="de_tab tab_simple">
                  {loading ? <AuthorItemsLoading /> : <AuthorItems nftCollections={authorData.nftCollection} authorImage={authorData.authorImage}/>}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Author;
