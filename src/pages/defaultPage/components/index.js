import React from "react";
import "../../global.css";
import "./defaultPage.css";
export const DefaultScreen = ({ onSubmit, info } = this.props) => {
  // if(info.){

  // }
  return (
    <div className="div-main d-flex justify-content-center">
      <div className="card w-50 ">
        <div className="card-body ">
          <h1 className="card-title text-center mb-5" style={info.house.color}>
            {info.house.name}
          </h1>
          <img src={info.house.image} alt="img" className="img" />
          <button className="btn btn-success w-100 mt-3" onClick={onSubmit}>
            Saiba qual é casa que você pertence em Hogwarts
          </button>
        </div>
      </div>
    </div>
  );
};
