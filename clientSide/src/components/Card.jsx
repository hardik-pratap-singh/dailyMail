import React from 'react'

const Card = (props) => {

    console.log(props); 
    let title1 = props.title; 
    let description1 = props.description ; 
    
    return (
        
        <div className="card" style={{"width": "18rem"}}>
            {/* <img src="..." className="card-img-top" alt="..." /> */}
                <div className="card-body">
                    <h5 className="card-title">{title1}</h5>
                    <p className="card-text">{description1}</p>
                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                </div>
        </div>
    )
}

export default Card