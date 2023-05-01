import React, {useEffect,useState} from 'react'
import Newsitem from './Newsitem'
import Loader from './Loader';
import PropTypes from 'prop-types'

const News=(props)=>{
  const [articles,setArticles]=useState([]);
  const [loading,setLoading]=useState(false);
  const [page,setPage]=useState(1);
  const [totalResults,setTotalResults]=useState(0);


  const updatenews=async()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&category=${props.category}&apikey=${props.apikey}&page=1&pageSize=${props.pageSize}`;
    // this.setState({
    //   loading:true
    // })
    setLoading(true);
    let data=await fetch(url);
    let parseData=await data.json();

    setArticles(parseData.articles);
    setTotalResults(parseData.totalResults);
    setLoading(false);
    // this.setState({articles:parseData.articles,
    // totalResults:parseData.totalResults,
    // loading:false
    // });
  }
  useEffect(()=>{
    updatenews();
  },[]);

      const handlePrevClick=async()=>{
        let url=`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apikey=${props.apikey}&page=${page-1}&pageSize=${props.pageSize}`;
        // this.setState({
        //   loading:true
        // })
        setLoading(true);
        let data=await fetch(url);
        let parseData=await data.json();

        setPage(page-1);
        setArticles(parseData.articles);
        setLoading(false);
        // this.setState({
        //   page:this.state.page-1,
        //   articles:parseData.articles,
        //   loading:false
        // })
      }
      const handleNextClick=async()=>{
        if(page+1>Math.ceil(totalResults/props.pageSize)){

        }
        else{
          let url=`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apikey=${props.apikey}&page=${page+1}&pageSize=${props.pageSize}`;
          // this.setState({
          //   loading:true
          // })
          setLoading(true);
          let data=await fetch(url);
          let parseData=await data.json();
          // this.setState({
          //   page:this.state.page+1,
          //   articles:parseData.articles,
          //   loading:false
          // })
          setPage(page+1);
          setArticles(parseData.articles);
          setLoading(false);
        }
      }
    return (
      <div className="container my-3">
        <h2 className="text-center" style={{marginTop:"80px"}}>News24X7- Top {props.category} Headlines</h2>
        {loading && <Loader/>}
        <div className="row">
            {!loading && articles.map((element)=>{
                return <div className="col-md-4" key={element.url}>
                    <Newsitem title={element.title?element.title.slice(0,45)+"...":""} 
                        description={element.description?element.description.slice(0,88)+"...":""} 
                        imageurl={element.urlToImage?element.urlToImage:"https://cdn.dnaindia.com/sites/default/files/styles/half/public/2023/04/23/2586386-untitled-design-2023-04-23t074722.524.jpg"} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                </div>
            })}
        </div>
        <div className="container d-flex justify-content-between" >
        <button type="button" disabled={page<=1} className="btn btn-dark" onClick={handlePrevClick}>&larr; Previous</button>
        <button type="button" disabled={page+1>Math.ceil(totalResults/props.pageSize)} className="btn btn-dark" onClick={handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
}
News.defaultProps = {
  country:"in",
  pageSize:6
}
News.propTypes = {
  country:PropTypes.string,
  pageSize:PropTypes.number
}

export default News