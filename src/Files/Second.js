import { Component } from 'react';


class Second extends Component {
  
    state={
      name:"",
      rating:"",
      dept:"",
       data:[]
     }

     handleChange=(event)=>{
      this.setState({[event.target.name]:event.target.value})
     }

     handleClick=()=>{
      let obj={
        name:this.state.name,
        rating:this.state.rating,
        dept:this.state.dept
      }
      this.state.data.push(obj);
      this.setState({data:this.state.data,name:"",rating:"",dept:""})
      console.log(this.state.data)
     }
   
     render(){
         return (
      <>
      <h1>EMPLOYEE FEEDBACK FORM</h1>
      <label>NAME:-</label>
      <input type="text" name="name" onChange={this.handleChange} placeholder="Enter ur Name" value={this.state.name}/>
      <label>Rating:-</label>
      <input  type="number" name="rating" onChange={this.handleChange}  placeholder="Enter ur Rating"  value={this.state.rating}/> 
      <label>DEPT:-</label>
      <input  type="text" name="dept" onChange={this.handleChange}  placeholder="Enter ur Dept"  value={this.state.dept}/>   
      <button onClick={this.handleClick}>Submit</button>
      <div className='array'>
      {this.state.data.map((item)=>{
        return(
          <h2><span>Name={item.name}|| rating={item.rating}|| Dept={item.dept}</span></h2>
        )
      })}
      </div>
      </>
     );
  }
}
export default Second;
