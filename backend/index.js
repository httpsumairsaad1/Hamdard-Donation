const express = require('express')
const app = express()
const port=3000;
const mongoose =require('mongoose');
const jwt= require('jsonwebtoken');
const cors = require('cors');
const Company = require('./models/Company');
const { default: verifyNgo } = require('./Middlewares/verifyNgo');
const otpGenerator = require('otp-generator');
const { Resend } = require('resend');
const { default: verifyCompanyEmailPresentMiddleware } = require('./Middlewares/verifyCompanyEmailPresentMiddleware');
const { default: verifyNgoEmailPresentMiddleware } = require('./Middlewares/verifyNgoEmailPresentMiddleware');
const Ngo = require('./models/Ngo');
const { default: VerificationEmail } = require('./Emails/VerificationEmail');

app.use(express.json());
app.use(cors());

// Database Connection With Mongoose
try{
    mongoose.connect('mongodb+srv://2143rehman:2153rehman@cluster0.adynfnn.mongodb.net/hamdard-donation-app');
}catch(error){
    return "Database Not Connected"+error;
}

// // Create end point for EmailVerificationOTP
// // Resend Configuration
const resend = new Resend('re_duWgqFrM_MRumwKnQbTUsRtFbkdBxYsDs');
  
// Function to send email with Resend
const sendEmailWithOTP = async (username, otp) => {
    try {
      const response = await resend.emails.send({
        to: email,
        subject: 'Verify Your Email',
        React: VerificationEmail(username,otp)
      });
    } catch (error) {
      console.error('Error sending email', error);
    }
  };

// Endpoint to request OTP For Company
// ================ error ===============
app.post('/company/request-otp',verifyCompanyEmailPresentMiddleware,async(req, res) => {
    
    const email = req.body.email;
    const otp = otpGenerator.generate(6, { upperCase: false, specialChars: false });
    const username= req.body.name;
    sendEmailWithOTP(username, otp);
    res.json({ message: 'OTP sent to email',otp });
});

// Endpoint to verify OTP
app.post('/verify-otp', (req, res) => {
    const {Uotp,Gotp } = req.body;
    const isValid = Uotp===Gotp? true : false;
    
    if (isValid) {
        res.json({ message: 'OTP verified successfully', success: true});
    } else {
        res.json({ message: 'Invalid OTP', success: false });
    }
});

// create API to Register a Company
app.post("/register/company",async(req,res) => {
    const password= jwt.sign(req.body.password,"21532153")
    const company = new Company({
        name: req.body.name,
        email : req.body.email,
        password : password,
        role : req.body.role,
        address : req.body.address
    });    
    
    await company.save();
    const id=company.id;
    const token = jwt.sign(id,'21532153');
    res.json({success : true, token})
})

// app.post('/ngo/request-otp',verifyNgoEmailPresentMiddleware, async (req, res) => {
    
//     const email = req.body.email;
//     const otp = otpGenerator.generate(6, { upperCase: false, specialChars: false });
//     const username= req.body.name;
//     sendEmailWithOTP(username,email, otp);
//     res.json({ message: 'OTP sent to email',otp });
// });

// create API to Register a NGO

app.post('/register/ngo', async (req, res) => {

    const password= jwt.sign(req.body.password,"21532153")
    const ngo = new Ngo({
        name: req.body.name,
        email : req.body.email,
        password : password,
        role : req.body.role,
        address : req.body.address
    });    
    await ngo.save();
    const id=ngo.id;
    const token = jwt.sign(id,'21532153');
    res.json({success : true, token})
  });

// Creating Login Endpoint for company
app.post('/login/company', async(req,res)=>{
    try{let company = await Company.findOne({email : req.body.email});
    if(company){
        const decrypt= jwt.verify(company.password,"21532153");
        const passCompare = req.body.password === decrypt;
        if(passCompare){
            const data = {
                company : {
                    name: company.name,
                    id : company.id,
                    role : company.role
                }
            }
            const token = jwt.sign(data,'21532153');
            res.json({success : true, token})
        }else {
            res.json({success : false,errors: "Password is Incorrect"})
        }
    }else{
        res.json({success : false, errors: "Wrong Email ID"});
    }}catch(error){
        res.json({message: "Login Faild Check your internet"});
    }
})

// Creating Login Endpoint for ngo
app.post('/login/ngo', async(req,res)=>{
   try{ let ngo = await Ngo.findOne({email : req.body.email});
    if(ngo){
        const decrypt= await jwt.verify(ngo.password,"21532153");
        const passCompare = req.body.password === decrypt;
        if(passCompare){
            const data = {
                ngo : {
                    name: ngo.name,
                    id : ngo.id,
                    role : ngo.role
                }
            }
            const token = jwt.sign(data,'21532153');
            res.json({success : true, token})
        }else {
            res.json({success : false,errors: "Password is Incorrect"})
        }
    }else{
        res.json({success : false, errors: "Wrong Email ID"});
    }}catch(error){
        res.json({message: "Login Faild Check your internet"})
    }
})

// Create end point for Display All Ngos
app.post('/ngos', async (req,res)=>{
    try{
        let ngos=await Ngo.find({});
        res.send(ngos);
    }catch(error){
        res.json({message: "Something went wrong Data Not Found..."})
    }
})

// API Creation
app.get('/', (req, res)=> {
  res.send('app is running')
})

app.listen(port,(error)=>{
    if(!error){
        console.log("app is running on port : "+port);
    }else{
        console.log("App Not Running");
    }
})

