import React from 'react'

const Newsitem=(props)=>{
    let {title,description,imageurl,newsurl,author,date}=props;//destructuring
    return (
      <div className="my-3">
        <div className="card" > 
        {/* style={{width: "18rem"}} */}
            <img src={imageurl} className="card-img-top" alt="..."/>
            <div className="card-body">
            <span class="position-absolute top-0 translate-middle badge rounded-pill bg-dark" style={{left: "74%",zIndex:1}}>{props.source}
              <span class="visually-hidden">unread messages</span>
            </span>
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text"><small className="text-body-secondary">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
                <a href={newsurl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
            </div>
        </div>
      </div>
    )
}

export default Newsitem
