import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export class News extends Component {
        static defaultProps = {
          pageSize: '5',
          country:'in',
          category:'general'
        }
   
      constructor(){
          super();
          
          this.state ={ 
              articles : [],
              loading: false,
              page:1,

          }
      }
      async componentDidMount(){
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4fb092f186c942d7b1faf9019b0ce0a3&page=1&pagesize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data = await fetch(url);
        let pareseData = await data.json();
        this.setState({articles:pareseData.articles,
          totalResults:pareseData.totalResults,
          loading: false
        });
      }

     handlePrevious = async () =>{
          console.log("Previous");
          let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4fb092f186c942d7b1faf9019b0ce0a3&page=${this.state.page - 1}&pagesize=${this.props.pageSize}`;
          this.setState({loading:true});
          let data = await fetch(url);
          let pareseData = await data.json();
          this.setState({
            page:this.state.page - 1,
            articles:pareseData.articles,
            loading: false
          });

      }
      handleNext = async  () =>{
        console.log("next");

          let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4fb092f186c942d7b1faf9019b0ce0a3&page=${this.state.page + 1}&pagesize=${this.props.pageSize}`;
          this.setState({loading:true})
          let data = await fetch(url);
          let pareseData = await data.json();
          this.setState({
            page:this.state.page + 1,
            articles:pareseData.articles,
            loading: false
          })
        
        
    }
    render() {
        return (
            <div className="container my-4 ">
               <h2>Main News</h2>
                {this.state.loading && <Spinner/>}
               <div className="row my-4">
                  {!this.state.loading && this.state.articles.map((element)=>{ 

                    return  <div className="col-md-4 mb-2" key={element.url}>
                        <NewsItem title={element.title?element.title.slice(0,45):""} desp={element.description?element.description.slice(0,80):""} imageUrl={element.urlToImage?element.urlToImage:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/No_image_3x4.svg/1200px-No_image_3x4.svg.png"} newsurl={element.url}/>
                        </div>
                    })}
                    
                </div>
                  <div className="d-flex justify-content-between">
                    
                    <button type="button" disabled={this.state.page <= 1} className="btn btn-dark" onClick={this.handlePrevious} > &larr; Previous</button>

                      <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-dark" onClick={this.handleNext} >Next &rarr; </button>
                    
                  </div>
                
             </div>
        )
    }
}

export default News
