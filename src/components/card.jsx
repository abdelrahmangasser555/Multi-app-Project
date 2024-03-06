import React from "react";
import { Link } from "react-router-dom";

export default function Card({ title, description, link, image }) {
  return (
    <Link to={link}>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={image ? image : "https://picsum.photos/200"}
            alt="Shoes"
            className="image-in-card rounded-xl shadow-lg"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <div className="card-actions">
            <button className="btn btn-goust">try {title}</button>
          </div>
        </div>
      </div>
    </Link>
  );
}
