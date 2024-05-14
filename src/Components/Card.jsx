import React from 'react';
import { FaCheck } from "react-icons/fa";//<FaCheck />
import { MdClose } from "react-icons/md";//<MdClose />
import "./Card.css"
const Card = ({data}) => {
    return (
        <>
           <div className="row row-cols-1 row-cols-md-3 g-4 ">
            {data.map((element,index)=>{
                return(
                    <>
                    <div key={index}>
                    <div className="col">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title text-muted text-uppercase text-center">{element.title}</h4>
                      <h5 className="card-price text-center">{element.price}</h5>
                      <hr/>
                      <p className="card-content">< FaCheck/> {element.User}</p>
                      <p className="card-content">< FaCheck/> {element.price}</p>
                      <p className='card-content'>< FaCheck/> {element.User}</p>
                      <p className='card-content'>< FaCheck/> {element.Storage}</p>
                      <p className='card-content'>< FaCheck/> {element.PublicProject}</p>
                      <p className='card-content'>< FaCheck/> {element.access}</p>
                      {element. isPrivateProjects?<p className='card-content'>< FaCheck/> {element.PrivateProject}</p>:<p className='card-content text-muted'><MdClose /> {element.PrivateProject}</p>}
                      {element. isSupport?<p className='card-content'>< FaCheck/> {element.Support}</p>:<p className='card-content text-muted'><MdClose /> {element.Support}</p>}
                      {element. isSubdomain?<p className='card-content'>< FaCheck/> {element.Subdomain}</p>:<p className='card-content text-muted'><MdClose /> {element.Subdomain}</p>}
                      {element. isReport?<p className='card-content'>< FaCheck/> {element.Report}</p>:<p className='card-content text-muted'><MdClose /> {element.Report}</p>}
                      <div className="text-center mb-3">
                      <button type="button" class="btn btn-primary btn-lg" >BUTTON</button>
                      </div>
                      </div>
                      </div>
                      </div>
                    </div>
                    </>
                )
            })}
            </div>  
        </>
    );
};

export default Card;