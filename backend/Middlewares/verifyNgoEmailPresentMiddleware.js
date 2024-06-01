const verifyNgoEmailPresentMiddleware=async(req,res,next)=>{
    let check;
    try{
        check = await Ngo.findOne({email : req.body.email});
    }catch(err){
        res.json({message: "Something went wrong"})
        return
    }

    if(check){
        return res.status(400).json({success : false, errors : "Existing Company Found With Same Email Address"});
    }

    next();
}