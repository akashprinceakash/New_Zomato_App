import React, { Component } from 'react';
import '../Component/Home.css';
import Quicksearch from './Quicksearch';
import Wallpaper from './Wallpaper';
import axios from 'axios';
 class Home extends Component{
  
  constructor(){
    super();
    this.state={
      locations:[],
      Mealtype:[]
    }
  }
  componentDidMount(){
 axios.get('http://localhost:4000/locations')
  .then(response => {
   this.setState({locations : response.data})
  })
  .catch(error => {
    console.error('Error fetching locations:', error);
  });

  axios.get('http://localhost:4000/allmeals')
  .then(response => {
    console.log(response.data)
      this.setState({Mealtype:response.data })
  })
  .catch(error =>{
    console.log('error fetching meakltypes', error);
  })
  }
    render(){
      const { locations , Mealtype } = this.state;
          return(
            <>
            <>
            {/* <img src="https://b.zmtcdn.com/data/pictures/2/20782512/dfcfba4055122c9e04eae2fbddb66b13_o2_featured_v2.jpg?output-format=webp" alt="no image"  height={100} width={100}/> */}
            {/* <img src="../homebackground.avif" alt="React logo" className='full-width-image'/>
            <div>
                <div className='signup'>
                    <div>Login</div>
                    <button>Create an account</button>
                </div>
                <div className="logo">
                   <span> e!</span>
                   <h4>Find the Best Restaurants,Cofees,and bars</h4></div>
                  <div><select name="" id="" aria-placeholder='Please type Location'>
                    <option value="Bengaluru">Bengaluru</option> 
                    <option value="Mangalore">Mangalore</option> 
                    <option value="Mysuru">Mysuru</option> 
                   </select>
                   <input type="text" placeholder='search for restaurants'/></div> 
                 
            </div>*/}</>
           <Wallpaper locationsdata={locations}/>
           <Quicksearch quicksearchData={Mealtype}/>
            </>
          )
    }
}

export default Home;