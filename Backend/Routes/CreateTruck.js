const express=require('express');
const router=express.Router();
const Trucks=require('./../Models/Trucks');


router.post('/createtruck',async(req,res)=>{
    try{
        await Trucks.create({
            Registration_Number:req.body.Registration_Number,
            Truck_Type:req.body.Truck_Type,
            Ownership:req.body.Ownership,
            Driver_Name:req.body.Driver_Name
        })
        res.json({success:true})
    }
    catch(error){
        console.log(error);
        const errorDetails = error.errors || [];
        res.status(500).json({ success: false, errors: errorDetails });
    } 

        
})


module.exports=router; 
