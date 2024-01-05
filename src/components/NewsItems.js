import React, { Component } from 'react'

export class NewsItems extends Component {


  render() {
    let {title, description, imgUrl, readMore, darkMode} = this.props;

    return (
      <div>
         <div className="card" style={{width: "18rem", height: "25rem", backgroundColor: darkMode ? '#333' : '#fff'}}    >
  <img src={!imgUrl? "https://montevista.greatheartsamerica.org/wp-content/uploads/sites/2/2016/11/default-placeholder.png": imgUrl}  width="300" height="200" className="card-img-top" alt="..."/>
  <div className="card-body">
  <h5 className="card-title" 
  style={{color: darkMode === 'dark' ? 'white' : 'grey',
          backgroundColor: darkMode === 'dark' ? 'grey' : 'white',
          background: darkMode === 'dark' ? 'grey' : 'inherit'
        }}>{title}</h5>
    <p className="card-text"   
    style={{color: darkMode === 'dark' ? 'white' : 'grey',
          backgroundColor: darkMode === 'dark' ? 'grey' : 'white',
          background: darkMode === 'dark' ? 'grey' : 'inherit'
        }}>{description}</p>
    <a href={readMore}  style = {{position: "absolute", bottom: "10px", right: "10px"}}className="btn btn-primary">Read more</a>
  </div> 
</div>
      </div>
      
    )
  }
}

export default NewsItems

