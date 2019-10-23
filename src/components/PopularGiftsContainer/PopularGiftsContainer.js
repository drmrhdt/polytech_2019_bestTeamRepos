import React from "react";
import Loader from "@components/Loader";
import products from "@data/PopularProductsInfo/mock.js";
import SectionName from "./SectionName";
import List from "@components/List";
import styles from "./PopularGiftsContainer.module.scss";

class PopularGiftsContainer extends React.Component {
  render() {
    if (products.length) {
      return (
        <div>
          <SectionName title="Популярное" />
          <List products={products} />
        </div>
      );
    }
    return <Loader />;
  }
}

export default PopularGiftsContainer;
