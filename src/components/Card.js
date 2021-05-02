
import React from 'react'
// import { act } from 'react-dom/cjs/react-dom-test-utils.production.min';

class Card extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            
        }
    }


    render(){

        return(
            <div>
                    <div className="card">
                        <img className="card-img-top" src={this.props.act.imgUrl} alt=""/>
                        <div className="card-body">
                            <h4 className="card-title">{this.props.act.fName} {this.props.act.lName}</h4>
                            <p className="card-text">
                            <a name="" id="" className="btn btn-primary" href={this.props.act.imdbLink} role="button">Link to imdb</a>    
                            <h5>{this.props.act.calcAge()}</h5>
                            </p>
                        </div>
                    </div>
             </div>
        )
    }
}

export default Card;
