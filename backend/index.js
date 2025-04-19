const express=require('express');
const axios =require('axios');
const cors =require('cors');
require('dotenv').config();

const app=express();
 app.use(cors());

 app.get('/weather/:city',async(req,res)=>{
 const city=req.params.city;
 const apikey=process.env.WEATHER_API_KEY;

    try{
        const response=await axios.get(
            `http://api.weatherapi.com/v1/current.json?key=${apikey}&q=${city}`
        );
        res.json(response.data);
    }
    catch(err){
        console.log('Error fetching weather:',err.message);
        res.status(500).json({error:'Error fetching weather data'});
    }

 });
 app.listen(5000,()=>{
    console.log(`Server is running on port 5000`);
 })