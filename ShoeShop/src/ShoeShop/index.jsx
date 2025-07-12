import  { useState } from "react";
import ProductList from "./ProductList";
import ModalDetail from "./Modal";
import data from "./data.json";

export default function ShoesStore() {
  const [productDetail, setProductDetail] = useState(null);

  const setStateModal = (product) => {
    setProductDetail(product);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Shoes shop</h2>
      <ProductList productsData={data} setStateModal={setStateModal} />
      <ModalDetail content={productDetail} />
    </div>
  );
}
