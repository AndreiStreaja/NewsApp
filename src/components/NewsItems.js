import React from 'react';

const NewsItems = ({ title, description, imgUrl, readMore, darkMode }) => {
  return (
    <div>
      <div
        className="card"
        style={{
          width: "18rem",
          height: "25rem",
          backgroundColor: darkMode ? '#766460' : '#fff',
        }}
      >
        <img
          src={!imgUrl ? "https://montevista.greatheartsamerica.org/wp-content/uploads/sites/2/2016/11/default-placeholder.png" : imgUrl}
          width="300"
          height="200"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5
            className="card-title"
            style={{
              color: darkMode ? 'white' : '#766460',
              backgroundColor: darkMode ? '#766460' : 'white',
              background: darkMode ? '#766460' : 'inherit',
            }}
          >
            {title}
          </h5>
          <p
            className="card-text"
            style={{
              color: darkMode ? 'white' : '#766460',
              backgroundColor: darkMode ? '#766460' : 'white',
              background: darkMode ? '#766460' : 'inherit'
            }}
          >
            {description}
          </p>
          <a href={readMore} style={{ position: "absolute", bottom: "10px", right: "10px" }} className="btn btn-primary">
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItems;
