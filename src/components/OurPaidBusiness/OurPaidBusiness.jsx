import React from 'react'
import greatKLogo from "../../assets/images/main-logo.png"; // Adjust path accordingly
import smallLogo from "../../assets/images/main-logo.png"; // Adjust path accordingly

export default function OurPaidBusiness() {
  return (
    <div className="container md-5 ">
      <div>
        <div className="d-flex justify-content-between align-items-center">
          <span>
            <img className="small-logo  my-4" src={smallLogo} alt="" />
          </span>
          <h5 className="text-center  mt-2 my-4 flex-grow-1" style={{ color: '#A36B05' }}>HOME</h5>
        </div>

        <div className="image-container">
          <img
            src={greatKLogo}
            className="great-k-logo-main image-fluid"
            alt="Description of the image"
          />{" "}
        </div>
      </div>
    </div>
  )
}
