import React, { Component } from "react";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import SHOP_DATA from "./shopPage.data";
import "./shopPage.styles.scss";

class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: [...SHOP_DATA]
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <div>
        {collections.map(collection => {
          return <CollectionPreview {...collection} />;
        })}
      </div>
    );
  }
}

export default Shop;
