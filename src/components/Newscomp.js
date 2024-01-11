import React, { Component } from 'react'
import Newsitem from './Newsitem'
import PropTypes from 'prop-types'

export class Newscomp extends Component {
    static defaultProps = {
        country:'in',
        pageSize:6,
        category:"General"
      }

      static propType = {
        country: PropTypes.string,
        pageSize:PropTypes.number,
        category:PropTypes.string
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
        console.log("Cdm")
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b42a47e6bb5a47048c15a094a6ee2b41&pageSize=${this.props.pageSize}`
        let data= await fetch(url);
        let parsedData=await data.json()
        console.log(parsedData);
        this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults})
    }

    handleprev = async()=>{
        console.log("prev click");
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b42a47e6bb5a47048c15a094a6ee2b41&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
        let data= await fetch(url);
        let parsedData=await data.json()
        console.log(parsedData);
        this.setState({
            page: this.state.page-1,
            articles: parsedData.articles
        })

    }
    handlenext = async()=>{
        console.log("next Click");
        if(this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)){

        }
        else{
            let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b42a47e6bb5a47048c15a094a6ee2b41&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
            let data= await fetch(url);
            let parsedData=await data.json()
            console.log(parsedData);
            this.setState({
                page: this.state.page+1,
                articles: parsedData.articles
            })
    }

    }
  render() {
    return (
        <div className='container my-3'>
            <h2 className='text-center'>SnapNews top headlines</h2>
            <spinner/>
            <div className='row'>
                {this.state.articles.map((element)=>{
                    return <div className="col-md-4" key={element.url} >
                    <Newsitem title={element.title?element.title.slice(0,40):""} description={element.description?element.description.slice(0, 88):""} imageurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                </div>
                })}
            </div>
            <div className='d-flex justify-content-between'>
            <button disabled={this.state.page<=1}type="button" class="btn btn-dark" onClick={this.handleprev}>&larr;Previous</button>
            <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)}type="button" className="btn btn-dark" onClick={this.handlenext}>Next&rarr;</button>
            </div>          
        </div>
    )
  }
}

export default Newscomp