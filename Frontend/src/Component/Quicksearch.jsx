import React, { Component } from 'react';
import { withRouter } from "./HOC";
class Quicksearch extends Component {
  handlequicksearch = (mealid) => {
    this.props.navigate(`/filter?mealtype_id=${mealid}`);
  }
  render() {
    const { quicksearchData } = this.props;
    return (
      <div className="quick-search">
        <h3>Quick search</h3>
        <p>Discover restuarants by type of meal</p>
        <div className='categories' >
          {quicksearchData.map((item) => {
            const { name, content, image, meal_type } = item;
            return <div className="category" key={meal_type} onClick={() => this.handlequicksearch(meal_type)}>
              <img src={`/${image}`} alt="no image" />
              <h4>{name}</h4>
              <div>{content}</div>
            </div>
          })}
        </div>

      </div>
    )
  }
}
export default withRouter(Quicksearch);