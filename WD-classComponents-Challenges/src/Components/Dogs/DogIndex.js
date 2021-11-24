import React from 'react';
import {Button } from 'reactstrap';

export default class fetchDogs extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            dogurl: ''
        }
    }


fetchData = ( ) => {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then((res) => res.json())
    .then((dogData) => {
        console.log(dogData);
        this.setState({
            dogurl: dogData.message
        })
    }).catch ((err) => console.log(err))
}

componentDidMount(){
    this.fetchData();
}

render(){
    return(
        <div>
        <Button onClick={(e) => {this.fetchData()}}>Go Fetch!</Button>
        <hr />
        <img src={`${this.state.dogurl}`} alt="random doggo"></img>
        
        
        </div>
        
    )
}
}