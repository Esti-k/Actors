import React  from 'react';
import moment from "moment"

class Actor{
    constructor(fName, lName, bDay, imgUrl, imdbLink )
    {
        this.fName = fName;
        this.lName = lName;
        this.bDay = moment(bDay);
        this.imgUrl = imgUrl;
        this.imdbLink = imdbLink;
    }
    calcAge= () =>{
        const now = moment();
        return now.diff(this.bDay, 'years');
    }
}

export default Actor;