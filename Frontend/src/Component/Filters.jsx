import React, { Component } from 'react';
import '../Component/Filters.css';
import { withRouter } from './HOC';
import axios from 'axios';
class Filters extends Component {
    constructor() {
        super();
        this.state = {
            restaurant: [],
        }
    }
    componentDidMount() {
        const queryParams = new URLSearchParams(this.props.location.search);

        const mealtype_ids = queryParams.get('mealtype_id')
        const mealtype_id = Number(mealtype_ids)
        axios.post('http://localhost:4000/filters', { mealtype_id: mealtype_id })
            .then((response) => {
                this.setState({ restaurant: response.data.data })
                console.log(response.data.data);
            })
            .catch(error => console.error(`failed to fetch restaurant to details page ${error}`))
    }
    render() {
        const { restaurant } = this.state;
        return (
            <>
                <div className="restaurant-list">
                    <div className="filters">
                        <h1>Filters</h1>
                        <div>
                            <label>Select Loaction</label>
                            <select name="" id="">
                                <option value="vihar colony">Vihar Colony</option>
                            </select>
                        </div>
                        <div>
                            <h4>Cuisine</h4>
                            <label htmlFor="north-indian">
                                <input type="checkbox" name="north-indian" id="" />
                                North-Indian
                            </label>
                            <label htmlFor="north-indian">
                                <input type="checkbox" name="South-Indian" id="" />
                                South-Indian
                            </label>
                            <label htmlFor="north-indian">
                                <input type="checkbox" name="Chinese" id="" />
                                Chinese
                            </label>
                            <label htmlFor="north-indian">
                                <input type="checkbox" name="Fast-food" id="" />
                                Fast-food
                            </label>
                            <label htmlFor="north-indian">
                                <input type="checkbox" name="Steet-food" id="" />
                                Steet-food
                            </label>
                        </div>
                        <div>
                            <h4>Cost for two</h4>
                            <label htmlFor="">
                                <input type="checkbox" name="" id="" />
                                Less than ₹500
                            </label>
                            <label htmlFor="">
                                <input type="checkbox" name="" id="" />
                                ₹600 to ₹1000
                            </label>
                            <label htmlFor="">
                                <input type="checkbox" name="" id="" />
                                ₹1000 to ₹1500
                            </label>
                            <label htmlFor="">
                                <input type="checkbox" name="" id="" />
                                ₹1500 to ₹2000
                            </label>
                            <label htmlFor="">
                                <input type="checkbox" name="" id="" />
                                ₹2000+
                            </label>
                        </div>
                        <div>
                            <h4>Sort</h4>
                            <label htmlFor="">
                                <input type="checkbox" name="" id="" />
                                Price low to high
                            </label>
                            <label htmlFor="">
                                <input type="checkbox" name="" id="" />
                                Price high to low
                            </label>
                        </div>
                    </div>
                    <div className='iam'>
                    {restaurant.length > 0 ? (
                        restaurant.map((item, index) => (
                            <div className="restaurant-card" key={index}>
                                <img src='https://b.zmtcdn.com/data/pictures/2/20782512/dfcfba4055122c9e04eae2fbddb66b13_o2_featured_v2.jpg?output-format=webp' alt='' className="restaurant-image" />
                                <div className="restaurant-details">
                                    <h3>{item.name}</h3>
                                    <p>{item.city}</p>
                                 {item.cuisine.map((itemcuisines)=> ( <p><b>Cuisines:</b> {itemcuisines.name}</p>))}
                                    <p><b>Cost for Two:</b> ₹{item.min_price}-only</p>
                                </div>
                            </div>))
                    ) : (<div>data not found</div>)}</div>
                </div>
            </>
        )
    }
}
export default withRouter(Filters);