import React from 'react'
import image from '../images/imgCard.jpg'
import './cardMovie.css'
export const cardMovie = (props) => {
    let { title, description, img, id } = props
    console.log(props);
    return (

        
        <div className="container pt-5 mt-5 mx-5 ">
                <div className="row"  >
                    <div className="col col-md-6 " >
                        <div className="card" >
                            <img src={image} className="card-img card-img-top" alt="..." />


                            {/* <input type="checkbox"  
                         onChange = {this.handleCheck}  
                         className="mx-2 my-2 " / > */}
                            <div className="card-body">
                                <div className=" row "   >
                                    <div className="col-md-6">
                                        <h5 className="card-title">{title}</h5>
                                    </div>
                                    {/* <div className="col-md-6">
                                       <Update id={this.props.id}
                                         img={this.props.img}
                                        onChange = {this.setState} />
                                    </div> */}

                                </div>

                                <p className="card-text">{description}</p>
                                {/* <p className="card-text text-right"><small>{this.props.date}</small></p> */}
                                {/* <a href="#" className="btn btn-primary">enviar</a> */}
                            </div>
                        </div>

                    </div>

                </div>
            </div>
    )
}
export default cardMovie;