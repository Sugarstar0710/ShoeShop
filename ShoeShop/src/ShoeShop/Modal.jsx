import React from "react";

export default function ModalDetail({ content }) {
  if (!content) return null;

  return (
    <div
      className="modal fade show"
      style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
      tabIndex="-1"
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{content.name}</h5>
            <button
              type="button"
              className="btn-close"
              onClick={() => window.location.reload()} // hoặc setStateModal(null)
            ></button>
          </div>
          <div className="modal-body">
            <img
              src={content.image}
              alt={content.name}
              className="img-fluid mb-3"
            />
            <p><strong>Price:</strong> {content.price}$</p>
            <p><strong>Description:</strong> {content.description}</p>
            <p><strong>Short Desc:</strong> {content.shortDescription}</p>
            <p><strong>Quantity:</strong> {content.quantity}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
