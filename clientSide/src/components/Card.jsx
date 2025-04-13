import React from 'react'

const Card = (props) => {

    // props = {
    //     "key" : {idx} , 
    //     "titleName" : {data.title} , 
    //     "descriptionName" : {data.desc} , 
    //     "url" : {data.urlTol..}
    //   }

    console.log(props); 
    let title1 = props.titleName; 
    let description1 = props.descriptionName ; 
    let urlImage = props.urlName ; 
    let url = props.url ; 
    console.log("URL " , url) ; 
    return (
        
        <div className="card" style={{"width": "18rem"}}>
            <img src={urlImage} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title1}</h5>
                    <p className="card-text">{description1}</p>
                    <a href={url} className="btn btn-primary">Read More.. </a>
                </div>
        </div>
    )
}

export default Card