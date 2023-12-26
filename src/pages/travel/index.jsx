import React from "react";
import "./index.scss";
import { FaRegComment, FaRegHeart } from "react-icons/fa";
const Travel = () => {
  return (
    <div className="travel">
      <div className="travelText">
        <h3 className="travel-h3">Hot topics from Travel Section</h3>
        <p className="travel-p1">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et <br /> dolore magna aliqua.
        </p>
      </div>
      <div className="card">
        <div className="card-left">
          <p className="travel-p2">
            20 <br /> Dec
          </p>
        </div>
        <div className="card-right">
          <h4 className="travel-h4">
            Addiction When Gambling <br /> Becomes A Problem
          </h4>
          <p className="travel-p3">
            inappropriate behavior Lorem ipsum dolor sit amet, consectetur.
          </p>
          <div className="card-right-icon">
            <p>
              <FaRegHeart />
            </p>
            <p>15 Likes</p>
            <p>
              <FaRegComment />
            </p>
            <p>02 Comments</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Travel;
