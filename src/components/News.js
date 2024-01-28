
import React, { useState, useEffect } from 'react';
import NewsItems from './NewsItems';
import Loading from './Loading';
import PropTypes from 'prop-types';
import Navbar from './Navbar';

const News = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFields, setSelectedFields] = useState('title');
  const [darkMode, setDarkMode] = useState(false);
  const [totalResults, setTotalResults] = useState(0);

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  const updateNews = async (category) => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=1bafc55bbb794fef8dbe2c9b07d71949&pageSize=100`;
    setLoading(true);
    const data = await fetch(url);
    const parsedData = await data.json();
    setTotalResults(parsedData.totalResults);
    setArticles(parsedData.articles);
    setLoading(false);
  };

  const fetchNewsByCategory = async (category) => {
    updateNews(category);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    await fetchNewsBySearch();
  };

  const formatSearchQuery = (query) => {
    return encodeURIComponent(query);
  };

  const fetchNewsBySearch = async () => {
    const formattedQuery = formatSearchQuery(searchTerm);
    let url = `https://newsapi.org/v2/top-headlines?q=${formattedQuery}&country=us&${selectedFields}&apiKey=1bafc55bbb794fef8dbe2c9b07d71949&pageSize=100`;
    setLoading(true);
    const data = await fetch(url);
    const parsedData = await data.json();
    setTotalResults(parsedData.totalResults);
    setArticles(parsedData.articles);
    setLoading(false);
  };

  useEffect(() => {
    updateNews('general');
  }, []);

  return (
    <div  style={{backgroundColor: darkMode ? '#766460' : '#fff'}}>
      <div>
        <Navbar
          fetchNewsByCategory={fetchNewsByCategory}
          handleSearch={handleSearch}
          searchTerm={searchTerm}
          selectedFields={selectedFields}
          handleSearchTermChange={(e) => setSearchTerm(e.target.value)}
          handleSelectedFieldsChange={(e) => setSelectedFields(e.target.value)}
          darkMode={darkMode}
        />
        <div className="d-flex justify-content-end mt-2">
          <div className="form-check form-switch ml-auto">
            <input
              onClick={toggleDarkMode}
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
              {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            </label>
          </div>
        </div>
        <div className="container">
          {loading && <Loading />}
          <div className="container row">
            {!loading &&
              articles.map((element) => {
                return (
                  <div className="col md-4" key={element.url}>
                    <NewsItems
                      title={element.title ? element.title.slice(0, 40) : ''}
                      description={
                        element.description
                          ? element.description.slice(0, 90)
                          : ''
                      }
                      imgUrl={element.urlToImage}
                      readMore={element.url}
                      darkMode={darkMode}
                    />
                  </div>
                );
              })}
          </div>
          <div className="container d-flex justify-content-between"></div>
        </div>
      </div>
    </div>
  );
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
