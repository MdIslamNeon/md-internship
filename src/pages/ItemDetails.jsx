import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ItemDetail from "../components/ItemDetail";
import ItemDetailLoading from "../components/ItemDetailLoading";

const ItemDetails = () => {
  const { id } = useParams();
  const [itemDetails, setItemDetails] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchItemDetails() {
      setLoading(true);
      try {
        const { data } = await axios.get(
          `https://us-central1-nft-cloud-functions.cloudfunctions.net/itemDetails?nftId=${id}`,
        );
        setItemDetails(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchItemDetails();
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div id="wrapper" data-aos='fade-in'>
      <div className="no-bottom no-top" id="content">
        <div id="top"></div>
        <section aria-label="section" className="mt90 sm-mt-0">
          <div className="container">
            {loading ? (
              <ItemDetailLoading />
            ) : (
              <ItemDetail itemDetails={itemDetails} />
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ItemDetails;
