import React, { Component } from 'react'
export class Navbar extends Component {


  handleCategoryClick = (category) => {
    this.props.fetchNewsByCategory(category);

  };

  render() {

    let { darkMode } = this.props;
    return (
      <div> 
        <nav className={`navbar navbar-expand-lg navbar-${darkMode} bg-${darkMode} `}>
  <div className="container-fluid">
    <a className="navbar-brand" onClick={() => this.handleCategoryClick('general')} style={{ cursor: 'pointer' }} >General News</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
                  <span
                    className="nav-link"
                    onClick={() => this.handleCategoryClick('business')}
                    style={{ cursor: 'pointer' }}
                  >
                    Business
                  </span>
                </li>
                <li className="nav-item">
                  <span
                    className="nav-link"
                    onClick={() => this.handleCategoryClick('entertainment')}
                    style={{ cursor: 'pointer' }}
                  >
                    Entertainment
                  </span>
                </li>
                <li className="nav-item">
                  <span
                    className="nav-link"
                    onClick={() => this.handleCategoryClick('technology')}
                    style={{ cursor: 'pointer' }}
                  >
                    Technology
                  </span>
                </li>
                <li className="nav-item">
                  <span
                    className="nav-link"
                    onClick={() => this.handleCategoryClick('sports')}
                    style={{ cursor: 'pointer' }}
                  >
                    Sports
                  </span>
                </li>
                <li className="nav-item">
                  <span
                    className="nav-link"
                    onClick={() => this.handleCategoryClick('science')}
                    style={{ cursor: 'pointer' }}
                  >
                    Science
                  </span>
                </li>
      </ul>
      <form className="d-flex" role="search" onSubmit={this.props.handleSearch}>
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={this.props.searchTerm}
            onChange={this.props.handleSearchTermChange}
          />
          <select
            className="form-select me-2"
            value={this.props.selectedFields}
            onChange={this.props.handleSelectedFieldsChange}
          >
            <option value="title">Title</option>
            <option value="description">Description</option>
            <option value="content">Content</option>
          </select>
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
    </div>
  </div>
</nav>
      </div>

    )
  }
}

export default Navbar