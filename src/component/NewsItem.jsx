import React, { useState } from "react";
import newsImg from "/news.jpg"; // or use "/news.jpg" if it’s in public/

const NewsItem = ({ title, description, imgSrc, url }) => {
  const [imgLoading, setImgLoading] = useState(true);
  const [imgError, setImgError] = useState(false);

  // Handler when the img successfully loads
  const handleImageLoad = () => {
    setImgLoading(false);
  };

  // Handler if the img fails to load
  const handleImageError = () => {
    setImgLoading(false);
    setImgError(true);
  };

  // Decide which src to use (article’s img or fallback)
  const finalImgSrc = imgError || !imgSrc ? newsImg : imgSrc;

  return (
    <div
      className="card"
      style={{
        width: "300px",
        flex: "0 0 auto",
        border: "2.5px solid yellow",
        background: "#fffacd",
        color: "black",
      }}
    >
      <div className="position-relative" style={{ minHeight: "180px" }}>
        {imgLoading && (
          <div
            className="d-flex justify-content-center align-items-center"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "#002147",
            }}
          >
            <div className="spinner-border text-purple" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}

        <img
          src={finalImgSrc}
          className="card-img-top"
          alt={title}
          onLoad={handleImageLoad}
          onError={handleImageError}
          style={{
            display: imgLoading ? "none" : "block",
            maxHeight: "180px",
            objectFit: "cover",
            width: "100%",
          }}
        />
      </div>

      <div className="card-body d-flex flex-column">
        <h5 className="card-title text-start fs-4">{title?.slice(0, 50)}</h5>
        <p className="card-text text-start fs-7">
          {description
            ? `${description.slice(0, 100)}...`
            : "No description available."}
        </p>
        <div className="mt-auto">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn text-black fw-normal readmorebtn"
          >
            Read More ...
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;

// import newsImg from "/news.jpg";

// const NewsItem = ({ title, description, imgSrc, url }) => {
//   return (
//     <div className="card" style={{ width: "300px", flex: "0 0 auto" }}>
//       <img src={imgSrc || newsImg} className="card-img-top" alt={title} />
//       <div className="card-body d-flex flex-column">
//         <h5 className="card-title text-start">{title.slice(0, 50)}</h5>
//         <p className="card-text text-start">
//           {description
//             ? `${description.slice(0, 100)}...`
//             : "No description available."}
//         </p>
//         <div className="mt-auto">
//           <a
//             href={url}
//             target="_blank"
//             className="btn text-black fw-normal readmorebtn"
//             // rel="noopener noreferrer"
//           >
//             Read More ...
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NewsItem;
