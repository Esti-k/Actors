import { getAllByRole } from '@testing-library/dom';
import React from 'react'
import GalleryView from './GalleryView';

class ActorsPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            currentFilter : ''
        }
    }

    filterAct = (e) => {
        this.setState(
            {
                currentFilter : e.target.value
            }
        )
    }

    filterArr = (actor) => {
        let cf = (this.state.currentFilter).toUpperCase();
        let fn = (actor.fName).toUpperCase();
        let ln = (actor.lName).toUpperCase();
        return (fn.includes(cf)|| ln.includes(cf));
    }

    render(){
        const actorsArr = this.props.cardData;
        const filteredArr = actorsArr.filter((actor) => (this.filterArr(actor)));
        // const filteredArr = actorsArr.filter((actor) => ((actor.fName).includes(this.state.currentFilter)));
        return(
            <div>
                <input type='text' onChange={this.filterAct} value={this.state.currentFilter}/>
                <GalleryView arr={filteredArr}></GalleryView>
            </div>

        )
    }
}

export default ActorsPage
