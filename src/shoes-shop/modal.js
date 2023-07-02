import React, { Component } from "react";

export default class Modal extends Component {

    render() {
    const {productDetail} = this.props;
        return (
          <div
            className="modal fade"
            id="modelId"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="modelTitleId"
            aria-hidden="true"
          >
            <div
              className="modal-dialog"
              style={{ maxWidth: "1000px" }}
              role="document"
            >
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Product Detail</h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <table className="table">
                    <tbody>
                        <tr>
                            <td>Name : </td>
                            <td>{productDetail.name}</td>
                        </tr>
                        <tr>
                            <td>Price : </td>
                            <td>${productDetail.price}</td>
                        </tr>
                        <tr>
                            <td>Description : </td>
                            <td>{productDetail.description}</td>
                        </tr>
                        <tr>
                            <td>Quantity : </td>
                            <td>{productDetail.quantity} pcs</td>
                        </tr>
                    </tbody>
                  </table>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      }
}
