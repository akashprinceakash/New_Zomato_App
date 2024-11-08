const mongoose = require("mongoose");

// Define the schema for cuisine
// const CuisineSchema = new mongoose.Schema({
//   id: { type: Number, required: true },
//   name: { type: String, required: true }
// });

// Define the restaurant schema
const RestaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  city: { 
    type: String, 
    required: true 
  },
  location_id: { 
    type: Number, 
    required: true 
  },
  city_id: { 
    type: Number, 
    required: true 

  },
  locality: { 
    type: String, 
    required: true 

  },
  thumb: { 
    type: String, 
    required: true 

  },
  aggregate_rating: { 
    type: Number, 
    required: true 

  },
  rating_text: { 
    type: String, 
    required: true 

  },
  min_price: { 
    type: Number, 
    required: true 

  },
  contact_number: { 
    type: Number, 
    required: true 

  },
  cuisine: [
    { 
      id: Number, 
      name: String 
    }
  ],
  image: { 
    type: String, 
    required: true 

  },
  mealtype_id: { 
    type: Number, 
    required: true 

  },

});

// Create the model from the schema
const Restaurant = mongoose.model("Restaurant", RestaurantSchema);

module.exports = Restaurant;
