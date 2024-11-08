import axios from 'axios';
import React, { Component } from 'react'
import { withRouter } from './HOC';
// import Restaurant from '../../../Backend/Model/restaurants';
class Wallpaper extends Component {
  constructor() {
    super();
    this.state = {
      restaurants: [],
      inputText: '',
      suggestions: []
    }
  }

  handleLocation = (event) => {
    const location_id = event.target.value;
    sessionStorage.setItem("location_id", location_id);
    console.log(location_id)

    // axios({
    //   method:'GET',
    //   url:`http://localhost:4000/restaurants/${locationId}`,
    //   headers:{'Content-Type': 'application/json'}
    // })
    axios.get('http://localhost:4000/restaurants/location/' + location_id)
      .then(response => {
        this.setState({ restaurants: response.data })
        console.log(response.data)
      })
      .catch(error => console.log(error))
  }

  handleSearch = (event) => {
    let inputText = event.target.value;
    // event.preventDefault();
    const { restaurants } = this.state;
    const suggestions = restaurants.filter(item => item.name.toLowerCase().includes(inputText.toLowerCase()));
    this.setState({ suggestions, inputText })
  }

  showSuggestion = () => {
    const { suggestions, inputText } = this.state;
    if (suggestions.length == 0 && inputText == undefined) {
      return null;
    }
    if (suggestions.length > 0 && inputText == '') {
      return null;
    }
    if (suggestions.length == 0 && inputText) {
      return <ul>
        <li className='li'>No Search Results Found</li>
      </ul>
    }
    return (
      <ul className='ul'>
        {suggestions.map((item, index) => (<li key={index} onClick={() => this.selectingRestaurant(item)} className='li'>
          {`${item.name} - ${item.locality}, ${item.city}`}
        </li>))}
      </ul>
    );
  }

  selectingRestaurant=(item)=>{
    this.props.navigate(`/details?restaurant=${item._id}`)
  }

  render() {
    const { locationsdata } = this.props;
    return (
      <>
        <header className='header'>
          <div className='logo'>
            <h1>Zomato</h1>
            <h2>Find the Best Restaurants,Cofees,and bars</h2>
          </div>
        </header>
        <div className="search-bar">
          <select name="" id="" onChange={this.handleLocation}>
            {locationsdata.map((item) => {
              return <option value={item.location_id}>{`${item.name}, ${item.city}`}</option>
            })}
          </select>
          <input type="text" placeholder='search for restaurants' onChange={this.handleSearch} />
          {this.showSuggestion()}
        </div>
      </>
    )
  }
}
export default withRouter(Wallpaper);