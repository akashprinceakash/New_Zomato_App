const express = require('express');
const mongoose = require('mongoose');
const cors= require('cors');
const app=express();
const locationschema = require('./Model/location');
const Restaurant = require('./Model/restaurants');
const mealtype = require('./Model/MealTypes')
const port=4000;

mongoose.connect('mongodb+srv://akashprinceakash9986:zomato4321@dbzomato.wh2sc.mongodb.net/?retryWrites=true&w=majority&appName=dbZomato')
// const corsOptions = {
//   origin: 'http://localhost:5173', // Adjust this to your frontend URL
//   credentials: true,
// };

// app.use(cors(corsOptions));
app.use(express.json());

app.use((req,res,next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-type', 'Authorization');
  next();
})


app.post('/filters',async(req,res)=>{
  const { mealtype_id } =req.body;
  try{
    let filters={};
    if(mealtype_id){
       filters.mealtype_id = mealtype_id;
    }
    const restaurants = await Restaurant.find(filters);
    res.status(200).json({
      success: true,
      data : restaurants
    });
  } catch(error){
    res.status(500).json({
      success : false,
      message : 'error fetching restaurants',
      error : error.message
    });
  }

});

app.get('/allmeals',async(req,res)=>{
  try{
    const AllMeal= await mealtype.find()
    res.json(AllMeal)
  }
  catch(error){
    res.json(error)
  }
})

app.get('/restaurants/:id',async(req,res)=>{
  const restauID= req.params.id;
     try{
        // const restau=await Restaurant.find({})
        // Query all restaurants
const Restaurants = await Restaurant.findById({_id : restauID});
        res.json(Restaurants);
     }
     catch(error){
        res.json(error)
     }
})

app.get('/locations',async(req,res)=>{
    try{
        const location=await locationschema.find({});
        res.json(location);
    }
    catch(error){
        res.status(500).send('Error retrieving location data' + error);
    }
});


app.get('/restaurants/location/:location_id', async (req, res) => {
    const locationId = parseInt(req.params.location_id); // Extract location_id from the route parameter
  
    try {
      const restaurants = await Restaurant.find({ location_id: locationId });
  
      if (!restaurants.length) {
        return res.status(404).json({ message: 'No restaurants found for this location.' });
      }
  
      res.json(restaurants);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });
app.listen(port , (error)=>{
    if(error){
        throw error;
    }
    else{
        console.log(`Server started at port number ${port}`);
    }
})