import React from "react";

export default function ProductItem({ item, setStateModal }) {
  return (
    <div className="card h-100 shadow-sm">
      <img
        src={item.image}
        alt={item.name}
        className="card-img-top p-3"
        style={{ height: "220px", objectFit: "contain", cursor: "pointer" }}
        onClick={() => setStateModal(item)}
      />
      <div className="card-body text-center">
        <h5>{item.name}</h5>
        <p>{item.price}$</p>
        <button
          className="btn btn-dark"
          onClick={() => setStateModal(item)}
        >
          add to cart 
        </button>
      </div>
    </div>
  );
}
