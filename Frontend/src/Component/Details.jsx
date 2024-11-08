import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import { Tabs, Tab, TabList, TabPanel } from "react-tabs";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-tabs/style/react-tabs.css";
import "../Component/Details.css";
// import queryString from 'query-string';
import axios from "axios";
import { withRouter } from "./HOC";

 class Details extends Component {
      constructor() {
        super();
        this.state={
          restaurants :{}
        }
      }
  componentDidMount() { 
    // const qs=queryString.parse(this.props.location.search);
    const queryParams= new URLSearchParams(this.props.location.search);
    // const { restaurant } = qs;
    const restaurant=queryParams.get('restaurant')  

    axios.get('http://localhost:4000/restaurants/'+restaurant)
    .then((response)=>{
      console.log(response);
      this.setState({restaurants : response.data})
    })
    .catch(error=>console.log(`failed to fetch restaurant to details page,${error}`))
   }

  render() {
    const {restaurants} = this.state;
    return (
      <>

    
        <Carousel showThumbs={false}>
          <div>
            <img
              src="https://b.zmtcdn.com/data/dish_photos/835/ffbd031d37f736bcaf7e03eedd31e835.jpg"
              alt="not found"
              height={400}
              width={600}
            />
          </div>
          <div>
            <img
              src="https://b.zmtcdn.com/data/pictures/chains/5/19013205/b4d239f9bec58a11472b7732d5d41657.jpg"
              alt="not found"
              height={400}
              width={600}
            />
          </div>
          <div>
            <img
              src="https://b.zmtcdn.com/data/pictures/chains/5/19013205/f79f0e8f93bf34a07bbe3509ac89190d.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*"
              alt="not found"
              height={400}
              width={600}
            />
          </div>
        </Carousel>
       <div className="heading"> 
        <h1>{restaurants.name}</h1>
        <button className="btn-order">Place an Order</button></div>
        <div className="tabs">
          <Tabs>
            <TabList>
              <Tab>Overview</Tab>
              <Tab>Contacts</Tab>
            </TabList>
            <TabPanel>
              <h2>Any content 2</h2>
              <div>
                <h4>Cuisine</h4>
                <p>{restaurants.name}</p>
              </div>
              <div>
                <h4>Average Cost</h4>
                <p>{restaurants.min_price} (approx)</p>
              </div>
            </TabPanel>
            <TabPanel>
              <h2>{restaurants.contact_number}</h2>
            </TabPanel>
          </Tabs>
        </div>
      </>
    );
  }
}
export default withRouter(Details);