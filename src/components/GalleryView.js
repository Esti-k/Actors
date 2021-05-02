import React from 'react'
import Card from './Card';

class GalleryView extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            
        }
    }


    render(){
        return(
            <div>
                <div className="card-deck">
                    {this.props.arr.map((cardItem) => (<Card act ={cardItem}></Card>))}
                </div>
            </div>
        )
    }
}

export default GalleryView
