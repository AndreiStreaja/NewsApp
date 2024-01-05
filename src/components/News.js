import React, { Component } from 'react';
import NewsItems from './NewsItems';
import Loading from './Loading';
import PropTypes from 'prop-types';
import Navbar from './Navbar';

export class News extends Component {

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      searchTerm: '',
      selectedFields: 'title',
      darkMode: false, // New state for dark mode
      totalResults:0
    };

  }

  toggleDarkMode = () => {
    this.setState((prevState) => ({
      darkMode: !prevState.darkMode,
    }));
  };




 async updateNews(category){
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=1bafc55bbb794fef8dbe2c9b07d71949&pageSize=100`;
    this.setState({ loading: true });
    const data = await fetch(url);
    const parsedData = await data.json();
    this.setState({
      totalResults: parsedData.totalResults,
      articles: parsedData.articles,
      loading: false,
    });
  }

  fetchNewsByCategory = async (category) => {
    this.updateNews(category);

  };

  async componentDidMount() {
    this.updateNews('general');
  }



  handleSearch = async (e) => {
    e.preventDefault();
    await this.fetchNewsBySearch();
  };

  formatSearchQuery = (query) => {
    return encodeURIComponent(query);
  };

  fetchNewsBySearch = async () => {
    const { searchTerm, selectedFields } = this.state;
    const formattedQuery = this.formatSearchQuery(searchTerm);
    
    let url = ` https://newsapi.org/v2/top-headlines?q=${formattedQuery}&country=us&${selectedFields}&apiKey=1bafc55bbb794fef8dbe2c9b07d71949&pageSize=100`;

    this.setState({ loading: true });
    const data = await fetch(url);
    const parsedData = await data.json();
    this.setState({
      totalResults: parsedData.totalResults,
      articles: parsedData.articles,
      loading: false,
    
  });
  }

  render() {
    const { darkMode } = this.state; // Extract darkMode from state
    return (
        <div className={darkMode ? 'dark-mode' : ''}>
      <div>
        <Navbar 
         fetchNewsByCategory={this.fetchNewsByCategory}  
         handleSearch={this.handleSearch}
         searchTerm={this.state.searchTerm}
         selectedFields={this.state.selectedFields}
         handleSearchTermChange={(e) => this.setState({ searchTerm: e.target.value })}
         handleSelectedFieldsChange={(e) => this.setState({ selectedFields: e.target.value })}
         darkMode={this.state.darkMode} 
       />
            <div className="d-flex justify-content-end mt-2">
                <div className="form-check form-switch ml-auto">
                      <input  onClick={this.toggleDarkMode} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}</label>
                </div>
             </div>

        <div className="container" >
          <div className="d-flex justify-content-end">
          </div>
          {this.state.loading && <Loading />}
          <div className="container row">
            {!this.state.loading && this.state.articles.map((element) => {
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
                      darkMode={this.state.darkMode} 
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
  }
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;