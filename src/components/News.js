import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Loader from './Loader';
import PropTypes from 'prop-types'

export class News extends Component {
      static defaultProps = {
        country:"in",
        pageSize:6
      }
      static propTypes = {
        country:PropTypes.string,
        pageSize:PropTypes.number
      }
      constructor(){
        super();
        this.state={
            articles:[],
            loading: false,
            page:1
        }
      }
      async componentDidMount(){
        let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&category=${this.props.category}&apikey=890eb04857b543fcbb18e9484f3410d4&page=1&pageSize=${this.props.pageSize}`;
        this.setState({
          loading:true
        })
        let data=await fetch(url);
        let parseData=await data.json();
        this.setState({articles:parseData.articles,
        totalResults:parseData.totalResults,
        loading:false
        });
      }

      handlePrevClick=async()=>{
        let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apikey=890eb04857b543fcbb18e9484f3410d4&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
        this.setState({
          loading:true
        })
        let data=await fetch(url);
        let parseData=await data.json();
        this.setState({
          page:this.state.page-1,
          articles:parseData.articles,
          loading:false
        })
      }
      handleNextClick=async()=>{
        if(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)){

        }
        else{
          let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apikey=890eb04857b543fcbb18e9484f3410d4&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
          this.setState({
            loading:true
          })
          let data=await fetch(url);
          let parseData=await data.json();
          this.setState({
            page:this.state.page+1,
            articles:parseData.articles,
            loading:false
          })
        }
      }


  render() {
    return (
      <div className="container my-3">
        <h2 className="text-center">NewsMonkey- Top {this.props.category} Headlines</h2>
        {this.state.loading && <Loader/>}
        <div className="row">
            {!this.state.loading && this.state.articles.map((element)=>{
                return <div className="col-md-4" key={element.url}>
                    <Newsitem title={element.title?element.title.slice(0,45)+"...":""} 
                        description={element.description?element.description.slice(0,88)+"...":""} 
                        imageurl={element.urlToImage?element.urlToImage:"https://cdn.dnaindia.com/sites/default/files/styles/half/public/2023/04/23/2586386-untitled-design-2023-04-23t074722.524.jpg"} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                </div>
            })}
        </div>
        <div className="container d-flex justify-content-between" >
        <button type="button" disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
        <button type="button" disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News