const express=require('express');
const router=express.Router();
const Trips=require("./../Models/Trips")


router.post("/createtrip",async (req,res)=>{


    try{
        await Trips.create({
            Party_Name:req.body.Party_Name,
            Truck_Name:req.body.Truck_Name,
            Ownership:req.body.Ownership,
            Origin:req.body.Origin,
            Destination:req.body.Destination,
            Bill_Type:req.body.Bill_Type,
            Freight_Amount:req.body.Freight_Amount,
            Trip_Start_Date:req.body.Trip_Start_Date,
            LR_No:req.body.LR_No,
            Material:req.body.Material,
            Note:req.body.Note

        })
        res.json({success:true});
    }
    catch(error){
        console.log(error);
        const errorDetails = error.errors || [];
        res.status(500).json({ success: false, errors: errorDetails });
        
    }
})


router.get('/trips', async (req, res) => {
    try {
        const trips = await Trips.find({});
        res.json({ success: true, trips });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: 'An error occurred while fetching trips' });
    }
});
router.get('/trips/:id',async (req,res)=>{
    try{
        const trip_id=req.params.id;
        const data=await Trips.findOne({_id:trip_id});
        res.json({success:true,data:data})
        console.log(data);
    }
    catch(error){
        
        console.error(error);
        res.status(500).json({ success: false, error: 'An error occurred while fetching trips' });
    }
})

module.exports=router;