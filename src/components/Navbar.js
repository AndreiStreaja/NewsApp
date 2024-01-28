
import React from 'react';
import { Link } from 'react-router-dom'; // Importă Link din react-router-dom

const Navbar = (props) => {
  const { darkMode } = props;
  const userEmail = localStorage.getItem('userEmail');

  const handleCategoryClick = (category) => {
    props.fetchNewsByCategory(category);
  };


  return (
    <div style={{
      backgroundColor: darkMode ? '#766460' : '#fff'
    }}>
      <div>
        <nav className={`navbar navbar-expand-lg navbar-${darkMode} bg-${darkMode} `}>
          <div className="container-fluid">
            <span
              className="navbar-brand"
              onClick={() => handleCategoryClick('general')}
              style={{ cursor: 'pointer' }}
            >
              General News
            </span>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <span
                    className="nav-link"
                    onClick={() => handleCategoryClick('business')}
                    style={{ cursor: 'pointer' }}
                  >
                    Business
                  </span>
                </li>
                <li className="nav-item">
                  <span
                    className="nav-link"
                    onClick={() => handleCategoryClick('entertainment')}
                    style={{ cursor: 'pointer' }}
                  >
                    Entertainment
                  </span>
                </li>
                <li className="nav-item">
                  <span
                    className="nav-link"
                    onClick={() => handleCategoryClick('technology')}
                    style={{ cursor: 'pointer' }}
                  >
                    Technology
                  </span>
                </li>
                <li className="nav-item">
                  <span
                    className="nav-link"
                    onClick={() => handleCategoryClick('sports')}
                    style={{ cursor: 'pointer' }}
                  >
                    Sports
                  </span>
                </li>
                <li className="nav-item">
                  <span
                    className="nav-link"
                    onClick={() => handleCategoryClick('science')}
                    style={{ cursor: 'pointer' }}
                  >
                    Science
                  </span>
                </li>
              </ul>
              <span className="navbar-text">
                Connected as {userEmail}
              </span>
               
              <form className="d-flex" role="search" onSubmit={props.handleSearch}>
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  value={props.searchTerm}
                  onChange={props.handleSearchTermChange}
                />
                <select
                  className="form-select me-2"
                  value={props.selectedFields}
                  onChange={props.handleSelectedFieldsChange}
                >
                  <option value="title">Title</option>
                  <option value="description">Description</option>
                  <option value="content">Content</option>
                </select>
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
              <Link to="/register" style={{ textDecoration: 'none' }}>
                <form className="d-flex">
                  <button className="btn btn-outline-success m-1" type="submit">Register</button>
                </form>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;