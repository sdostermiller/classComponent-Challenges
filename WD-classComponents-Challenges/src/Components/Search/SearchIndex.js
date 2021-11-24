import React from 'react';
import {Input, Button } from 'reactstrap';
 
export default class SearchIndex extends React.Component {
   constructor(props){
     super(props);
  this.state = {
     things: 
          ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards'],
     searchTerm: '',
   }
  }

editSearchTerm = (e) => {
  this.setState({searchTerm: e.target.value})
}

searchFunction = () => {
  return this.state.things.filter(thing => 
    thing.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
  }
  
  //
  



 render(){
   return(
     <div>
       <Input type="text" onChange={this.editSearchTerm} value={this.state.searchTerm} placeholder='Search Here' />
       <Button onClick={(e) => {this.searchFunction()}}>Search!</Button>
       <h3>Results:</h3>
       <h4>We found it!</h4>
       <h6>things = {this.searchFunction()}</h6>
     </div>
   ) 
}
}