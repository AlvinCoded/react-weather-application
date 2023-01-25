import React from "react";
import Loader from "react-loader-spinner";

export default function Loading() {
  return (
    <div className="Loading">
      <div className="row">
        <div className="col text-center">
          <div className="card">
            <div className="card-body">
              <Loader
                type="RevolvingDot"
                color="#00BFFF"
                height={100}
                width={100}
                timeout={0} //3 secs
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
