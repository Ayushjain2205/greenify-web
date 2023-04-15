import React from "react";

const TipCard = ({ name, image, categories, description, modalData }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Tip" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {name}
          <div className="badge badge-error">High</div>
        </h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          {categories.map((tag) => (
            <div className="badge badge-outline gap-2">{tag}</div>
          ))}
        </div>
        <div className="card-actions justify-end">
          <label htmlFor="my-modal-4" className="btn btn-block btn-ghost mt-4">
            More details
          </label>
        </div>
      </div>
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <h3 className="text-lg font-bold">{modalData.title}</h3>
          <p className="py-4">{modalData.text}</p>
          <br />
          <ul>
            {modalData.points.map((point) => (
              <li className="py-2 italic">{point}</li>
            ))}
          </ul>
          <ul>
            {modalData.links.map((link) => (
              <a href={link} className="py-2 italic btn btn-link">
                Addtional Reading
              </a>
            ))}
          </ul>
        </label>
      </label>
    </div>
  );
};

export default TipCard;
