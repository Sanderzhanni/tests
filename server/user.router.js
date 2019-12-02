const express = require("express");
const router = express.Router();
const {User} = require("./user.model.js");
const mongoose = require("mongoose");
const multer = require('multer');

router.get("/", async (req, res)=>{
  const xs = await User.find({});
  res.send(xs);
});


router.post("/", (req, res)=>{
  const user = new User(req.body);
  user.save(err=>{
    if(err) return res.send(500);
    res.send(200);
  });
});


/** Add if doesnt exist, otherwise update*/
router.post("/signup", async (req, res)=>{
  User.updateOne({personalCode: req.body.personalCode},{
    fullName: req.body.fullName,
    personalCode: req.body.personalCode,
    phoneNumber: req.body.phoneNumber,
    address: req.body.address,
  },{upsert: true}, err =>{
    if(err) return console.log(err);
    res.send(200);
  });
});

router.get("/onlineCount", (req, res) =>{
  const random = getRandomInt(0, 100);
  res.status(200).json(random);
});

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


module.exports = router;

