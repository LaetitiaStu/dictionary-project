import React from "react";
import "./Images.css";

export default function Images(props) {
  if (props.images) {
    return (
      <section className="Images">
        <div className="row">
          {props.images.map(function (image, index) {
            return (
              <div className="col-3">
                <a href={image.src.landscape} target="_blank">
                  <img
                    key={index}
                    src={image.src.landscape}
                    className="img-fluid"
                    alt={props.images.alt}
                  />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
