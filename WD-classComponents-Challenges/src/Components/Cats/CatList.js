import React from 'react';

 
export default class CatList extends React.Component{
    constructor(props){
    super(props);
     this.state = {
      cats: this.props.cats,
    }
    }

render(){
 return (
   <div>
     {this.props.cats.map(cat => <li>{cat}</li> )}
   </div>
 )
}
}

