const Job = require("../Models/jobModel");
const jwt = require("jsonwebtoken");

let jobPosting = (req,res) => {
    
    let {title, description, tag, salary, location, experience} = req.body;

    let job = new Job({
        title,
        description,
        tag,
        salary,
        location,
        experience
    })

    job.save().then((job)=>{
        if(!job){
            res.status(400).json({"message": "Job not posted"})
        }
        else{
            res.status(200).json({"Message": "Job posted successfully", job:job})
        }

    }).catch(err =>{
        res.status(400).json({err:err, "message": "Job not posted"})
    })

    }



    module.exports = {
        jobPosting
    }