import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
   
      constructor(){
          super();
          
          this.state ={ 
              articles : [],
              loading: false

          }
      }
      async componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=4fb092f186c942d7b1faf9019b0ce0a3";
        let data = await fetch(url);
        let pareseData = await data.json();
        console.log(pareseData);
        this.setState({articles:pareseData.articles});
      }
    render() {
        return (
            <div className="container my-4 ">
               <h2>Main News</h2>
              
               <div className="row my-4">
                  {this.state.articles.map((element)=>{ 

                    return  <div className="col-md-4 mb-2" key={element.url}>
                        <NewsItem title={element.title?element.title.slice(0,45):""} desp={element.description?element.description.slice(0,80):""} imageUrl={element.urlToImage?element.urlToImage:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/No_image_3x4.svg/1200px-No_image_3x4.svg.png"} newsurl={element.url}/>
                        </div>
                    })}
                    
                
                  
                </div>
                  <nav aria-label="..." className="d-flex justify-content-center">
                    <ul className="pagination pagination-lg">
                      <li className="page-item active" aria-current="page">
                        <span className="page-link">1</span>
                      </li>
                      <li className="page-item"><a className="page-link" href="/">2</a></li>
                      <li className="page-item"><a className="page-link" href="/">3</a></li>
                    </ul>
                  </nav>
                
             </div>
        )
    }
}

export default News
